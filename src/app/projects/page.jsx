import React from 'react'
import Project_one from '@/components/ui/Project_one';
import Project_two from '@/components/ui/Project_two';
import Project_three from '@/components/ui/Project_three';
import Project_four from '@/components/ui/Project_four';
import Project_five from '@/components/ui/Project_five';
import Project_six from '@/components/ui/Project_six';

function projects() {
  return (
    <div className='mx-auto md:px-[200px] container  px-4 grid md:grid-cols-3  items-center gap-6 mt-6'>

      <div className='border border-primary'>
       <Project_one />
      </div>
      
      <div className='border border-primary'>
        <Project_two />
      </div>

      <div className='border border-primary'>
        <Project_three />
      </div>

      <div className='border border-primary'>
        <Project_four />
      </div>

      <div className='border border-primary'>
        <Project_five />
      </div>

      <div className='border border-primary'>
        <Project_six />
      </div>
      
    </div>
  )
}

export default projects;