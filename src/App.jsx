import React, { useEffect, useState } from 'react'
import { About, Hero, Navbar } from './components'

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-[#101010]'>
      <Navbar value={scrollPosition}/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App