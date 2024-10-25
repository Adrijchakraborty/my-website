import React, { useEffect, useState } from 'react'
import { About, Footer, Hero, Navbar, Projects, Skills, Contact } from './components'

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
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App