"use server";

import { connectDB } from "@/lib/db";
import { User } from "@/lib/user-model";
import { userSchema } from "@/lib/zod-schemas";
import bcryptjs from "bcryptjs";

export const signUp = async({username, email, password}: {username: string, email: string, password: string}): Promise<{status: boolean, message: any}>=>{

	console.log({username, email, password});
	

	await connectDB()

	const existingUser = await User.findOne({ email });
	

	if (existingUser) {
		return {status: false, message: 'User already exists!'}
	}

    const data = userSchema.safeParse({username, email, password})

    if (!data.success){
		console.log(data.error.flatten().fieldErrors);
		
		return { 
			message: data.error.flatten().fieldErrors, status: false 
		};
	} 

    const salt = await bcryptjs.genSalt(10)

    const hashedPassword = await bcryptjs.hash(data.data.password, salt) 

	const userInput: UserInput = {
		name: data.data.username,
		email: data.data.email,
		password: hashedPassword,
        image: '/avatar1.png',
	};

    const user = new User(userInput)

    await user.save()

    return {status: true, message: 'Successfully created user.'}

}