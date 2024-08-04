import {Sheet, SheetContent, SheetTrigger} from './sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {CiMenuFries} from 'react-icons/ci'
import { FaLocationArrow } from "react-icons/fa6";
import { Button } from './button';

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

export default function Mobile() {

    const pathname = usePathname();
  return (
   <Sheet>
    <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-main'/>
    </SheetTrigger>
    <SheetContent className='flex flex-col  border-l-2 border-l-main  '>
        <div className='mt-32  items-center  text-center'>
       
            <Link href='/' className='text-3xl'>
                Dev<span className='text-main '>Muga</span>
            </Link> 

            <div className='space-y-8 flex mt-10 flex-col'>

                    {links.map((item, index) => (

                        <Link key={index} href={item.path} className={`${item.path === pathname && "text-main border-main border-b-2"} capitalize font-medium hover:text-main transition-all`}>
                            {item.name}
                        </Link>

                    ))}
                    <Button className='bg-transparent border border-main gap-1'>
                        contact
                        <span className='text-main text-2xl'>
                            <FaLocationArrow />
                        </span>
                    </Button>
                </div>
        </div>
    </SheetContent>
   </Sheet>
  )
}
