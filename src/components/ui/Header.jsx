"use client"
import Link from 'next/link';
import React from 'react'
import { Button } from './button';
import { usePathname } from 'next/navigation';
import { FaLocationArrow } from "react-icons/fa6";
import Mobile from './Mobile';


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


]

export default function Header() {
    const pathname = usePathname()
    console.log(pathname)

    return (
        <div className='flex justify-between py-8 container mx-auto px-4 lg:px-[200px]  border-main shadow-md  shadow-main'>
            <div>
                <Link href='/' className='text-white md:text-3xl'>Dev<span className='text-main'>Muga</span></Link>
            </div>
            <div className=' hidden md:flex '>

                <div className='space-x-8 text-white'>

                    {links.map((item, index) => (

                        <Link key={index} href={item.path} className={`${item.path === pathname && "text-main border-main border-b-2"} capitalize font-medium hover:text-main transition-all`}>
                            {item.name}
                        </Link>

                    ))}
                    
                    <Button className='bg-transparent border border-main gap-1 group-hover:text-bg-1 group '>
                        contact
                        
                            <FaLocationArrow className='text-main text-2xl '/>
                        
                    </Button>
                </div>

            </div>
            <div className='md:hidden'>
                <Mobile />
            </div>
        </div>
    )
}
