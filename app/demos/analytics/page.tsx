"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Users, DollarSign, Eye, MousePointer } from "lucide-react"

const users = [
  { id: "1", name: "TechCorp Inc.", type: "SaaS Company", industry: "Technology" },
  { id: "2", name: "Fashion Forward", type: "E-commerce", industry: "Retail" },
  { id: "3", name: "HealthPlus Clinic", type: "Healthcare", industry: "Medical" },
  { id: "4", name: "EduLearn Platform", type: "EdTech", industry: "Education" },
]

const userAnalytics = {
  "1": {
    metrics: [
      { title: "Monthly Revenue", value: "$124,500", change: "+12.5%", trend: "up", icon: DollarSign },
      { title: "Active Users", value: "8,432", change: "+8.2%", trend: "up", icon: Users },
      { title: "Page Views", value: "45,231", change: "-2.1%", trend: "down", icon: Eye },
      { title: "Conversion Rate", value: "3.4%", change: "+0.8%", trend: "up", icon: MousePointer },
    ],
    topPages: [
      { page: "/dashboard", views: 12543, bounce: "23%" },
      { page: "/pricing", views: 8921, bounce: "45%" },
      { page: "/features", views: 6754, bounce: "38%" },
      { page: "/api-docs", views: 4321, bounce: "12%" },
    ],
  },
  "2": {
    metrics: [
      { title: "Monthly Revenue", value: "$89,200", change: "+18.3%", trend: "up", icon: DollarSign },
      { title: "Active Customers", value: "2,156", change: "+15.7%", trend: "up", icon: Users },
      { title: "Product Views", value: "78,432", change: "+22.1%", trend: "up", icon: Eye },
      { title: "Cart Conversion", value: "2.8%", change: "+0.3%", trend: "up", icon: MousePointer },
    ],
    topPages: [
      { page: "/products/dresses", views: 18432, bounce: "35%" },
      { page: "/sale", views: 15621, bounce: "28%" },
      { page: "/new-arrivals", views: 12543, bounce: "42%" },
      { page: "/accessories", views: 9876, bounce: "38%" },
    ],
  },
  "3": {
    metrics: [
      { title: "Monthly Bookings", value: "1,234", change: "+5.2%", trend: "up", icon: DollarSign },
      { title: "Patient Portal Users", value: "3,456", change: "+12.8%", trend: "up", icon: Users },
      { title: "Page Views", value: "23,456", change: "-1.5%", trend: "down", icon: Eye },
      { title: "Appointment Rate", value: "4.2%", change: "+1.1%", trend: "up", icon: MousePointer },
    ],
    topPages: [
      { page: "/book-appointment", views: 8765, bounce: "15%" },
      { page: "/services", views: 6543, bounce: "32%" },
      { page: "/patient-portal", views: 4321, bounce: "8%" },
      { page: "/contact", views: 3210, bounce: "45%" },
    ],
  },
  "4": {
    metrics: [
      { title: "Monthly Revenue", value: "$45,600", change: "+25.4%", trend: "up", icon: DollarSign },
      { title: "Active Students", value: "5,678", change: "+19.3%", trend: "up", icon: Users },
      { title: "Course Views", value: "34,567", change: "+31.2%", trend: "up", icon: Eye },
      { title: "Enrollment Rate", value: "6.8%", change: "+2.1%", trend: "up", icon: MousePointer },
    ],
    topPages: [
      { page: "/courses/javascript", views: 12345, bounce: "22%" },
      { page: "/courses/react", views: 9876, bounce: "18%" },
      { page: "/pricing", views: 7654, bounce: "35%" },
      { page: "/free-trial", views: 5432, bounce: "12%" },
    ],
  },
}

export default function AnalyticsDemoPage() {
  const [selectedUser, setSelectedUser] = useState<string>("")
  const analytics = selectedUser ? userAnalytics[selectedUser as keyof typeof userAnalytics] : null
  const selectedUserData = users.find((u) => u.id === selectedUser)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 font-space-grotesk">Analytics Dashboard Demo</h1>
          <p className="text-muted-foreground mb-6">
            Select a company to view their analytics dashboard with key metrics and insights.
          </p>

          <div className="max-w-xs">
            <Select value={selectedUser} onValueChange={setSelectedUser}>
              <SelectTrigger>
                <SelectValue placeholder="Select a company" />
              </SelectTrigger>
              <SelectContent>
                {users.map((user) => (
                  <SelectItem key={user.id} value={user.id}>
                    {user.name} - {user.type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedUser && selectedUserData && analytics && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 font-space-grotesk">{selectedUserData.name}</h2>
              <div className="flex gap-2">
                <Badge variant="outline">{selectedUserData.type}</Badge>
                <Badge variant="secondary">{selectedUserData.industry}</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {analytics.metrics.map((metric, index) => {
                const Icon = metric.icon
                return (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        {metric.trend === "up" ? (
                          <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                        )}
                        <span className={metric.trend === "up" ? "text-green-500" : "text-red-500"}>
                          {metric.change}
                        </span>
                        <span className="ml-1">from last month</span>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-space-grotesk">Top Performing Pages</CardTitle>
                <CardDescription>Most visited pages and their bounce rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analytics.topPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{page.page}</div>
                        <div className="text-sm text-muted-foreground">{page.views.toLocaleString()} views</div>
                      </div>
                      <Badge variant="outline">{page.bounce} bounce rate</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {!selectedUser && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2 font-space-grotesk">Select a Company</h3>
            <p className="text-muted-foreground">
              Choose a company to view their analytics dashboard with real-time metrics and insights.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
