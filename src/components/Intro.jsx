import React from 'react'

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center
    pt-20 pb-6'>
      <h1 className='text-4xl md:text-4xl dark:text-white mb-1 md:mb-3 font-bold'>Govind Bhartiya</h1>
      <p className='text-base md:text-xl mb-3 font-medium'>Web Developer</p>
      <p className='text-sm max-w-xl mb-6 font-bold'>
         I'm a final year Computer Science undergrad skilled in C++
         and well-versed in Data Structures and Algorithms.
        
        I have a strong affinity for learning new technologies and possess excellent communication
        and leadership qualities.
        <br />
        
        My {' '}
        <a href="https://drive.google.com/file/d/1-WAP6suKdw85zeexchbKas7wZvk-HY4P/view?usp=drive_link" 
        target='blank' className='text-cyan-600 hover:underline underline-offset-2 decoration-2 
        decoration-red-600'> "RESUME GOVIND BHARTIYA" </a> {' '}
        provides a more detailed insight into my accomplishments and skills.
        Let's connect and explore ways to drive innovation together.
        </p>
    </div>
  )
}

export default Intro
