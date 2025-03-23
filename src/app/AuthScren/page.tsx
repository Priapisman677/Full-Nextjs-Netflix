"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function  AuthScreen() {
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent)=>{
    
        e.preventDefault();
        const email = new FormData(e.currentTarget as HTMLFormElement).get('email') 
        console.log("🚀 ~ handleSubmit ~ email:", email)

        router.push('/signin?email=' + email)
    
        return
    }

    //prettier-ignore
    return (
        <div className=' relative'>
			{/* Navbar */}
			<header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
				<img src='/media/netflix-logo.png' alt='Netflix Logo' className='w-32 md:w-52' />
				<Link href={"/signin"} className='text-white bg-red-600 py-1 px-2 rounded'>
					Sign In
				</Link>
			</header>

            <div className="flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto">
                <h1 className='text-4xl md:text-6xl font-bold mb-4'>Unlimited movies, TV shows, and more</h1>
                <p className='text-lg mb-4'>Watch anywhere. Cancel anytime.</p>
				<p className='mb-4'>Ready to watch? Enter your email to create or restart your membership.</p>

                {/* //$ md: reads like "medium screens and up"   */}
                <form className="flex md:flex-row flex-col gap-4 w-1/2" onSubmit={handleSubmit}>
                  <input type='email'
						placeholder='Email address'
						className='p-2 rounded flex-1 bg-black/80 border border-gray-700'
						name="email"
					/>
                    <button className='bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>
						Get Started
						<ChevronRight className='size-8 md:size-10' />
					</button>

                </form>

            </div>
            {/* //* Separator */}
            <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

                {/* //* First section */}
                <div className='py-10 bg-black text-white'> 
                    <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                        {/* //* Left */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Enjoy on your TV</h2>
                            <p className='text-lg md:text-xl'>
                                Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                            </p>
                        </div>
                        {/* //* Right */}
                        <div className="flex-1 relative">
                            <img src="/media/tv.png" alt="Tv image" className="mt-4 z-20 relative"></img>
                            <video autoPlay={true} loop={true} muted={true} playsInline={true} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                <source src="/media/hero-vid.m4v"></source>
                            </video>
                        </div>
                    </div>   
                </div>

         
        </div>
    )
}