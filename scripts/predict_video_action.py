import cv2
import numpy as np
import tensorflow as tf
import sys
import json
import os
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"

# Constants (match your training)
IMAGE_HEIGHT, IMAGE_WIDTH = 64, 64
SEQUENCE_LENGTH = 20
CLASSES_LIST = ['Basketball', 'Biking', 'BreastStroke', 'Diving']

def load_model_from_directory():
    """Load the trained model from the models directory"""
    # Get the directory where this script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    # Go up one level to project root, then into models directory
    project_root = os.path.dirname(script_dir)
    model_dir = os.path.join(project_root, 'models', 'human_action_recog_models')
    
    # Check if directory exists
    if not os.path.exists(model_dir):
        raise FileNotFoundError(f"Model directory not found: {model_dir}")
    
    # Look for .h5 model files in the directory
    model_files = [f for f in os.listdir(model_dir) if f.endswith('.h5')]
    
    if not model_files:
        raise FileNotFoundError(f"No .h5 model files found in {model_dir}")
    
    # Use the first model file found (you can modify this logic)
    model_path = os.path.join(model_dir, model_files[0])
    
    print(f"[v0] Loading model from: {model_path}", file=sys.stderr)
    model = tf.keras.models.load_model(model_path)
    
    return model, model_path

def predict_video_class(video_path):
    """
    Predict the class of a video using the pre-trained LRCN model.
    
    Returns:
        class_prob_dict: dict mapping each class to its probability in percent
        predicted_class_name: str, class with highest probability
        confidence: float, probability of the predicted class in percent
    """
    # Load model
    model, model_path = load_model_from_directory()
    
    # --- Frame extraction ---
    frames_list = []
    video_reader = cv2.VideoCapture(video_path)
    video_frames_count = int(video_reader.get(cv2.CAP_PROP_FRAME_COUNT))
    skip_frames_window = max(int(video_frames_count / SEQUENCE_LENGTH), 1)

    for frame_counter in range(SEQUENCE_LENGTH):
        video_reader.set(cv2.CAP_PROP_POS_FRAMES, frame_counter * skip_frames_window)
        success, frame = video_reader.read()
        if not success:
            break
        resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
        normalized_frame = resized_frame / 255.0
        frames_list.append(normalized_frame)

    video_reader.release()
    frames_list = np.array(frames_list)

    # --- Check sequence length ---
    if frames_list.shape[0] != SEQUENCE_LENGTH:
        raise ValueError(f"Video skipped: expected {SEQUENCE_LENGTH} frames, got {frames_list.shape[0]}")

    # --- Prediction ---
    input_batch = np.expand_dims(frames_list, axis=0)
    predicted_probs = model.predict(input_batch, verbose=0)[0]

    # Create dictionary of class probabilities
    class_prob_dict = {class_name: float(prob*100) for class_name, prob in zip(CLASSES_LIST, predicted_probs)}

    # Get predicted class
    predicted_label = np.argmax(predicted_probs)
    predicted_class_name = CLASSES_LIST[predicted_label]
    confidence = float(predicted_probs[predicted_label] * 100)

    return {
        'class_probabilities': class_prob_dict,
        'predicted_class': predicted_class_name,
        'confidence': confidence,
        'model_used': model_path
    }

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python predict_video_action.py <video_path>")
        sys.exit(1)
    
    video_path = sys.argv[1]
    
    try:
        result = predict_video_class(video_path)
        print(json.dumps(result))
    except Exception as e:
        error_result = {
            'error': str(e),
            'class_probabilities': {},
            'predicted_class': 'Error',
            'confidence': 0.0
        }
        print(json.dumps(error_result))
