"use client"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function  HomeScreen() {

    const router = useRouter()

    const handleSignOut = async()=>{
        await signOut({redirect: false})
        toast.success('Logged out successfully!')
        router.push('/signin')
    }

    return (
        <>        
            <div className="cursor-pointer" onClick={handleSignOut}>Logout</div>
            <div>HomeScreen</div>
        </>
    )
}


