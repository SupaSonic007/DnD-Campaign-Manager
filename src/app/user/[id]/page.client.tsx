"use client"

export default function ClientPage({user}: { user: {id: string, username: string, createdAt: Date | null, updated: Date | null }}) {
    
    return <ul>
        <li>{user.username}</li>
        <li suppressHydrationWarning>{user.createdAt?.toUTCString()}</li>
    </ul>
}