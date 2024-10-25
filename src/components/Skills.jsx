import React, { useState } from 'react';
import skillsData from './Skill/skillsData'; 

const Skills = () => {

  const [tooltip, setTooltip] = useState({ visible: false, text: '' });

  const handleMouseEnter = (text) => {
    setTooltip({ visible: true, text });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, text: '' });
  };
  return (
    <div>
      <h2 className="px-3 text-[#5a5a5a] text-[40px] md:text-[80px] lg:text-[120px] xl:text-[120px] font-bold opacity-25 select-none pointer-events-none line-right relative uppercase"> Skills</h2>

      <div className='flex flex-col md:flex-row text-white'>
        <div className='md:min-w-[50%]'></div>
        <div className='px-3 md:px-0'>
          {skillsData.map((categoryData, index) => (
            <div className='py-3' key={index}>
              <h1 className='font-roboto-slab text-4xl py-2'>{categoryData.category}:</h1>
              <div className='flex gap-4'>
                {categoryData.icons.map((iconData, iconIndex) => (
                  <div key={iconIndex} onMouseEnter={() => handleMouseEnter(iconData.label)}
                  onMouseLeave={handleMouseLeave}
className='flex flex-col items-center justify-center relative'>
                    <span className='text-3xl hover:text-blue-500 transition cursor-pointer'>{iconData.icon}</span>
                    {tooltip.visible && tooltip.text === iconData.label && (
                      <div className="tooltip">{iconData.label}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
