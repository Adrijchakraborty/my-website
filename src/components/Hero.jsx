import React from 'react'
import { IoMdDownload } from "react-icons/io";
import Resume from "../assets/Resume.pdf"

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row gap-14 md:gap-0 items-center justify-center text-white h-screen px-10'>
      <div className='min-w-[50%] flex flex-col justify-center items-center gap-3'>
        <h1 className='text-5xl text-center md:text-start font-roboto-condensed tracking-widest'>Hello🖐,I'm ADRIJ</h1>
        <p className='text-xl text-center md:text-start font-arima'>Passionate web developer | Fresher | Learning full stack</p>
        <div className='flex gap-5'>
          <a href='#contact' type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm md:text-lg px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Let's talk</a>
          <a href={Resume} download="resume.pdf" target='_blank' type="button" className="py-2.5 px-5 me-2 flex items-center justify-center gap-2 mb-2 text-md md:text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Download<IoMdDownload /></a>
        </div>
      </div>
      <div>
        <img className='rounded-full h-[35vh] md:h-[80vh]' src="https://images.unsplash.com/photo-1620399909663-b7a7da934161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwcGhvdG98ZW58MHx8MHx8fDA%3D" alt="Profile Image" />
      </div>
    </div>
  )
}

export default Hero