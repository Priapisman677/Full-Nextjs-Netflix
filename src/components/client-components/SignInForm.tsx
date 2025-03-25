"use client"
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';


export function  SignInForm() {

    const searchParams = useSearchParams(); // URLSearchParams object
    const email = searchParams.get('email') /// danmi21@hotmail.com
    
    // const pathname = usePathname(); // e.g. "/home/AuthScreen"
	// console.log('Current path:', fullUrl); // /signin?email=danmi21%40hotmail.com
	// const fullUrl = `${pathname}?${searchParams.toString()}`; // Combine both
	// const emailValue = searchParams.get('email')


    const handleSubmit = async (e: React.FormEvent)=>{
    
        e.preventDefault();

        let myForm = e.currentTarget as HTMLFormElement

        const formData = new FormData(myForm)
        const email = formData.get('email')
        const password = formData.get('password')

        
        await signIn('poopCredentials', {
            email,
            password,
            redirect: true,
            callbackUrl: "/authOnly"
          });
        
        return
    }


    return (
        <form className="flex flex-col justify-evenly h-90" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-300"> Email </label>
                <input type="email" required name="email" className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md  text-white" placeholder="you@example.com" id="email" defaultValue={email || ''}/>
            </div>

            <div>
                <label htmlFor="password" className="text-sm font-medium text-gray-300" > Password </label>
                <input type="password" required className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md text-white" placeholder="••••••••" id="password" name="password"/>
            </div>

            <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"> Sign In </button>
		</form>
    )
}

