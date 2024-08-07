"use client"
import Link from 'next/link';
import React from 'react'
import { Button } from './button';
import { usePathname } from 'next/navigation';
import { FaLocationArrow } from "react-icons/fa6";
import Mobile from './Mobile';
import ThemeToggle from './ThemeToggle';



const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "about",
        path: "/about"
    },
    {
        name: "projects",
        path: "/projects"
    },
    {
        name: "contact",
        path: "/contact"
    },


]

export default function Header() {
    const pathname = usePathname()
    console.log(pathname)

    const handleContactClick = () => {
        const phoneNumber = '+254715662604'
        const message = 'Hello Muga, Id like you to create me a website ...'
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.location.href = url

    }

    return (
        <div className='flex justify-between py-8 container mx-auto px-4 lg:px-[200px]  border-main shadow-md  shadow-main  '>
            <div>
                <Link href='/' className=' md:text-3xl'>Dev<span className=''>Muga</span></Link>
            </div>

            <div>
                <ThemeToggle />
            </div>
            <div className=' hidden md:flex '>

                <div className='space-x-8 '>

                    {links.map((item, index) => (

                        <Link key={index} href={item.path} className={`${item.path === pathname && " border-main border-b-2"} capitalize font-medium hover:text-main transition-all`}>
                            {item.name}
                        </Link>

                    ))}

                    <Button className='bg-transparent border border-main gap-1 hover:text-bg-1 group ' onClick={handleContactClick}>
                        chat me

                        <FaLocationArrow className='text-main text-2xl group-hover:text-bg-1' />


                    </Button>
                </div>

            </div>
            <div className='md:hidden'>
                <Mobile />
            </div>
        </div>
    )
}
