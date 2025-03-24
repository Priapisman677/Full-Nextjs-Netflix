"use client"


import { ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation";

export default function  GetStartedForm() {

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent)=>{
    
        e.preventDefault();
        const email = new FormData(e.currentTarget as HTMLFormElement).get('email') 
        console.log("🚀 ~ handleSubmit ~ email:", email)

    

        router.push('/signin?email=' + encodeURIComponent(email as string))
    
        return
    }


    return (
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
    )
}