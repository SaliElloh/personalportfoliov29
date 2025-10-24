import { type NextRequest, NextResponse } from "next/server"
import { spawn } from "child_process"
import path from "path"
import fs from "fs"

export async function POST(request: NextRequest) {
  try {
    const { sentence } = await request.json()

    if (!sentence) {
      return NextResponse.json({ error: "Sentence is required" }, { status: 400 })
    }

    // Path to the Python script
    const scriptPath = path.join(process.cwd(), "scripts", "sentiment_analysis_test.py")

    // Path to Python executable in your venv
    const venvPythonPath = path.join(process.cwd(), "pers_venv", "Scripts", "python.exe")
    const pythonCommand = fs.existsSync(venvPythonPath) ? venvPythonPath : "python"

    // Run Python script
    const pythonProcess = spawn(pythonCommand, [scriptPath, sentence])

    let output = ""
    let errorOutput = ""

    pythonProcess.stdout.on("data", (data) => {
      output += data.toString()
    })

    pythonProcess.stderr.on("data", (data) => {
      errorOutput += data.toString()
    })

    return new Promise<NextResponse>((resolve) => {
      pythonProcess.on("close", (code) => {
        if (code === 0) {
          try {
            const result = JSON.parse(output.trim())
            resolve(NextResponse.json(result))
          } catch (parseError) {
            console.error("Failed to parse Python output:", output)
            resolve(
              NextResponse.json(
                {
                  error: "Failed to parse Python script output",
                },
                { status: 500 }
              )
            )
          }
        } else {
          console.error("Python script error:", errorOutput)
          let errorMessage = errorOutput

          if (errorOutput.includes("ModuleNotFoundError") || errorOutput.includes("No module named")) {
            const missingModule = errorOutput.match(/No module named '(\w+)'/)?.[1] || "unknown"
            errorMessage = `Missing Python package: ${missingModule}. Please install required packages: pip install joblib scikit-learn`
          }

          resolve(
            NextResponse.json(
              {
                error: errorMessage,
              },
              { status: 500 }
            )
          )
        }
      })
    })
  } catch (error) {
    console.error("API route error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    )
  }
}
