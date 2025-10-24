import { type NextRequest, NextResponse } from "next/server"
import { spawn } from "child_process"
import path from "path"
import fs from "fs"

export async function POST(request: NextRequest) {
  try {
    const { videoPath, videoId } = await request.json()

    // Convert relative video path to absolute path
    const absoluteVideoPath = path.join(process.cwd(), "public", videoPath)

    // Path to the Python script
    const scriptPath = path.join(process.cwd(), "scripts", "predict_video_action.py")

    const venvPythonPath = path.join(process.cwd(), "pers_venv", "Scripts", "python.exe")
    const pythonCommand = fs.existsSync(venvPythonPath) ? venvPythonPath : "python"

    // Execute the Python script
    const pythonProcess = spawn(pythonCommand, [scriptPath, absoluteVideoPath])

    let output = ""
    let errorOutput = ""

    pythonProcess.stdout.on("data", (data) => {
      output += data.toString()
    })


    pythonProcess.stderr.on("data", (data) => {
      const msg = data.toString()
      console.error("[PYTHON STDERR]:", msg)
      errorOutput += msg
    })

    return new Promise((resolve) => {
      pythonProcess.on("close", (code) => {
        console.log("[PYTHON STDOUT]:", output)
        console.log("[PYTHON OUTPUT RAW]:", output)
        if (code === 0) {
          try {
            const result = JSON.parse(output.trim())
            resolve(NextResponse.json(result))
          } catch (parseError) {
            resolve(
              NextResponse.json(
                {
                  error: "Failed to parse Python script output",
                  class_probabilities: {},
                  predicted_class: "Error",
                  confidence: 0.0,
                },
                { status: 500 },
              ),
            )
          }
        } else {
          let errorMessage = errorOutput

          if (errorOutput.includes("ModuleNotFoundError") || errorOutput.includes("No module named")) {
            const missingModule = errorOutput.match(/No module named '(\w+)'/)?.[1] || "unknown"
            errorMessage = `Missing Python package: ${missingModule}. Please install required packages: pip install opencv-python tensorflow numpy`
          }

          console.error("Python script error:", errorOutput)
          resolve(
            NextResponse.json(
              {
                error: errorMessage,
                class_probabilities: {},
                predicted_class: "Error",
                confidence: 0.0,
              },
              { status: 500 },
            ),
          )
        }
      })
    })
  } catch (error) {
    console.error("API route error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        class_probabilities: {},
        predicted_class: "Error",
        confidence: 0.0,
      },
      { status: 500 },
    )
  }
}
