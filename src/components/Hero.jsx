import React from 'react'
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  return (
    <div className='flex items-center justify-center text-white h-screen px-10'>
      <div className='min-w-[50%] flex flex-col justify-center items-center gap-3'>
        <h1 className='text-5xl font-roboto-condensed tracking-widest'>Hello🖐,I'm ADRIJ</h1>
        <p className='text-xl font-arima'>Passionate web developer | Fresher | Learning full stack</p>
        <div className='flex gap-5'>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Let's talk</button>
          <button type="button" className="py-2.5 px-5 me-2 flex items-center justify-center gap-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Download<IoMdDownload /></button>
        </div>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}

export default Hero