import { AiOutlineHtml5 } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import Review from "@/components/ui/Review";

export default function about() {
  return (
    <div className='mx-auto lg:px-[200px] container px-4'>
      <div className='mt-6 mx-auto space-y-3'>
        <h2 className='text-white text-center text-2xl font-semibold'>
          About<span className='text-main'> .</span>
        </h2>
        <div className='flex max-w-xl mx-auto'>
          <p className='text-white text-center text-pretty'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <h2 className='text-white text-center text-xl font-semibold'>
          My Skills <span className='text-main'> .</span>
        </h2>


        <div className='flex flex-col md:flex-row justify-between w-full space-y-3 items-center'>

          <div className='w-[220px] h-[230px] border-b-2 border-primary p-3'>
            <div className='items-start flex gap-2'>
              <span className='text-main border-b-2 '>
                01
              </span>
              <h2>
                WEB DEVELOPMENT
              </h2>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className='w-[220px] h-[230px] border-b-2 border-primary p-3'>
            <div className='items-start flex gap-2'>
              <span className='text-main border-b-2 '>
                01
              </span>
              <h2>
                WEB DEVELOPMENT
              </h2>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className='w-[220px] h-[230px] border-b-2 border-primary p-3'>
            <div className='items-start flex gap-2'>
              <span className='text-main border-b-2 '>
                01
              </span>
              <h2>
                WEB DEVELOPMENT
              </h2>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>



        </div>

        <div>

          <h2 className='text-white text-center text-2xl font-semibold w-full '>
            My Technologies<span className='text-main'> .</span>
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 items-center mx-auto space-y-3 justify-around'>

            <div className='flex justify-center rounded-full'><AiOutlineHtml5 className='text-xl text-main rounded-full  p-2 rounded-full h-20 w-20 border-primary border-2' /></div>
            <div className='flex justify-center rounded-full'><RiTailwindCssFill className='text-xl text-main rounded-full p-2 rounded-full h-20 w-20 border-primary border-2' /></div>
            <div className='flex justify-center rounded-full'><DiCss3 className='text-xl text-main rounded-full  p-2 rounded-full h-20 w-20 border-primary border-2' /></div>
            <div className='flex justify-center rounded-full'><SiJavascript className='text-xl text-main rounded-full  p-2 rounded-full h-20 w-20 border-primary border-2' /></div>
            <div className='flex justify-center rounded-full'><TbBrandNextjs className='text-xl text-main rounded-full  p-2 rounded-full h-20 w-20 border-primary border-2' /></div>
            <div className='flex justify-center rounded-full'><FaReact className='text-xl text-main rounded-full  p-2 rounded-full h-20 w-20 border-primary border-2' /></div>
            <div className='flex justify-center rounded-full'><SiRubyonrails className='text-xl text-main rounded-full  p-2 rounded-full h-20 w-20 border-primary border-2' /></div>
            <div className='flex justify-center rounded-full'><SiExpress className='text-xl text-main rounded-full  p-2 rounded-full h-20 w-20 border-primary border-2' /></div>

          </div>
        </div>

        <div className='relative '>
          <h2 className='text-white text-center text-2xl font-semibold'>
            Testimonials<span className='text-main'> .</span>
          </h2>

          <Review />
        </div>

      </div>
    </div>
  )
}
