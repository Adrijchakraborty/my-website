import { useState, useEffect } from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";


import { ToastContainer, toast,Bounce } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import contactData from './Contact/contact'

const Contact = () => {

  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "c3e7aec5-5b70-4b78-ac63-b2035654e2db";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      toast.success('Email sent successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });
  return (
    <div>
      <div className="w-[40%] mx-auto border-t border-white border-opacity-50"></div>

      <div id='contact' className='flex flex-col-reverse md:flex-row py-20 text-white'>
        <div className='flex flex-col justify-center pl-[10%] pt-8 md:pt-0 md:pl-5 md:min-w-[50%] '>
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
        <div className='flex flex-col justify-center items-center w-full'>
          <form onSubmit={handleSubmit(onSubmit)} className='flex gap-8 flex-col w-[80%]'>
            <div className='flex gap-6'>
              <div className='w-full'>
                <label htmlFor="first-name" className="block text-md font-semibold leading-6">First name</label>
                <input type="text" {...register("first-name", { required: true })} id='first-name' placeholder='first name' className='px-2 py-1 rounded-md focus:outline-none focus:border-blue-500 w-full border-2 border-slate-200 text-gray-600' />
              </div>
              <div className='w-full'>
                <label htmlFor="last-name" className="block text-md font-semibold leading-6">Last name</label>
                <input type="text" {...register("last-name", { required: true })} placeholder='last name' id='last-name' className='px-2 py-1 rounded-md focus:outline-none focus:border-blue-500 w-full border-2 border-slate-200 text-gray-600' />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-md font-semibold leading-6">Email</label>
              <input type="email" {...register("email", { required: true })} id='email' placeholder='email' className='px-2 py-1 rounded-md focus:outline-none focus:border-blue-500 w-full border-2 border-slate-200 text-gray-600' />
            </div>
            <div>
              <label htmlFor="Phone" className="block text-md font-semibold leading-6">Phone Number</label>
              <input type="number" {...register("Phone", { required: true })} id='Phone' placeholder='phone number' className='px-2 py-1 rounded-md focus:outline-none focus:border-blue-500 w-full border-2 border-slate-200 text-gray-600' />
            </div>
            <div>
              <label htmlFor="message" className="block text-md font-semibold leading-6">Message</label>
              <textarea {...register("message", { required: true })} placeholder='enter your message' id='message' rows={5} className='p-2 focus:outline-none focus:border-blue-500 rounded-md w-full border-2 border-slate-200 text-gray-600'></textarea>
            </div>

            <div className='flex justify-end w-full'>
              <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 capitalize -mt-5'>send message</button>
            </div>

          </form>
          
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
            />
        </div>
      </div>
    </div>
  )
}

export default Contact