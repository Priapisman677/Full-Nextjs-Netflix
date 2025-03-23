import { z } from 'zod';



//pretier-ignore
export const userSchema = z.object({
    
        username: z.string().min(1, 'Name is required').nonempty('Name is required'),
        email: z.string().email('Invalid email').nonempty('Email is required'),
        password: z.string().min(6, 'Password must be at least 6 characters long').nonempty('Password is required'),
        image: z.string().optional(),
        searchHistory: z.array(z.string()).optional(),
});

type UserSchemaType = z.infer<typeof userSchema>;



export const LoginCredentialsSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Password is required"),
})

type LoginSchemaType = z.infer<typeof LoginCredentialsSchema>
