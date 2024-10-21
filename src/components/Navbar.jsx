import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-slate-950 text-white flex justify-between px-4 py-3'>
        <h1 className='tracking-[0.5vw] font-roboto-slab text-4xl'>ADRIJ.</h1>
        <div className='flex gap-3 items-center font-archivo'>
            <a href="#" className='uppercase hover:text-blue-500 transition'>About me</a>
            <a href="#" className='uppercase hover:text-blue-500 transition'>Projects</a>
            <button className='uppercasebg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Let's talk</button>
        </div>
    </div>
  )
}

export default Navbar