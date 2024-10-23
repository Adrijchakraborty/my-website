import React from 'react'

const About = () => {
  return (
    <div id='about-me' >
      <h2 className="px-3 text-[#5a5a5a] text-[40px] md:text-[80px] lg:text-[120px] xl:text-[120px] font-bold opacity-25 select-none pointer-events-none line-right relative"> ABOUT ME</h2>
      <div className='flex'>
        <div className='md:min-w-[50%]'>

        </div>
        <div>
          <p className='text-slate-400 text-lg py-5 px-3 md:px-10 font-arima'>
            Hi, I'm Adrij Chakraborty, a software development enthusiast from Kolkata. I completed my schooling at Jadavpur Vidyapith and currently I'm pursuing my degree at Techno Main Saltlake, specializing in Electronics and Communication Engineering. <br />

            I've gained experience with programming languages like JavaScript, HTML/CSS, and Node.js, as well as databases like MongoDB. My projects include web apps for estate management and real-time messaging platforms using Socket.io. <br />

            In my free time, I enjoy gaming, reading books, and listening to music. I'm always open to collaborating on new ideas and projects. Let's connect!

          </p>
        </div>
      </div>
    </div>
  )
}

export default About