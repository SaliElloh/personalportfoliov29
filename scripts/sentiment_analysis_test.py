import re
import nltk
import contractions
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
import joblib
import pandas as pd
import pickle

# Download necessary NLTK data
nltk.download('stopwords')
nltk.download('punkt')
nltk.download('wordnet')

# Label mapping
label_to_emotion = {
    0: 'neutral',
    1: 'surprise',
    2: 'anger',
    3: 'sadness',
    4: 'joy',
    5: 'disgust',
    6: 'fear'
}

# ------------------------- #
# Preprocessing
# ------------------------- #
def clean_text(text):
    text = re.sub(r'http\S+', '', text)
    text = re.sub(r'@\w+', '', text)
    return text

def expand_contractions(text):
    return ' '.join([contractions.fix(w) for w in text.split()])

def remove_non_alpha(text):
    return re.sub(r'[^a-zA-Z\s]', '', text.lower())

def remove_stopwords(text):
    stop_words = set(stopwords.words('english'))
    return " ".join(token for token in text.split() if token not in stop_words)

def word_lemma(text):
    lemmatizer = WordNetLemmatizer()
    return " ".join([lemmatizer.lemmatize(token) for token in text.split()])

def preprocess_sentence(sentence):
    sentence = clean_text(sentence)
    sentence = expand_contractions(sentence)
    sentence = remove_non_alpha(sentence)
    sentence = remove_stopwords(sentence)
    sentence = word_lemma(sentence)
    return sentence

# ------------------------- #
# Load trained model
# ------------------------- #

model_dir = 'C:/Users/sally/Downloads/personalportfoliov29/models/sentiment_analysis/random_forest_model_sentiment_analysis.pkl'
# model = joblib.load('C:/Users/sally/Downloads/personalportfoliov29/models/sentiment_analysis/product_recommendation_knn_model.pkl')

model = joblib.load(model_dir)

# ------------------------- #
# Predict function
# ------------------------- #
def predict_emotion_with_percentages(sentence):
    processed = preprocess_sentence(sentence)
    pred_label = model.predict([processed])[0]
    pred_probs = model.predict_proba([processed])[0]
    print(pred_label)
    prob_dict = {label_to_emotion[i]: round(pred_probs[i] * 100, 2) for i in range(len(pred_probs))}
    pred_emotion = label_to_emotion[pred_label]
    return pred_emotion, prob_dict

# ------------------------- #
# Example usage
# ------------------------- #
sentence = "I’m really disappointed with this service."
emotion, probs = predict_emotion_with_percentages(sentence)

print(f"Sentence: {sentence}")
print(f"Predicted Emotion: {emotion}")
print("Probabilities:")
for emotion, pct in probs.items():
    print(f"{emotion}: {pct}%")
