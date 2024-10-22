import React, { useEffect, useState } from 'react'
import { Hero, Navbar } from './components'

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
    <div className=''>
      <Navbar value={scrollPosition}/>
      <Hero/>
    </div>
  )
}

export default App