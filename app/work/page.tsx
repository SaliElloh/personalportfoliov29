"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Server, BarChart3, TrendingDown, Eye, ArrowLeft, Brain, Zap, Target } from "lucide-react"
import Link from "next/link"

// Sample data for visualizations
const featureExtractionData = [
  { name: "Raw Signal", value: 1024 },
  { name: "Filtered", value: 512 },
  { name: "Windowed", value: 256 },
  { name: "Features", value: 64 },
]

const dimensionalityReductionData = [
  { dimensions: 1024, accuracy: 0.72, method: "Original" },
  { dimensions: 512, accuracy: 0.78, method: "PCA" },
  { dimensions: 256, accuracy: 0.82, method: "LDA" },
  { dimensions: 128, accuracy: 0.85, method: "t-SNE" },
  { dimensions: 64, accuracy: 0.83, method: "UMAP" },
]

const modelPerformanceData = [
  { model: "CNN", accuracy: 0.89, f1Score: 0.87, precision: 0.88 },
  { model: "LSTM", accuracy: 0.92, f1Score: 0.91, precision: 0.9 },
  { model: "Transformer", accuracy: 0.94, f1Score: 0.93, precision: 0.92 },
  { model: "Ensemble", accuracy: 0.96, f1Score: 0.95, precision: 0.94 },
]

const correlationData = [
  { feature1: 0.1, feature2: 0.2, correlation: 0.85 },
  { feature1: 0.3, feature2: 0.4, correlation: 0.72 },
  { feature1: 0.5, feature2: 0.6, correlation: 0.91 },
  { feature1: 0.7, feature2: 0.8, correlation: 0.68 },
  { feature1: 0.2, feature2: 0.9, correlation: 0.45 },
  { feature1: 0.4, feature2: 0.1, correlation: 0.78 },
  { feature1: 0.6, feature2: 0.3, correlation: 0.82 },
  { feature1: 0.8, feature2: 0.5, correlation: 0.59 },
  { feature1: 0.9, feature2: 0.7, correlation: 0.93 },
  { feature1: 0.1, feature2: 0.8, correlation: 0.41 },
]

