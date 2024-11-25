import { Button, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import { GiChurch } from 'react-icons/gi'
import Link from 'next/link'
import React from 'react'
import NavLink from '../NavLink'

export default function TopNav() {
  return (
    <Navbar
        maxWidth='xl'
        className='bg-gradient-to-r from-blue-950 to-sky-700'
        classNames={
            {item:[
                'text-xl',
                'text-white',
                
                'data-[active=true]:text-yellow-300'
            ]}
        }
    >
        <NavbarBrand as={Link} href='/'>
            <GiChurch size={40} className='text-white'/>
            <div className='font-bold text-2xl flex'>
                <span className='text-white'>&nbsp;Church</span>
                <span className='text-white'>&nbsp;Meetings</span>
            </div>
        </NavbarBrand>

        <NavbarContent justify='center'>
            <NavLink href='/meetings' label='Meetings' />
            <NavLink href='/activities' label='Activities' />
            <NavLink href='/reports' label='Reports' />
        </NavbarContent>
        <NavbarContent justify='end'>
            <Button as={Link} href='/auth/login' variant='bordered' className='text-white'>Login</Button>
            <Button as={Link} href='/auth/register' variant='bordered' className='text-white'>Register</Button>
        </NavbarContent>

    </Navbar>
  )
}
