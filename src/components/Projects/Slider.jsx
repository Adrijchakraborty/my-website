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



export default function App() {
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
                <SwiperSlide>
                    <div className='bg-white text-black flex flex-col gap-4 justify-center items-center h-full w-full rounded-lg'>
                        <h1 className='uppercase text-3xl font-roboto-slab'>swipe right</h1>
                        <FaArrowRight className='text-3xl' />
                    </div>
                </SwiperSlide>
                {projects.map((project, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='bg-slate-200 h-full rounded-lg'>
                                <img src={project.Image} className='min-h-[70%] border-4 border-black'/>
                                <h1 className='text-center font-roboto-slab text-lg'>{project.Name}</h1>
                                <div className='flex justify-around font-arima'>
                                    <a href={project?.Live} target='_blank' className={`${project.Live &&"text-blue-600 hover:underline transition"}`} >Live</a>
                                    <a href={project?.Github} target='_blank' className={`${project.Github &&"text-blue-600 hover:underline transition"}`}>Github</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                <SwiperSlide>
                    <div className='bg-white text-black flex flex-col gap-4 justify-center items-center h-full w-full rounded-lg border-2 border-black'>
                        <h1 className='uppercase text-3xl font-roboto-slab'>swipe left</h1>
                        <FaArrowLeft className='text-3xl' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