const timeSeriesData = [
  { time: 0, signal: 0.5, processed: 0.3 },
  { time: 1, signal: 0.8, processed: 0.6 },
  { time: 2, signal: 0.3, processed: 0.4 },
  { time: 3, signal: 0.9, processed: 0.8 },
  { time: 4, signal: 0.2, processed: 0.3 },
  { time: 5, signal: 0.7, processed: 0.6 },
  { time: 6, signal: 0.4, processed: 0.5 },
  { time: 7, signal: 0.6, processed: 0.7 },
  { time: 8, signal: 0.1, processed: 0.2 },
  { time: 9, signal: 0.8, processed: 0.9 },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
          <h1 className="font-bold text-lg font-sans">Professional Work Experience</h1>
        </div>
      </header>

      <div className="container px-4 py-8 md:px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-sans mb-4">
            Technical Expertise & Professional Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing the systems, models, and methodologies I've worked with in my professional career, from
            infrastructure management to advanced machine learning implementations.
          </p>
        </div>

        <Tabs defaultValue="systems" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="systems">Systems</TabsTrigger>
            <TabsTrigger value="models">Models</TabsTrigger>
            <TabsTrigger value="visualization">Visualization</TabsTrigger>
            <TabsTrigger value="ml-pipeline">Machine Learning Pipeline</TabsTrigger>
          </TabsList>

          <TabsContent value="systems" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-1">
              <Card>
                <CardHeader>
                  <Server className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Remote Server Infrastructure – Great Lakes / ISSF Lab</CardTitle>
                  <CardDescription>High-performance computing environments with specialized hardware</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-blue-600 text-lg">Computing Environment</h4>
                      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="text-sm font-medium">
                            CPU: AMD EPYC 7262, 16 cores / 32 threads, 124 GiB RAM, NUMA nodes, virtualization
                          </span>
                          <Badge variant="secondary">Expert</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="text-sm font-medium">Linux Servers (Ubuntu/CentOS)</span>
                          <Badge variant="secondary">Expert</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="text-sm font-medium">CentOS / RHEL 7.x, multi-user HPC environment</span>
                          <Badge variant="secondary">Expert</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-600 text-lg">GPU Computing & Containerization</h4>
                      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-sm font-medium">3x NVIDIA A100-PCIE-40GB, CUDA 12.9</span>
                          <Badge variant="secondary">Advanced</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-sm font-medium">CUDA Programming</span>
                          <Badge variant="secondary">Advanced</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-sm font-medium">Multi-GPU Training (PyTorch / TensorFlow)</span>
                          <Badge variant="secondary">Expert</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-sm font-medium">Docker Containerization (v26.1.3)</span>
                          <Badge variant="secondary">Advanced</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-sm font-medium">Kubernetes Orchestration</span>
                          <Badge variant="secondary">Intermediate</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-purple-600 text-lg">Access & Storage</h4>
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                          <span className="text-sm font-medium">SSH & Remote Access</span>
                          <Badge variant="secondary">Advanced</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                          <span className="text-sm font-medium">Local/Network storage: /data 5.9 TB, /home 750 GB</span>
                          <Badge variant="secondary">Advanced (Storage only)</Badge>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-3 p-3 bg-gray-50 rounded-lg">
                        <strong>Note:</strong> No PostgreSQL / MongoDB / Redis / AWS S3 available on this system
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="models" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <Brain className="h-8 w-8 text-indigo-600 mb-2" />
                  <CardTitle>Feature Extraction Models</CardTitle>
                  <CardDescription>Advanced models for extracting meaningful features from raw data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Audio Processing</h5>
                      <div className="space-y-1">
                        <Badge variant="outline">SSAST</Badge>
                        <Badge variant="outline">WavLM</Badge>
                        <Badge variant="outline">data2vec</Badge>
                        <Badge variant="outline">WavLabLM</Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Speech Models</h5>
                      <div className="space-y-1">
                        <Badge variant="outline">Unispeech-SAT</Badge>
                        <Badge variant="outline">HuBERT</Badge>
                        <Badge variant="outline">XLS-R</Badge>
                        <Badge variant="outline">ESPnetHuBERT</Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Audio-Visual</h5>
                      <div className="space-y-1">
                        <Badge variant="outline">PaSSt</Badge>
                        <Badge variant="outline">MAE-AST</Badge>
                        <Badge variant="outline">AST</Badge>
                        <Badge variant="outline">Byol-A</Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Self-Supervised</h5>
                      <div className="space-y-1">
                        <Badge variant="outline">Modified CPC</Badge>
                        <Badge variant="outline">Byo-S</Badge>
                        <Badge variant="outline">wav2vec 2.0</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingDown className="h-8 w-8 text-red-600 mb-2" />
                  <CardTitle>Feature Reduction & Engineering</CardTitle>
                  <CardDescription>Dimensionality reduction and feature engineering techniques</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-3">
                      <h5 className="font-medium text-red-600">Feature Reduction Models</h5>
                      <div className="space-y-2">
                        <Badge variant="outline">PCA</Badge>
                        <Badge variant="outline">UMAP</Badge>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Feature Engineering</h5>
                      <div className="space-y-2">
                        <Badge variant="outline">One Hot Encoding</Badge>
                        <Badge variant="outline">Label Encoding</Badge>
                        <Badge variant="outline">Standardizing</Badge>
                        <Badge variant="outline">Scaling</Badge>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium text-blue-600">Data Preprocessing</h5>
                      <div className="space-y-2">
                        <Badge variant="outline">Standardization</Badge>
                        <Badge variant="outline">Normalization</Badge>
                        <Badge variant="outline">Feature Scaling</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle>Clustering & Unsupervised Learning</CardTitle>
                  <CardDescription>Advanced clustering and unsupervised learning techniques</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <h5 className="font-medium text-orange-600">Clustering Algorithms</h5>
                      <div className="space-y-2">
                        <Badge variant="outline">K-Means</Badge>
                        <Badge variant="outline">MeanShift</Badge>
                        <Badge variant="outline">DBScan</Badge>
                        <Badge variant="outline">OPTICS</Badge>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium text-purple-600">Advanced Unsupervised</h5>
                      <div className="space-y-2">
                        <Badge variant="outline">Gaussian Mixture Models</Badge>
                        <Badge variant="outline">Novelty Detection</Badge>
                        <Badge variant="outline">Outlier Detection</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                  <CardTitle>Deep Learning Models</CardTitle>
                  <CardDescription>Neural network architectures for complex pattern recognition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">Res2Net</div>
                      <div className="text-sm text-muted-foreground">Residual Networks with Multi-Scale</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-green-600">Gated MLP</div>
                      <div className="text-sm text-muted-foreground">Multi-Layer Perceptron with Gating</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">ResNet-18</div>
                      <div className="text-sm text-muted-foreground">18-layer Residual Network</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Visualization Tab */}
          <TabsContent value="visualization" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>2D Visualizations</CardTitle>
                  <CardDescription>Statistical plots and data exploration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2">
                    <h4 className="font-semibold mb-4">2D Visualization Examples</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <img
                          src="/visualizations/2d/Accuracy-heatmap-for-ASVspoof19.png"
                          alt="Accuracy Heatmap for ASVspoof19 Dataset"
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                        <p className="text-xs text-muted-foreground text-center">Scatter Plot Clustering</p>
                      </div>
                      <div className="space-y-2">
                        <img
                          src="/visualizations/2d/AUC-Heatmap-forASVspoof19.png"
                          alt="AUC Heatmap for ASVspoof19 Dataset"
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                        <p className="text-xs text-muted-foreground text-center">Correlation Matrix</p>
                      </div>
                      <div className="space-y-2">
                        <img
                          src="/visualizations/2d/dbscan-clustering-2D-UMAP-2nd-one.png"
                          alt="Dbscan Clustering on 2D UMAP"
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                        <p className="text-xs text-muted-foreground text-center">Statistical Distribution</p>
                      </div>
                      <div className="space-y-2">
                        <img
                          src="/visualizations/2d/dbscan-clustering-2D-UMAP.png"
                          alt="Dbscan Clustering on 2D UMAP"
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                        <p className="text-xs text-muted-foreground text-center">Feature Importance</p>
                      </div>
                      <div className="space-y-2">
                        <img
                          src="/visualizations/2d/kmeans-cluster-results.png"
                          alt="kmeans cluster Analysis of 2D UMAP"
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                        <p className="text-xs text-muted-foreground text-center">Time Series Analysis</p>
                      </div>
                      <div className="space-y-2">
                        <img
                          src="/visualizations/2d/meanshift-clustering-2D-UMAP-on-predicted-data.png"
                          alt="Meanshift Clustering with 2D UMAP on Predicted Data"
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                        <p className="text-xs text-muted-foreground text-center">Model Evaluation</p>
                      </div>
                      <div className="space-y-2">
                        <img
                          src="/visualizations/2d/meanshift-clustering-2D-UMAP.png"
                          alt="Meanshift CLustering on 2D UMAP"
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                        <p className="text-xs text-muted-foreground text-center">ROC Curve Analysis</p>
                      </div>
                      <div className="space-y-2">
                        <img
                          src="/visualizations/2d/optics-clustering-UMAP-2D.png"
                          alt="Optics Clustering on 2D UMAP"
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                        <p className="text-xs text-muted-foreground text-center">Data Distribution</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Eye className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>3D Visualizations</CardTitle>
                  <CardDescription>Interactive 3D data exploration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2">
                    <h4 className="font-semibold mb-4">3D Visualization Examples</h4>
                    <div className="grid gap-4 md:grid-cols-1">
                      <div className="space-y-2">
                        <img
                          src="/visualizations/3d/3D-UMAP-PROJECT.png"
                          alt="3D Visualization of UMAP Projected Data"
                          className="w-full h-40 object-cover rounded-lg border"
                        />
                        <p className="text-xs text-muted-foreground text-center">3D Clustering Analysis</p>
                      </div>
                      <div className="space-y-2">
                        <img
                          src="/visualizations/3d/dbscan-3D-UMAP-2.png"
                          alt="3D Visualization of DBScan Clustering on 3D UMAP"
                          className="w-full h-40 object-cover rounded-lg border"
                        />
                        <p className="text-xs text-muted-foreground text-center">Mathematical Surface</p>
                      </div>
                      <div className="space-y-2">
                        <img
                          src="/visualizations/3d/dbscan-3D-UMAP.png"
                          alt="3D Visualization of DBScan Clustering on 3D UMAP"
                          className="w-full h-40 object-cover rounded-lg border"
                        />
                        <p className="text-xs text-muted-foreground text-center">Volume Data Visualization</p>
                      </div>
                      <div className="space-y-2">
                        <img
                          src="/visualizations/3d/dbscan-3D-UMAP.png"
                          alt="3D Visualization of DBScan Clustering on 3D UMAP"
                          className="w-full h-40 object-cover rounded-lg border"
                        />
                        <p className="text-xs text-muted-foreground text-center">Neural Network Architecture</p>
                      </div>
                      <div className="space-y-2">
                        <img
                          src="/visualizations/3d/feature-space-3d.jpg"
                          alt="3D Feature Space"
                          className="w-full h-40 object-cover rounded-lg border"
                        />
                        <p className="text-xs text-muted-foreground text-center">High-Dimensional Feature Space</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Machine Learning Pipeline Tab */}
          <TabsContent value="ml-pipeline" className="space-y-6">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Machine Learning Pipeline Workflow</CardTitle>
                <CardDescription>
                  End-to-end machine learning workflow from data collection to deployment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Step 1: Data Collection */}
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">1</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-blue-600 mb-3">Data Collection</h3>
                        <p className="text-muted-foreground mb-4">
                          Working with large, high-dimensional datasets from multiple domains
                        </p>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-medium mb-2">Audio Datasets</h4>
                            <div className="space-y-1 text-sm">
                              <div>• ASVspoof (anti-spoofing)</div>
                              <div>• CN-Celeb (speaker recognition)</div>
                              <div>• Custom audio protocols</div>
                            </div>
                          </div>
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-medium mb-2">Vision Datasets</h4>
                            <div className="space-y-1 text-sm">
                              <div>• Vision dataset</div>
                              <div>• Custom extracted frames</div>
                            </div>
                          </div>
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-medium mb-2">Data Structure</h4>
                            <div className="space-y-1 text-sm">
                              <div>• Train/Dev/Test splits</div>
                              <div>• Protocol-based trials</div>
                              <div>• Camera Fingerprint Dataset</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-blue-300 to-green-300"></div>
                  </div>

                  {/* Step 2: Data Preprocessing */}
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-lg">2</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-green-600 mb-3">Data Preprocessing</h3>
                        <p className="text-muted-foreground mb-4">
                          Multi-modal data preprocessing and format standardization
                        </p>
                        <div className="grid gap-4 md:grid-cols-3">
                          <div className="p-4 bg-green-50 rounded-lg">
                            <h4 className="font-medium mb-2">Audio Processing</h4>
                            <div className="space-y-1 text-sm">
                              <div>• 24-bit → 16-bit conversion</div>
                              <div>• Spectrogram extraction</div>
                              <div>• MFCC feature extraction</div>
                              <div>• Audio embeddings</div>
                            </div>
                          </div>
                          <div className="p-4 bg-green-50 rounded-lg">
                            <h4 className="font-medium mb-2">Video/Image Processing</h4>
                            <div className="space-y-1 text-sm">
                              <div>• OpenCV frame extraction</div>
                              <div>• Resize (96×96, 64×64)</div>
                              <div>• ImageNet normalization</div>
                              <div>• Data augmentation</div>
                            </div>
                          </div>
                          <div className="p-4 bg-green-50 rounded-lg">
                            <h4 className="font-medium mb-2">Data Processing</h4>
                            <div className="space-y-1 text-sm">
                              <div>• Format standardization</div>
                              <div>• Quality validation</div>
                              <div>• Metadata extraction</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-green-300 to-purple-300"></div>
                  </div>

                  {/* Step 3: Feature Engineering */}
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-lg">3</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-purple-600 mb-3">
                          Feature Engineering & Representation Learning
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Advanced feature extraction and dimensionality reduction techniques
                        </p>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          <div className="p-4 bg-purple-50 rounded-lg">
                            <h4 className="font-medium mb-2">Audio Features</h4>
                            <div className="space-y-1 text-sm">
                              <div>• MFCCs</div>
                              <div>• Spectrogram features</div>
                              <div>• Audio embeddings</div>
                            </div>
                          </div>
                          <div className="p-4 bg-purple-50 rounded-lg">
                            <h4 className="font-medium mb-2">Vision Features</h4>
                            <div className="space-y-1 text-sm">
                              <div>• ResNet50 pretrained</div>
                              <div>• Data augmentation</div>
                              <div>• Transfer learning</div>
                            </div>
                          </div>
                          <div className="p-4 bg-purple-50 rounded-lg">
                            <h4 className="font-medium mb-2">Dimensionality</h4>
                            <div className="space-y-1 text-sm">
                              <div>• PCA reduction</div>
                              <div>• DBSCAN clustering</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-purple-300 to-red-300"></div>
                  </div>

                  {/* Step 4: Modeling */}
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-lg">4</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-red-600 mb-3">Modeling</h3>
                        <p className="text-muted-foreground mb-4">
                          Deep learning and classical ML model implementations
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="p-4 bg-red-50 rounded-lg">
                            <h4 className="font-medium mb-3">Deep Learning Models</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center p-2 bg-white rounded border">
                                <span className="text-sm font-medium">ResNet50</span>
                                <Badge variant="secondary">Multi-label Recognition</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-white rounded border">
                                <span className="text-sm font-medium">LRCN</span>
                                <Badge variant="secondary">Action Recognition</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-white rounded border">
                                <span className="text-sm font-medium">ConvLSTM</span>
                                <Badge variant="secondary">Spatiotemporal</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-white rounded border">
                                <span className="text-sm font-medium">gMLP</span>
                                <Badge variant="secondary">Meta-learning</Badge>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 bg-red-50 rounded-lg">
                            <h4 className="font-medium mb-3">Classical ML</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center p-2 bg-white rounded border">
                                <span className="text-sm font-medium">One-Class SVM</span>
                                <Badge variant="secondary">Anomaly Detection</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-white rounded border">
                                <span className="text-sm font-medium">DBSCAN</span>
                                <Badge variant="secondary">Clustering</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-red-300 to-orange-300"></div>
                  </div>

                  {/* Step 5: Training & Optimization */}
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-lg">5</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-orange-600 mb-3">Training & Optimization</h3>
                        <p className="text-muted-foreground mb-4">
                          High-performance training with resource management and optimization
                        </p>
                        <div className="grid gap-4 md:grid-cols-3">
                          <div className="p-4 bg-orange-50 rounded-lg">
                            <h4 className="font-medium mb-2">Resource Management</h4>
                            <div className="space-y-1 text-sm">
                              <div>• Batch size tuning (32)</div>
                              <div>• GPU memory optimization</div>
                              <div>• A100, V100, RTX A6000</div>
                              <div>• ResourceExhaustedError handling</div>
                            </div>
                          </div>
                          <div className="p-4 bg-orange-50 rounded-lg">
                            <h4 className="font-medium mb-2">Distributed Training</h4>
                            <div className="space-y-1 text-sm">
                              <div>• Multi-GPU training</div>
                              <div>• Data partition management</div>
                              <div>• Memory optimization</div>
                              <div>• Parallel processing</div>
                            </div>
                          </div>
                          <div className="p-4 bg-orange-50 rounded-lg">
                            <h4 className="font-medium mb-2">Meta-Learning</h4>
                            <div className="space-y-1 text-sm">
                              <div>• MGT repository</div>
                              <div>• Domain generalization</div>
                              <div>• G1, G2, G3, G4 domains</div>
                              <div>• Cross-domain adaptation</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-orange-300 to-yellow-300"></div>
                  </div>

                  {/* Step 6: Evaluation */}
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-yellow-600 font-bold text-lg">6</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-yellow-600 mb-3">Evaluation</h3>
                        <p className="text-muted-foreground mb-4">
                          Comprehensive model evaluation and performance analysis
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="p-4 bg-yellow-50 rounded-lg">
                            <h4 className="font-medium mb-3">Performance Metrics</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm">EER (Equal Error Rate)</span>
                                <Badge variant="outline">Spoof Detection</Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Accuracy, Precision, Recall</span>
                                <Badge variant="outline">Classification</Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">F1-Score</span>
                                <Badge variant="outline">Balanced Metric</Badge>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 bg-yellow-50 rounded-lg">
                            <h4 className="font-medium mb-3">Cross-Validation</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm">K-Fold Validation</span>
                                <Badge variant="outline">Model Robustness</Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Stratified Sampling</span>
                                <Badge variant="outline">Balanced Splits</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                          <h5 className="font-medium text-sm mb-2">Error Handling & Debugging</h5>
                          <div className="text-sm text-muted-foreground">
                            Model saving/loading issues, protocol misalignment, missing enroll files, and performance
                            optimization
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-yellow-300 to-indigo-300"></div>
                  </div>

                  {/* Step 7: Deployment & Demos */}
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-600 font-bold text-lg">7</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Deployment & Demos</h3>
                        <p className="text-muted-foreground mb-4">Production deployment and real-world applications</p>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="p-4 bg-indigo-50 rounded-lg">
                            <h4 className="font-medium mb-3">Infrastructure</h4>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                <span className="text-sm">Docker containerization (v26.1.3)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                <span className="text-sm">Multi-GPU distributed systems</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                <span className="text-sm">Remote server infrastructure</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 bg-indigo-50 rounded-lg">
                            <h4 className="font-medium mb-3">Applications</h4>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                <span className="text-sm">Audio spoof detection service</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                <span className="text-sm">Fatigue detection (autonomous driving)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                <span className="text-sm">Interactive demo platforms</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                          <h5 className="font-medium text-indigo-700 mb-2">Demo Example</h5>
                          <p className="text-sm text-indigo-600">
                            Interactive web application where users upload audio files → system analyzes and detects
                            spoof vs bonafide audio in real-time
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
