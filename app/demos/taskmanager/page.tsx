"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock, User } from "lucide-react"

const users = [
  { id: "1", name: "Alex Johnson", role: "Project Manager", avatar: "👨‍💼" },
  { id: "2", name: "Maria Garcia", role: "Frontend Developer", avatar: "👩‍💻" },
  { id: "3", name: "James Wilson", role: "Backend Developer", avatar: "👨‍💻" },
  { id: "4", name: "Lisa Chen", role: "UI/UX Designer", avatar: "👩‍🎨" },
]

const userTasks = {
  "1": [
    { id: 1, title: "Review Q4 Budget", status: "completed", priority: "high", dueDate: "2024-01-15" },
    { id: 2, title: "Team Performance Reviews", status: "in-progress", priority: "medium", dueDate: "2024-01-20" },
    { id: 3, title: "Client Meeting Preparation", status: "pending", priority: "high", dueDate: "2024-01-18" },
    { id: 4, title: "Project Timeline Update", status: "pending", priority: "low", dueDate: "2024-01-25" },
  ],
  "2": [
    { id: 5, title: "Implement User Dashboard", status: "in-progress", priority: "high", dueDate: "2024-01-22" },
    { id: 6, title: "Fix Mobile Responsiveness", status: "completed", priority: "medium", dueDate: "2024-01-16" },
    { id: 7, title: "Add Dark Mode Toggle", status: "pending", priority: "low", dueDate: "2024-01-30" },
    { id: 8, title: "Optimize Bundle Size", status: "in-progress", priority: "medium", dueDate: "2024-01-28" },
  ],
  "3": [
    { id: 9, title: "Database Migration", status: "completed", priority: "high", dueDate: "2024-01-14" },
    { id: 10, title: "API Rate Limiting", status: "in-progress", priority: "high", dueDate: "2024-01-21" },
    { id: 11, title: "User Authentication Refactor", status: "pending", priority: "medium", dueDate: "2024-01-26" },
    { id: 12, title: "Performance Monitoring Setup", status: "pending", priority: "low", dueDate: "2024-02-01" },
  ],
  "4": [
    { id: 13, title: "User Research Analysis", status: "completed", priority: "high", dueDate: "2024-01-12" },
    { id: 14, title: "Wireframe New Features", status: "in-progress", priority: "medium", dueDate: "2024-01-24" },
    { id: 15, title: "Design System Updates", status: "pending", priority: "medium", dueDate: "2024-01-27" },
    { id: 16, title: "Accessibility Audit", status: "pending", priority: "high", dueDate: "2024-01-29" },
  ],
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-5 w-5 text-green-500" />
    case "in-progress":
      return <Clock className="h-5 w-5 text-blue-500" />
    default:
      return <Circle className="h-5 w-5 text-gray-400" />
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "destructive"
    case "medium":
      return "default"
    default:
      return "secondary"
  }
}

export default function TaskManagerDemoPage() {
  const [selectedUser, setSelectedUser] = useState<string>("")
  const tasks = selectedUser ? userTasks[selectedUser as keyof typeof userTasks] : []
  const selectedUserData = users.find((u) => u.id === selectedUser)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 font-space-grotesk">Task Management Demo</h1>
          <p className="text-muted-foreground mb-6">
            Select a team member to view their current tasks and project assignments.
          </p>

          <div className="max-w-xs">
            <Select value={selectedUser} onValueChange={setSelectedUser}>
              <SelectTrigger>
                <SelectValue placeholder="Select a team member" />
              </SelectTrigger>
              <SelectContent>
                {users.map((user) => (
                  <SelectItem key={user.id} value={user.id}>
                    {user.avatar} {user.name} - {user.role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedUser && selectedUserData && (
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="text-4xl">{selectedUserData.avatar}</div>
              <div>
                <h2 className="text-2xl font-semibold font-space-grotesk">{selectedUserData.name}</h2>
                <p className="text-muted-foreground">{selectedUserData.role}</p>
              </div>
            </div>

            <div className="grid gap-4">
              {tasks.map((task) => (
                <Card key={task.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(task.status)}
                        <div>
                          <CardTitle className="text-lg font-space-grotesk">{task.title}</CardTitle>
                          <CardDescription>Due: {task.dueDate}</CardDescription>
                        </div>
                      </div>
                      <Badge variant={getPriorityColor(task.priority) as any}>{task.priority}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Assigned to {selectedUserData.name}</span>
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {task.status.replace("-", " ")}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {!selectedUser && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2 font-space-grotesk">Select a Team Member</h3>
            <p className="text-muted-foreground">
              Choose a team member to view their current tasks, priorities, and project assignments.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
