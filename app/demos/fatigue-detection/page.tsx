"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Eye, EyeOff, Camera, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function FatigueDetectionDemo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-4 flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-bold font-sans">Back to Portfolio</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Eye className="h-5 w-5 text-accent" />
            <span className="font-bold font-sans">Passive Fatigue Detection Demo</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-sans">Project Demonstration</CardTitle>
              <CardDescription>See how the passive fatigue detection system works</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <video
                    controls
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-contain"
                    src="gaze_detection_video.mp4"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  This demonstration shows how the fatigue detection system analyzes facial features, eye movements, and
                  head pose to detect signs of fatigue in real-time
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Project Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-sans">System Overview</CardTitle>
                <CardDescription>How passive fatigue detection works</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Eye className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Eye Tracking</h4>
                        <p className="text-sm text-muted-foreground">
                          Monitors eye closure duration and frequency to detect microsleep episodes
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <EyeOff className="h-5 w-5 text-orange-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Blink Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          Analyzes blink patterns and duration to identify fatigue indicators
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Camera className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Head Pose Detection</h4>
                        <p className="text-sm text-muted-foreground">
                          Tracks head position and movement to detect nodding or drooping
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Real-time Alerts</h4>
                        <p className="text-sm text-muted-foreground">
                          Provides immediate notifications when fatigue levels exceed safe thresholds
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-sans">Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Detection Method</span>
                    <span>Computer Vision + ML</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Speed</span>
                    <span>30 FPS Real-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Accuracy</span>
                    <span>94.2% Detection Rate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <span>&lt; 500ms Alert</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hardware</span>
                    <span>Standard Webcam</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
