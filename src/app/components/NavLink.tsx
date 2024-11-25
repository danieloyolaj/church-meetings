'use client'

import { Link, NavbarItem } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import React from 'react'

//This component helps with the isActive class in the NavBar. 
//It will automatically highlight the currect clicked menu.
//This is to be imported in the TopNav component and used in the NavLinks menus


type Props = {
    href: string,
    label: string,
}
export default function NavLink({href, label}:Props) {
    const pathname = usePathname()
  return (
    <NavbarItem isActive={pathname === href} as={Link} href={href}>{label}</NavbarItem>
  )
}
