"use client"


import Image from "next/image"
import Navbar from "../components/Navbar"
import Link from "next/link"
import { Info, Play } from "lucide-react"

export default function  HomeScreen() {


   

    return (
        <>        
            <div className='h-screen text-white relative'>
                <Navbar />
                <Image src={'/media/extraction.jpg'} alt={"Hero image"} width={5000} height={5000} className="absolute top-0 left-0 h-full w-full object-cover -z-50"></Image>
                <div aria-hidden='true' className="absolute top-0 left-0  h-full w-full bg-black/50 -z-50" />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32 z-10'>
                <div className='bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10'/>

                    <div className='max-w-2xl'>
                        <h1 className='mt-4 text-6xl font-extrabold text-balance'> Extraction </h1>
                        <p className='mt-2 text-lg'> 2014 | 18+ </p>
                        <p className='mt-2 text-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <p className='mt-2 text-lg'> 1h 49min </p>
                    </div>
                    <div className="flex mt-8">
                        <Link href={'/watch/123'} className='bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center cursor-pointer'> 
                            <Play className="size-6 mr-2" fill="black"/>  Play
                        </Link>

                        <Link href={'/watch/123'} className='bg-gray-500/70 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-4 flex items-center'> 
                            <Info className="size-6 mr-2" />  More info
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}


