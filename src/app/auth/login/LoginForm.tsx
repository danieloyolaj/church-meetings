'use client'

import { loginSchema, LoginSchema } from '@/lib/schemas/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { GiPadlock } from 'react-icons/gi'

export default function LoginForm() {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: 'onTouched'
    })

    const onSubmit = (data: LoginSchema) => {
        console.log(data)
    }

  return (
    <Card className='w-2/5 mx-auto py-5'>
        <CardHeader className='flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-2 items-center text-secondary'>
                <div className='flex flex-row items-center gap-3'>
                    <GiPadlock size={20} />
                    <h1 className='text-3xl font-semibold'>Login</h1>
                </div>
                <p className='text-neutral-500'>Welcome back</p>
            </div>
        </CardHeader>

        <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-4'>
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
                        Login
                    </Button>
                    <Link className='p-2' href={'/auth/register'}>Don&apos;t have an account? Create one</Link>
                </div>
            </form>
        </CardBody>
    </Card>
  )
}
