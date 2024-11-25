'use client'

import { registerSchema, RegisterSchema } from '@/lib/schemas/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, CardBody, CardHeader, Input, Link } from '@nextui-org/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { HiMiniUserCircle } from "react-icons/hi2";


export default function RegisterForm() {
  
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        mode: 'onTouched'
    })

    const onSubmit = (data: RegisterSchema) => {
        console.log(data)
    }

  return (
    <Card className='w-2/5 mx-auto py-5'>
        <CardHeader className='flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-2 items-center text-secondary'>
                <div className='flex flex-row items-center gap-3'>
                    <HiMiniUserCircle size={40} />
                    <h1 className='text-3xl font-semibold'>Register</h1>
                </div>
                <p className='text-neutral-500'>Welcome</p>
            </div>
        </CardHeader>

        <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-4'>
                    <Input 
                        defaultValue=''
                        label='Name'
                        variant='bordered'
                        {...register('name')}
                        isInvalid={!!errors.name}
                        errorMessage={errors.name?.message as string}
                    />
                    <Input 
                        defaultValue=''
                        label='Email'
                        variant='bordered'
                        {...register('email')}
                        isInvalid={!!errors.email}
                        errorMessage={errors.email?.message as string}
                    />
                    <Input
                        defaultValue=''
                        label='Password'
                        variant='bordered'
                        type='password'
                        {...register('password')}
                        isInvalid={!!errors.password}
                        errorMessage={errors.password?.message as string}
                    />
                    <Button isDisabled={!isValid} fullWidth color='secondary' type='submit'>
                        Register
                    </Button>
                    <Link className='p-2' href={'/auth/login'}>Already have an account? Login instead</Link>
                </div>
            </form>
        </CardBody>
    </Card>
  
  )
}
