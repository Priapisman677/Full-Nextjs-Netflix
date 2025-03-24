//% This will get rendered in the server!!!!!!!!!


//! I believe that to make this fully static we need to make it into its own route.

// console.log('Rund npm run build and check I log! - AUTH');


export const dynamic = 'force-static'
// ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

import Link from "next/link"
import GetStartedForm from "../../components/GetStartedForm"
import UrlCleaner from "@/components/UrlCleaner";



export default function  AuthScreen() {
console.log('Is this going to render every single time someone visits it?');  //* ANSWER: yes, it is being returned on a page that requires to check for the session
    
    //prettier-ignore
    return (
        <div className="h-screen hero-bg">
            <UrlCleaner pathName={'/join'}></UrlCleaner>
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
                <GetStartedForm></GetStartedForm>

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
        </div>
    )
}