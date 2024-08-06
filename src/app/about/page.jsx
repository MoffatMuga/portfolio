import { AiOutlineHtml5 } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import Review from "@/components/ui/Review";

const contents = [
  {
    number: '01',
    title: "WEB DEVELOPMENT",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    number: '02',
    title: "APP DEVELOPMENT",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    number: '03',
    title: "UI/UX DESIGN",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

const About = () => {
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

        <h2 className='text-white text-center text-xl font-semibold mb-14 mt-14'>
          My Skills <span className='text-main'> .</span>
        </h2>

        <div className='grid md:grid-cols-3 gap-6'>
          {contents.map((item, index) => (
            <div key={index} className='border-b-2 border-main p-3 flex flex-col'>
              <div className='flex items-start gap-2 mb-2'>
                <span className='text-main border-b-2'>
                  {item.number}
                </span>
                <h2>
                  {item.title}
                </h2>
              </div>
              <div className='flex-grow'>
                <p>
                  {item.message}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className='text-white text-center text-2xl font-semibold w-full mt-14 mb-14'>
            My Technologies<span className='text-main'> .</span>
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center'>
            <div className='flex justify-center'>
              <AiOutlineHtml5 className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
            </div>
            <div className='flex justify-center'>
              <RiTailwindCssFill className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
            </div>
            <div className='flex justify-center'>
              <DiCss3 className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
            </div>
            <div className='flex justify-center'>
              <SiJavascript className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
            </div>
            <div className='flex justify-center'>
              <TbBrandNextjs className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
            </div>
            <div className='flex justify-center'>
              <FaReact className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
            </div>
            <div className='flex justify-center'>
              <SiRubyonrails className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
            </div>
            <div className='flex justify-center'>
              <SiExpress className='text-xl text-main p-2 h-20 w-20 border-primary border-2 rounded-full' />
            </div>
          </div>
        </div>

        <div className='relative mt-6'>
          <h2 className='text-white text-center text-2xl font-semibold mt-14 mb-14'>
            Testimonials<span className='text-main'> .</span>
          </h2>
          <Review />
        </div>
      </div>
    </div>
  );
}

export default About;
