"use client"

import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import Link from 'next/link';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";



const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1200 })
  })

  return (
    <main className='mt-6 container lg:px-[200px] mx-auto px-4  max-h-[calc(100vh-100px)] mb-4 space-y-4'>
      <div className='flex flex-col lg:flex-row w-full gap-2 '>
        <div className='w-full max-w-md  flex flex-col '>

          <div className='mt-5 md:mt-10 text-center lg:text-start space-y-3'>
            <h2 className='md:text-5xl text-3xl font-semibold'>
              Hello & Welcome
            </h2>
            <p className=' text-3xl'>
              I'm Moffat Muga,
              <br />
              <TypeAnimation
                sequence={[
                  "a web developer",
                  3000,
                  "a mobile developer",
                  3000
                ]}
                wrapper="span"
                speed={60}
                className='text-2xl text-main'
                repeat={Infinity}
              />

            </p>
            <p className='font-light' data-aos="fade-right">
              dedicated to creating innovative and efficient solutions using the latest technologies. With a strong foundation in web development and a knack for problem-solving, I specialize in building modern, responsive applications that enhance user experiences and drive business success.
            </p>
          </div>

          <div className='mt-5 flex flex-col md:flex-row gap-2 md:mt-10 justify-center lg:justify-start'>
            <Button className='bg-main text-bg-1 font-semibold hover:bg-transparent hover:text-main'>
              <Link href='contact'>
                Hire me
              </Link>

            </Button>

            <Button className='relative border border-primary'>
              <Link href='projects' className='text-main tracking-wide font-light h-full w-full block relative hover:text-bg-2 text-bold'>
                see projects
              </Link>
            </Button>

          </div>

          <div className='flex flex-row gap-4 mt-5 md:mt-10 justify-center lg:justify-start text-2xl cursor-pointer '>
            <FaGithub className='rounded-full bg-main text-bg-1 h-10 w-10 p-1 hover:scale-110 transition ease-in-out delay-150 shadow-xl' />
            <FaFacebookF className='rounded-full bg-main text-bg-1 h-10 w-10 p-1 hover:scale-110 transition ease-in-out delay-150 shadow-xl' />
            <FaInstagram className='rounded-full bg-main text-bg-1 h-10 w-10 p-1 hover:scale-110 transition ease-in-out delay-150 shadow-xl' />
            <RiTwitterXLine className='rounded-full bg-main text-bg-1 h-10 w-10 p-1 hover:scale-110 transition ease-in-out delay-150 shadow-xl' />

          </div>

        </div>

        <div className='w-full md:max-w-xl mx-auto flex relative justify-center '>
          <div className='hidden shiny-border-container items-center h-[380px] w-[380px] md:h-[450px] md:w-[450px]'>
            <img src='/muga.png' className='md:h-[350px] md:w-[350px] h-[220px] w-[220px] object-cover bg-white rounded-full' />
          </div>

          <div className=' hidden md:flex absolute z-30 transform-translate -translate-x-[210px] translate-y-[190px] bg-main text-bg-1 border-none px-2 py-1 border-b-2 border-bg-1 shadow-xl'>
            <div className='flex justify-center flex-col'>
              <span className='text-center font-bold text-xl'>
                <CountUp
                  start={0}
                  end={4}
                  duration={10}
                  suffix="+"
                />
              </span>
              <p className='text-center text-xs'>satisfied
                <br />
                clients
              </p>
            </div>
          </div>

          <div className=' hidden md:flex absolute z-30 transform-translate translate-x-[10px] translate-y-[420px] bg-main text-bg-1 border-none px-2 py-1 border-b-2 border-bg-1 shadow-xl'>
            <div className='flex justify-center flex-col'>
              <span className='text-center font-bold text-xl'>
                <CountUp
                  start={0}
                  end={90}
                  duration={10}
                  suffix="%"
                />
              </span>
              <p className='text-center text-xs'>client
                <br />
                satisfaction
              </p>
            </div>
          </div>

          <div className=' hidden md:flex absolute z-30 transform-translate translate-x-[220px] translate-y-[120px] bg-main text-bg-1 border-none px-2 py-1 border-b-2 border-bg-1 shadow-xl'>
            <div className='flex justify-center flex-col'>
              <span className='text-center font-bold text-xl'>
                <CountUp
                  start={0}
                  end={1}
                  duration={10}
                  suffix="+"
                />
              </span>
              <p className='text-center text-xs'>years of
                <br />
                experience
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='md:hidden grid grid-cols-3 items-center mx-auto'>
        <div className='flex  text-main border-primary px-2 py-1 border-l-2  '>
          <div className='flex justify-center flex-col'>
            <span className='text-center font-bold'>
              <CountUp
                start={0}
                end={90}
                duration={10}
                suffix="%"
              />
            </span>
            <p className='text-center text-xs primary'>client
              <br />
              satisfaction
            </p>
          </div>
        </div>

        <div className='flex  text-main border-primary px-2 py-1 border-l-2  '>
          <div className='flex justify-center flex-col'>
            <span className='text-center font-bold'><CountUp
              start={0}
              end={1}
              duration={10}
              suffix="+"
            /></span>
            <p className='text-center text-xs primary'>years of
              <br />
              experience
            </p>
          </div>
        </div>


        <div className='flex  text-main border-primary px-2 py-1 border-l-2  '>
          <div className='flex justify-center flex-col'>
            <span className='text-center font-bold'>
              <CountUp
                start={0}
                end={4}
                duration={10}
                suffix="+"
              />
            </span>
            <p className='text-center text-xs primary'>satisfied
              <br />
              clients
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
export default Home;
