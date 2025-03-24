"use client"

import { SignInForm } from "@/components/SignInForm";
import Link from "next/link";
import { Suspense } from "react";
// import { useState } from "react";

export default function LoginPage() {


	//prettier-ignore
    return (
		<div className="flex justify-center items-center">
		<div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg">
			<h1 className="text-center text-white text-2xl font-bold mb-4">Sign In</h1>
				<Suspense fallback={<div>Loading...</div>}>
					<SignInForm />	
				</Suspense>
			

			<div className="text-center text-gray-400"> Already a member?{' '}
				<Link href={'/signup'} className="text-red-500 hover:underline"> Sign up </Link>
			</div>
		</div>
	</div>
	);
};
