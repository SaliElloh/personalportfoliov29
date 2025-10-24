"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Play, Heart, MoreHorizontal, Shuffle, Repeat } from "lucide-react"

const users = [
  { id: "1", name: "Emma Rodriguez", type: "Pop Enthusiast", avatar: "ER", mood: "Energetic" },
  { id: "2", name: "Jake Thompson", type: "Rock Fan", avatar: "JT", mood: "Focused" },
  { id: "3", name: "Sophia Chen", type: "Indie Lover", avatar: "SC", mood: "Chill" },
  { id: "4", name: "Marcus Johnson", type: "Hip-Hop Head", avatar: "MJ", mood: "Motivated" },
]

const userPlaylists = {
  "1": [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      genre: "Pop",
      liked: true,
    },
    {
      id: 2,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      genre: "Pop",
      liked: false,
    },
    {
      id: 3,
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      duration: "2:58",
      genre: "Pop Rock",
      liked: true,
    },
    {
      id: 4,
      title: "Stay",
      artist: "The Kid LAROI & Justin Bieber",
      album: "F*CK LOVE 3",
      duration: "2:21",
      genre: "Pop",
      liked: false,
    },
    {
      id: 5,
      title: "Anti-Hero",
      artist: "Taylor Swift",
      album: "Midnights",
      duration: "3:20",
      genre: "Pop",
      liked: true,
    },
  ],
  "2": [
    {
      id: 6,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      album: "A Night at the Opera",
      duration: "5:55",
      genre: "Rock",
      liked: true,
    },
    {
      id: 7,
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      album: "Led Zeppelin IV",
      duration: "8:02",
      genre: "Rock",
      liked: true,
    },
    {
      id: 8,
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      album: "Appetite for Destruction",
      duration: "5:03",
      genre: "Hard Rock",
      liked: false,
    },
    {
      id: 9,
      title: "Hotel California",
      artist: "Eagles",
      album: "Hotel California",
      duration: "6:30",
      genre: "Rock",
      liked: true,
    },
    {
      id: 10,
      title: "Thunderstruck",
      artist: "AC/DC",
      album: "The Razors Edge",
      duration: "4:52",
      genre: "Hard Rock",
      liked: false,
    },
  ],
  "3": [
    {
      id: 11,
      title: "Somebody Else",
      artist: "The 1975",
      album: "I Like It When You Sleep",
      duration: "5:47",
      genre: "Indie Pop",
      liked: true,
    },
    {
      id: 12,
      title: "Electric Feel",
      artist: "MGMT",
      album: "Oracular Spectacular",
      duration: "3:49",
      genre: "Indie Rock",
      liked: false,
    },
    {
      id: 13,
      title: "Young Folks",
      artist: "Peter Bjorn and John",
      album: "Writer's Block",
      duration: "4:38",
      genre: "Indie Pop",
      liked: true,
    },
    {
      id: 14,
      title: "Time to Dance",
      artist: "The Sounds",
      album: "Living in America",
      duration: "3:22",
      genre: "Indie Rock",
      liked: false,
    },
    {
      id: 15,
      title: "Midnight City",
      artist: "M83",
      album: "Hurry Up, We're Dreaming",
      duration: "4:03",
      genre: "Synthpop",
      liked: true,
    },
  ],
  "4": [
    {
      id: 16,
      title: "HUMBLE.",
      artist: "Kendrick Lamar",
      album: "DAMN.",
      duration: "2:57",
      genre: "Hip-Hop",
      liked: true,
    },
    {
      id: 17,
      title: "God's Plan",
      artist: "Drake",
      album: "Scorpion",
      duration: "3:19",
      genre: "Hip-Hop",
      liked: false,
    },
    {
      id: 18,
      title: "Sicko Mode",
      artist: "Travis Scott",
      album: "ASTROWORLD",
      duration: "5:12",
      genre: "Hip-Hop",
      liked: true,
    },
    {
      id: 19,
      title: "Old Town Road",
      artist: "Lil Nas X",
      album: "7 EP",
      duration: "2:37",
      genre: "Country Rap",
      liked: false,
    },
    {
      id: 20,
      title: "Sunflower",
      artist: "Post Malone & Swae Lee",
      album: "Spider-Verse Soundtrack",
      duration: "2:38",
      genre: "Hip-Hop",
      liked: true,
    },
  ],
}

export default function MusicAppDemoPage() {
  const [selectedUser, setSelectedUser] = useState<string>("")
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null)
  const playlist = selectedUser ? userPlaylists[selectedUser as keyof typeof userPlaylists] : []
  const selectedUserData = users.find((u) => u.id === selectedUser)

  const togglePlay = (songId: number) => {
    setCurrentPlaying(currentPlaying === songId ? null : songId)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 font-space-grotesk">Music Streaming Demo</h1>
          <p className="text-muted-foreground mb-6">
            Select a user to explore their personalized music library and playlists.
          </p>

          <div className="max-w-xs">
            <Select value={selectedUser} onValueChange={setSelectedUser}>
              <SelectTrigger>
                <SelectValue placeholder="Select a music lover" />
              </SelectTrigger>
              <SelectContent>
                {users.map((user) => (
                  <SelectItem key={user.id} value={user.id}>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">{user.avatar}</AvatarFallback>
                      </Avatar>
                      {user.name} - {user.type}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedUser && selectedUserData && (
          <div>
            <div className="mb-6 flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-xl">{selectedUserData.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-semibold font-space-grotesk">{selectedUserData.name}</h2>
                <div className="flex gap-2 mt-1">
                  <Badge variant="outline">{selectedUserData.type}</Badge>
                  <Badge variant="secondary">Mood: {selectedUserData.mood}</Badge>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-space-grotesk">Current Playlist</CardTitle>
                    <CardDescription>Personalized for {selectedUserData.name}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Shuffle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Repeat className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {playlist.map((song, index) => (
                    <div
                      key={song.id}
                      className={`flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors ${
                        currentPlaying === song.id ? "bg-muted" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <Button
                          size="sm"
                          variant={currentPlaying === song.id ? "default" : "ghost"}
                          onClick={() => togglePlay(song.id)}
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                        <div className="text-sm text-muted-foreground w-6">{index + 1}</div>
                        <div className="flex-1">
                          <div className="font-medium">{song.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {song.artist} • {song.album}
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {song.genre}
                      </Badge>
                      <div className="text-sm text-muted-foreground">{song.duration}</div>
                      <Button size="sm" variant="ghost" className={song.liked ? "text-red-500" : ""}>
                        <Heart className={`h-4 w-4 ${song.liked ? "fill-current" : ""}`} />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {!selectedUser && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold mb-2 font-space-grotesk">Select a Music Lover</h3>
            <p className="text-muted-foreground">
              Choose a user to explore their personalized music library, playlists, and listening preferences.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
