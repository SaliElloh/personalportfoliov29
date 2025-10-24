"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Phone, Video, MoreVertical } from "lucide-react"

const users = [
  { id: "1", name: "Alice Johnson", status: "online", avatar: "AJ", role: "Product Manager" },
  { id: "2", name: "Bob Smith", status: "away", avatar: "BS", role: "Developer" },
  { id: "3", name: "Carol Davis", status: "online", avatar: "CD", role: "Designer" },
  { id: "4", name: "David Wilson", status: "offline", avatar: "DW", role: "Marketing" },
]

const userChats = {
  "1": [
    {
      id: 1,
      sender: "Team Lead",
      message: "Good morning Alice! Ready for the sprint planning?",
      time: "9:15 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "Alice",
      message: "Yes! I've prepared the user stories for review.",
      time: "9:16 AM",
      isOwn: true,
    },
    { id: 3, sender: "Designer", message: "I'll share the mockups in a few minutes", time: "9:18 AM", isOwn: false },
    { id: 4, sender: "Alice", message: "Perfect! Looking forward to seeing them 🎨", time: "9:19 AM", isOwn: true },
    {
      id: 5,
      sender: "Developer",
      message: "Should we discuss the API endpoints first?",
      time: "9:22 AM",
      isOwn: false,
    },
  ],
  "2": [
    { id: 6, sender: "Bob", message: "Working on the authentication module", time: "10:30 AM", isOwn: true },
    {
      id: 7,
      sender: "Tech Lead",
      message: "Great! How's the progress with OAuth integration?",
      time: "10:32 AM",
      isOwn: false,
    },
    {
      id: 8,
      sender: "Bob",
      message: "Almost done. Testing with Google and GitHub providers",
      time: "10:35 AM",
      isOwn: true,
    },
    {
      id: 9,
      sender: "QA Engineer",
      message: "I can help with testing once it's ready",
      time: "10:40 AM",
      isOwn: false,
    },
    { id: 10, sender: "Bob", message: "Thanks! I'll push to staging in an hour 🚀", time: "10:42 AM", isOwn: true },
  ],
  "3": [
    { id: 11, sender: "Carol", message: "Just finished the new dashboard designs!", time: "2:15 PM", isOwn: true },
    {
      id: 12,
      sender: "Product Manager",
      message: "Awesome! Can you share them in Figma?",
      time: "2:16 PM",
      isOwn: false,
    },
    { id: 13, sender: "Carol", message: "Already shared! Check your notifications ✨", time: "2:17 PM", isOwn: true },
    {
      id: 14,
      sender: "Developer",
      message: "The animations look smooth! Feasible to implement",
      time: "2:25 PM",
      isOwn: false,
    },
    {
      id: 15,
      sender: "Carol",
      message: "Great! I made sure to keep performance in mind",
      time: "2:26 PM",
      isOwn: true,
    },
  ],
  "4": [
    {
      id: 16,
      sender: "Marketing Lead",
      message: "David, how's the campaign performance?",
      time: "3:45 PM",
      isOwn: false,
    },
    { id: 17, sender: "David", message: "Really good! CTR is up 23% this week", time: "3:47 PM", isOwn: true },
    { id: 18, sender: "David", message: "The A/B test results are promising too 📈", time: "3:48 PM", isOwn: true },
    { id: 19, sender: "Content Writer", message: "Which variant performed better?", time: "3:50 PM", isOwn: false },
    {
      id: 20,
      sender: "David",
      message: "Version B with the shorter headline won by 15%",
      time: "3:52 PM",
      isOwn: true,
    },
  ],
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "online":
      return "bg-green-500"
    case "away":
      return "bg-yellow-500"
    default:
      return "bg-gray-400"
  }
}

export default function ChatAppDemoPage() {
  const [selectedUser, setSelectedUser] = useState<string>("")
  const messages = selectedUser ? userChats[selectedUser as keyof typeof userChats] : []
  const selectedUserData = users.find((u) => u.id === selectedUser)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 font-space-grotesk">Chat Application Demo</h1>
          <p className="text-muted-foreground mb-6">
            Select a team member to view their chat conversations and message history.
          </p>

          <div className="max-w-xs">
            <Select value={selectedUser} onValueChange={setSelectedUser}>
              <SelectTrigger>
                <SelectValue placeholder="Select a team member" />
              </SelectTrigger>
              <SelectContent>
                {users.map((user) => (
                  <SelectItem key={user.id} value={user.id}>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">{user.avatar}</AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(user.status)}`}
                        />
                      </div>
                      {user.name} - {user.role}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedUser && selectedUserData && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarFallback>{selectedUserData.avatar}</AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-background ${getStatusColor(selectedUserData.status)}`}
                    />
                  </div>
                  <div>
                    <CardTitle className="font-space-grotesk">{selectedUserData.name}</CardTitle>
                    <CardDescription className="capitalize">
                      {selectedUserData.status} • {selectedUserData.role}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      {!message.isOwn && <div className="text-xs font-medium mb-1 opacity-70">{message.sender}</div>}
                      <div className="text-sm">{message.message}</div>
                      <div
                        className={`text-xs mt-1 ${
                          message.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        {message.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t p-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-muted rounded-lg px-3 py-2">
                    <span className="text-muted-foreground text-sm">Type a message...</span>
                  </div>
                  <Button size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {!selectedUser && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2 font-space-grotesk">Select a Team Member</h3>
            <p className="text-muted-foreground">
              Choose a team member to view their chat conversations and message history.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
