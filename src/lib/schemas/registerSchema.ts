import {z} from 'zod'

//This here is for validating the email and the password in the Login Form
//It uses the zod library
//This will be used in the LoginForm component
export const registerSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(7, {
        message: 'Password must be at least 7 characters long'
    })
})

export type RegisterSchema = z.infer<typeof registerSchema>