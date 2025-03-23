'use client';

import { signUp } from '@/app/actions/users';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function SignUpPage() {


	

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		let myForm = e.currentTarget as HTMLFormElement;

		const formData = new FormData(myForm);

		const email = formData.get('email')  as string
		const password = formData.get('password') as string
		const username = formData.get('username') as string

		console.log(email, password, username);
		

		if(!email || !password || !username) return toast.error('All fields are required')
	

		const { message, status } = await signUp({email, password, username})

		if(!status){
			return toast.error('Something went wrong')
		}

		toast.success(message)


		const result = await signIn('poopCredentials', {
			email,
			password
		})

		console.log(result);

		return;
	};

    //prettier-ignore
	return (
			<div className="flex justify-center items-center mt-20 ">
				<div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg">
					<h1 className="text-center text-white text-2xl font-bold mb-4">Sign Up</h1>

					<form className="flex flex-col justify-evenly h-90" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="email" className="text-sm font-medium text-gray-300"> Email </label>
							<input required type="email" name="email" className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md  text-white" placeholder="you@example.com" id="email"/>
						</div>

						<div>
							<label htmlFor="username" className="text-sm font-medium text-gray-300"> Username</label>
							<input name="username" required type="text" className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md  text-white" placeholder="johndoe" id="username"/>
						</div>

						<div>
							<label htmlFor="password" className="text-sm font-medium text-gray-300" > Password </label>
							<input type="password" required className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md text-white" placeholder="••••••••" id="password" name="password"/>
						</div>

						<button className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"> Sign Up </button>
					</form>

					<div className="text-center text-gray-400"> Already a member?{' '}
						<Link href={'/signin'} className="text-red-500 hover:underline"> Sign in </Link>
					</div>
				</div>
			</div>
		
	);
}
