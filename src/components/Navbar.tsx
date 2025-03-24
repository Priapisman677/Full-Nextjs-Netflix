"use client"


import { LogOut, Menu, Search } from "lucide-react"
import { getSession, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
// import { useContent } from "../context/content-type"
import { Session } from "next-auth"
import { setContentTypeCookie } from "@/app/actions/content-type-cookie"
// import {useRouter} from 'next/navigation'

export default function  Navbar({contentType}: {contentType: string}) {

    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const [freshSession, setFreshSession] = useState<Session | null>(null)
    // const router = useRouter()
    const toggleMobileMenu = ()=>{
    
        setIsMobileMenuOpen(!isMobileMenuOpen)
    
        return
    }

    const handleLogout = async ()=>{
    
        // toast.success('Successfully signed out')   //!  Will get cut off.
        await signOut({redirect: true, callbackUrl: '/signin'})
        return
    }

    const handleContentTypeClick = async(type: ContentType)=>{
    
        await setContentTypeCookie(type)
        //$ If we reload here it would take a certain amount of time (full page reload). 
        //$ We could just redirect the user to their desired page such as (/watch/movie) And that would indeed get it rid of the delay but we would not be using cookies.
        //$ I will prefer using cookies for now however just so I can study their behavior.
        window.location.reload()
        // router.refresh()
        return
    }

    

    useEffect(()=>{
        const fetchSession = async()=>{
        
            const session = await getSession()
            setFreshSession(session)
        
            return
        }
        fetchSession()
    }, [])

    const userImage = ()=>{
        if(!freshSession){
            return <div className="h-8 w-8 rounded bg-gray-700 animate-pulse" />
        }else {
            return  <img src={'/media' + freshSession?.user?.image} className="h-8 rounded cursor-pointer"></img>
        }
    }
        

    return (
        //* "flex-wrap" will be used to wrap the menu in the small devices.
        <>
            <header className='max-w-6xl flex items-center justify-between p-4 h-20 flex-wrap'>
                <div className="flex items-center gap-10 z-50">
                    <Link href={'/'}>
                        <Image src='/media/netflix-logo.png' alt='Netflix Logo' className='w-32 sm:w-50' width={1000} height={1000} />
                    </Link>
                    {/* desktop navbar items */}
                    <div className='hidden sm:flex gap-2 items-center'>
                        <Link href='/' className={`hover:underline ${contentType === 'movie' && 'font-bold'}`} onClick={()=>{handleContentTypeClick('movie')}}> Movies </Link>
                        <Link href='/' className={`hover:underline ${contentType === 'tv' && 'font-bold'}`} onClick={()=>{handleContentTypeClick('tv')}}> Tv Shows </Link>
                        <Link href='/history' className='hover:underline'> Search History</Link>
                    </div>
                </div>
                <div className="flex gap-3 items-center z-50">
                    <Link href={"/search"}> <Search className='size-7 cursor-pointer'/> </Link>

                    {userImage()}

                    <LogOut onClick={handleLogout} className="cursor-pointer"></LogOut>
                    {/* <img src={user.image} alt='Avatar' className='h-8 rounded cursor-pointer' /> */}

                    <div className="sm:hidden">
                        <Menu className="size-7 cursor-pointer" onClick={toggleMobileMenu}/>
                    </div>
                </div>
            
                {isMobileMenuOpen && (
                    <div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
                        <Link href={"/"} className='block hover:underline p-2'>
                            Movies
                        </Link>
                        <Link href={"/"} className='block hover:underline p-2'>
                            Tv Shows
                        </Link>
                        <Link href={"/history"} className='block hover:underline p-2'>
                            Search History
                        </Link>
                    </div>
                )}
            </header>
        
        </>
    )
}  