import React from 'react'
import contactData from './Contact/contact'

const Contact = () => {
  return (
    <div id='contact' className='flex flex-col-reverse md:flex-row'>
      <div className='py-20 flex flex-col justify-center pl-[10%] pt-8 md:pt-0 md:pl-5 md:min-w-[50%] text-white bg-img'>
        <h1 className='text-5xl font-roboto'>Get in touch</h1>
        <p className='text-xl font-sans'>follow me on socials</p>
        <div className='flex pt-3 gap-3'>
          {contactData.map((data, index) => {
            return (
              <span key={index} className='text-xl transition hover:text-slate-500'>
                <a href={data.link} target='_blank'>{data.icon}</a>
              </span>
            )
          })}
        </div>
      </div>
      <div className='py-20 bg-[#030303] text-white flex flex-col justify-center items-center w-full'>
        <form className='flex gap-8 flex-col w-[80%]'>
          <div className='flex gap-6'>
            <div className='w-full'>
              <label htmlFor="first-name" className="block text-md font-semibold leading-6">First name</label>
              <input type="text" id='first-name' placeholder='first name' className='px-2 py-1 rounded-md focus:outline-none focus:border-blue-500 w-full border-2 border-slate-200' />
            </div>
            <div className='w-full'>
              <label htmlFor="last-name" className="block text-md font-semibold leading-6">Last name</label>
              <input type="text" placeholder='last name' id='last-name' className='px-2 py-1 rounded-md focus:outline-none focus:border-blue-500 w-full border-2 border-slate-200' />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-md font-semibold leading-6">Email</label>
            <input type="email" id='email' placeholder='email' className='px-2 py-1 rounded-md focus:outline-none focus:border-blue-500 w-full border-2 border-slate-200' />
          </div>
          <div>
            <label htmlFor="Phone" className="block text-md font-semibold leading-6">Phone Number</label>
            <input type="number" id='Phone' placeholder='phone number' className='px-2 py-1 rounded-md focus:outline-none focus:border-blue-500 w-full border-2 border-slate-200' />
          </div>
          <div>
            <label htmlFor="message" className="block text-md font-semibold leading-6">Message</label>
            <textarea placeholder='enter your message' id='message' rows={5} className='p-2 focus:outline-none focus:border-blue-500 rounded-md w-full border-2 border-slate-200'></textarea>
          </div>

          <div className='flex justify-end w-full'>
            <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 capitalize -mt-5'>send message</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default Contact