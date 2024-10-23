import React from 'react'
import Slider from "./Projects/Slider"

const Projects = () => {
  return (
    <div>
      <h2 className="px-3 text-[#5a5a5a] text-[40px] md:text-[80px] lg:text-[120px] xl:text-[120px] font-bold opacity-25 select-none pointer-events-none line-right relative uppercase"> Projects</h2>

      <Slider/>
    </div>
  )
}

export default Projects