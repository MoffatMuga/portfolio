"use client"
import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GiEarthAfricaEurope } from "react-icons/gi";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


const contact = () => {

    useEffect(() => {
        AOS.init({ duration: 1400 })
      })
    
    return (
        <div className='mx-auto lg:px-[200px] container flex flex-col md:justify-between px-4 mb-4'>
            <div className='flex flex-row'>
                <div className="md:w-1/2 w-full flex flex-col justify-center p-8">
                    <h1 className="text-3xl font-bold mb-8 text-center text-white">Get in touch<span className='text-main'>.</span></h1>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>

                                <input className="w-full p-3 border-b border-primary outline-none bg-bg-1 text-primary" type="text" id="name" name="name" placeholder="Name" />
                            </div>
                            <div>

                                <input className="w-full p-3 border-b border-primary outline-none bg-bg-1 text-white" type="text" id="lastName" name="lastName" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>

                                <input className="w-full p-3 border-b border-primary outline-none  bg-bg-1 text-white" type="email" id="email" name="email" placeholder="Email" />
                            </div>
                            <div>

                                <input className="w-full p-3 outline-none border-b border-primary  bg-bg-1 text-white" type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone number" />
                            </div>
                        </div>
                        <div>

                            <textarea className="w-full p-3 border-b border-primary outline-none bg-bg-1 text-white" id="message" name="message" placeholder="Message" rows="4"></textarea>
                        </div>
                        <div className="flex justify-center">
                            <Button className="hover:text-bg-2 text-white p-3 rounded-lg w-1/2 border border-primary" type="submit">Submit now</Button>
                        </div>
                    </form>
                </div>


                <div className='w-1/2 hidden md:flex' data-aos="fade-up-left">
                    <img src='/rafiki.png' />
                </div>
            </div>


            <div className='flex flex-col space-y-3 md:flex-row gap-3 md:gap-6 justify-around mx-auto w-full mt-4' >
                <div className='flex flex-col items-center justify-center space-y-3'>
                    <FaLocationDot className='text-3xl text-main' />
                    <span>
                        Rongo
                    </span>
                </div>

                <div className='flex flex-col items-center justify-center space-y-3'>
                    <FaPhoneAlt className='text-3xl text-main' />
                    <span>
                        0715662604
                    </span>
                </div>

                <div className='flex flex-col items-center justify-center space-y-3'>
                    <GiEarthAfricaEurope className='text-3xl text-main' />
                    <span>
                        Kenya
                    </span>
                </div>
            </div>
        </div>
    )
}

export default contact;