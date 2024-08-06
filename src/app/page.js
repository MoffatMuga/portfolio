"use client"
import Image from "next/image";
import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import Link from 'next/link';



const Home = () => {
  return (
    <main className='mt-6 container lg:px-[200px] mx-auto px-4  max-h-[calc(100vh-100px)] mb-4'>
      <div className='flex flex-col lg:flex-row w-full gap-2 '>
        <div className='w-full max-w-md  flex flex-col '>

          <div className='mt-5 md:mt-10 text-center lg:text-start space-y-3'>
            <h2 className='md:text-5xl text-3xl font-semibold text-white'>
              Hello & Welcome
            </h2>
            <p className=' text-3xl text-white'>
              I'm Moffat Muga,
              <br />
              <TypeAnimation
                sequence={[
                  "a web developer",
                  3000,
                  "a UI/UX designer",
                  3000
                ]}
                wrapper="span"
                speed={60}
                className='text-2xl text-main'
                repeat={Infinity}
              />

            </p>
            <p className='text-white font-light'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className='mt-5 flex flex-col md:flex-row gap-2 md:mt-10 justify-center lg:justify-start'>
            <Button className='bg-main text-bg-1 font-semibold'>
              <Link href='contact'>
                Hire me
              </Link>

            </Button>

            <Button className='relative border border-primary'>
              <Link href='projects' className='text-main tracking-wide font-light h-full w-full block relative '>
                see projects
              </Link>
            </Button>

          </div>

          <div className='flex flex-row gap-4 mt-5 md:mt-10 justify-center lg:justify-start text-2xl cursor-pointer '>
            <FaGithub className='rounded-full bg-main text-bg-1 h-8 w-8 p-1 shadow-md' />
            <FaFacebookF className='rounded-full bg-main text-bg-1 h-8 w-8 p-1' />
            <FaInstagram className='rounded-full bg-main text-bg-1 h-8 w-8 p-1' />
            <RiTwitterXLine className='rounded-full bg-main text-bg-1 h-8 w-8 p-1' />

          </div>

        </div>

        <div className='w-full md:max-w-xl mx-auto flex relative justify-center '>
          <div className='flex items-center justify-center md:border-2 rounded-full border-primary h-[450px] w-[450px] p-4 '>
            <img src='/muga.png' className='md:h-[350px] md:w-[350px] h-[250px] w-[250px] object-cover bg-white rounded-full' />
          </div>

          <div className=' hidden md:flex absolute z-30 transform-translate -translate-x-[210px] translate-y-[190px] bg-main text-bg-1 border-none px-2 py-1 border-b-2 border-bg-1 shadow-xl'>
            <div className='flex justify-center flex-col'>
              <span className='text-center'>
                <CountUp
                  start={0}
                  end={100}
                  duration={3}
                  suffix="%"
                />
              </span>
              <p className='text-center text-xs'>completed
                <br />
                projects
              </p>
            </div>
          </div>

          <div className=' hidden md:flex absolute z-30 transform-translate translate-x-[10px] translate-y-[400px] bg-main text-bg-1 border-none px-2 py-1 border-b-2 border-bg-1 shadow-xl'>
            <div className='flex justify-center flex-col'>
              <span className='text-center'>100%</span>
              <p className='text-center text-xs'>completed
                <br />
                projects
              </p>
            </div>
          </div>

          <div className=' hidden md:flex absolute z-30 transform-translate translate-x-[220px] translate-y-[120px] bg-main text-bg-1 border-none px-2 py-1 border-b-2 border-bg-1 shadow-xl'>
            <div className='flex justify-center flex-col'>
              <span className='text-center'>100%</span>
              <p className='text-center text-xs'>completed
                <br />
                projects
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='md:hidden grid grid-cols-3 items-center mx-auto'>
        <div className='flex  text-main border-primary px-2 py-1 border-l-2  '>
          <div className='flex justify-center flex-col'>
            <span className='text-center'>100%</span>
            <p className='text-center text-xs text-white'>completed
              <br />
              projects
            </p>
          </div>
        </div>

        <div className='flex  text-main border-primary px-2 py-1 border-l-2  '>
          <div className='flex justify-center flex-col'>
            <span className='text-center'>100%</span>
            <p className='text-center text-xs text-white'>completed
              <br />
              projects
            </p>
          </div>
        </div>


        <div className='flex  text-main border-primary px-2 py-1 border-l-2  '>
          <div className='flex justify-center flex-col'>
            <span className='text-center'>100%</span>
            <p className='text-center text-xs text-white'>completed
              <br />
              projects
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
export default Home;
