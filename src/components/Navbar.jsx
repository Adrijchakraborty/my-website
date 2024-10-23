import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import Responsive from './Navbar/Responsive'

const Navbar = ({ value }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [clicked, setClicked] = useState(false);

  let custom_color = value <= 20 ? 'bg-[#101010] text-white' : 'bg-slate-100 text-slate-950';

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    setClicked(prev => !prev);
  }

  console.log(clicked)

  return (
    <div className='fixed w-full z-[9999]'>
      <div className={`transition ${custom_color} flex justify-between px-4 py-3`}>
        <h1 className='tracking-[0.5vw] font-roboto-slab text-4xl'>ADRIJ.</h1>

        {windowWidth < 600 ? (
          <span className='flex justify-center items-center'>
            <RxHamburgerMenu onClick={handleClick} className='text-3xl cursor-pointer' />
          </span>
        ) : (
          <Responsive/>
        )}
      </div>

      <div onClick={handleClick} className={`${custom_color} h-screen absolute w-full flex justify-center items-center ${clicked ? 'slide-in' : 'slide-out'}`}>
        <Responsive windowWidth={windowWidth} />
      </div>
    </div>
  )
}

export default Navbar;
