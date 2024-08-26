"use client"
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import Review from "@/components/ui/Review";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";



const contents = [
  {
    number: '01',
    title: "WEB DEVELOPMENT",
    message: "I specialize in creating dynamic and responsive web applications using modern technologies where I utilize HTML, CSS, React, and Next.js, Express, Ruby on Rails, and Django along with UI frameworks to craft intuitive and engaging user interfaces.My database of choice is MongoDB, ensuring efficient data management and storage."
  },
  {
    number: '02',
    title: "MOBILE DEVELOPMENT",
    message: "n the realm of mobile development, I use Firebase and React Native to create seamless and high-performance mobile applications. This combination allows me to develop cross-platform solutions that provide a native-like experience on both iOS and Android devices"
  },
  {
    number: '03',
    title: "SOFTWARE ENGINEERING",
    message: "With a strong foundation in software engineering principles, I develop high-quality software solutions tailored to meet specific needs. My proficiency in Ruby, JavaScript, and Python enables me to tackle diverse challenges and deliver robust, maintainable code."
  }
];

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1200 })
  })

  return (
    <div className='mx-auto lg:px-[200px] container px-4'>
      <div className='mt-6 mx-auto space-y-16'>
        <h2 className='text-center text-2xl font-semibold '>
          About<span className='text-main '> .</span>
        </h2>
        <div className='flex max-w-xl mx-auto'>
          <p className='secondary text-center text-pretty'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <h2 className='secondary text-center text-xl font-semibold  mt-3rem'>
          My Skills <span className='text-main'> .</span>
        </h2>

        <div className='grid md:grid-cols-3 gap-6' >
          {contents.map((item, index) => (
            <div key={index} className='border-b-2 border-main p-3 flex flex-col' data-aos="flip-left">

              <div className='flex items-start gap-2 mb-2'>
                <span className='text-main border-b-2 text-2xl'>
                  {item.number}
                </span>
                <h2 className='text-secondary font-bold'>
                  {item.title}
                </h2>
              </div>
              <div className='flex-grow'>
                <p className='primary'>
                  {item.message}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className='secondary text-center text-2xl font-semibold w-full mt-14 mb-14'>
            My Technologies<span className='text-main'> .</span>
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center'>


            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='flex justify-center' data-aos="fade-up-right">
                    <AiOutlineHtml5 className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  HTML 5
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='flex justify-center' data-aos="fade-up-right">
                    <RiTailwindCssFill className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  Tailwind CSS
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='flex justify-center' data-aos="fade-up-right">
                    <DiCss3 className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  CSS 3
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='flex justify-center' data-aos="fade-up-right">
                    <SiJavascript className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  JavaScript
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='flex justify-center' data-aos="fade-up-left">
                    <TbBrandNextjs className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  Next.js
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='flex justify-center' data-aos="fade-up-left">
                    <FaReact className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  React
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='flex justify-center' data-aos="fade-up-left">
                    <SiRubyonrails className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  Ruby on Rails
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='flex justify-center' data-aos="fade-up-left">
                    <SiExpress className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  Express.js
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

          </div>
        </div>

        <div className='relative mt-6'>
          <h2 className='secondary text-center text-2xl font-semibold mt-14 mb-14'>
            Testimonials<span className='text-main'> .</span>
          </h2>
          <Review />
        </div>
      </div>
    </div>
  );
}

export default About;
