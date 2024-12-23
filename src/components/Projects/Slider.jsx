import React, { useRef, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { projects } from './projects.js';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';



const Slider = () => {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                
                {projects.map((project, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='bg-slate-200 h-full rounded-lg'>
                                <img src={project.Image} className='min-h-[70%] border-4 border-black' alt='Project'/>
                                <h1 className='text-center font-roboto-slab text-lg'>{project.Name}</h1>
                                <div className='flex justify-around font-arima'>
                                    <a href={project?.Live} target='_blank' className={`${project.Live &&"text-blue-600 hover:underline transition"}`} >Live</a>
                                    <a href={project?.Github} target='_blank' className={`${project.Github &&"text-blue-600 hover:underline transition"}`}>Github</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                
            </Swiper>
        </>
    );
}

export default Slider;
