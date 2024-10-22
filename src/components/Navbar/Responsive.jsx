import React from 'react'

const Responsive = ({windowWidth}) => {
    return (
        <div className={`flex ${windowWidth < 600 && 'flex-col'} gap-10 items-center font-archivo`}>
            <div className={`flex ${windowWidth < 600 && 'flex-col'} justify-between gap-3`}>
                <a href="#" className='uppercase hover:text-blue-500 transition'>About me</a>
                <a href="#" className='uppercase hover:text-blue-500 transition'>Projects</a>
            </div>
            <button className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full'>Let's talk</button>
        </div>
    )
}

export default Responsive