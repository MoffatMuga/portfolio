"use client"
import { useState } from "react"
import { Button } from "./button"
import Link from "next/link"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const contents = [
    {
        name: "solar app",
        link: "www.facebook.com",
        images: ['/solar1.png', '/solar2.png', '/solar3.png']
    },
]

export default function Project_five() {

    const [currentImage, setCurrentImage] = useState(0)
    const project = contents[0]

    const handleNext = () => {
        setCurrentImage((currentImage + 1) % project.images.length)
    }

    const handlePrev = () => {
        setCurrentImage((currentImage - 1 + project.images.length) % project.images.length)
    }
    return (
        <div className='flex flex-col p-2'>
            <div className='h-[200px] flex w-full items-center justify-center'>
                <img src={project.images[currentImage]} className='object-cover h-[200px] ' />
            </div>

            <div className='p-3'>
                <h2 className='text-center text-main'>{project.name}</h2>
            </div>

            <div className='flex flex-row  justify-around items-center '>
                <Button className='border border-primary'>
                    <Link href={project.link}>
                        view
                    </Link>
                </Button>

                <div className='flex gap-2'>
                    <button onClick={handleNext} >
                        <RiArrowLeftSLine className='rounded-full h-6 w-6 border-2 p-1 border-primary text-main focus:ring focus:ring-main active:ring active:ring-main' />
                    </button>
                    <button onClick={handlePrev}>
                        <RiArrowRightSLine className='rounded-full h-6 w-6 border-2 p-1 border-primary text-main focus:ring focus:ring-main active:ring active:ring-main' />
                    </button>
                </div>
            </div>

        </div>
    )
}


