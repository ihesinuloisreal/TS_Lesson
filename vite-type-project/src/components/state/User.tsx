import { useState } from "react"

type authUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<authUser | null>(null)
    const handleLogin = () => {
        setUser({
            name: 'Israel',
            email: 'Israel@gmail.com',
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}