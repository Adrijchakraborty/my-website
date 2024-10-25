import React from 'react'
import contactData from './Contact/contact'

const Contact = () => {
  return (
    <div className='flex min-h-[70vh]'>
      <div className='flex flex-col justify-center pl-5 text-white min-w-[50%]'>
        <h1 className='text-5xl font-roboto'>Get in touch</h1>
        <p className='text-xl font-sans'>follow me on socials</p>
        <div className='flex gap-3'>
        {contactData.map((data,index)=>{
          return (
            <span key={index} className='text-xl transition cursor-pointer hover:text-slate-500'>
              {data.icon}
            </span>
          )
        })}
      </div>
      </div>
      <div>
        <form className='flex flex-col'>
          <div className='flex'>
            <label htmlFor="input">Name</label>
          <input type="text" placeholder='first name' className='px-2 py-1 rounded-md'/>
          <input type="text" placeholder='last name' className='px-2 py-1 rounded-md'/>
          </div>
          <input type="email" placeholder='email' className='px-2 py-1 rounded-md'/>
          <input type="number" placeholder='phone number' className='px-2 py-1 rounded-md'/>
          <textarea placeholder='enter your message' className=''></textarea>
        </form>
      </div>
    </div>
  )
}

export default Contact