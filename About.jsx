import React from 'react'

const About = () => {
  return (
    <div className='AboutWrapper w-9/12 h-fit py-12 px-4 bg-white opacity-90 mt-12 mx-auto flex justify-center  items-center rounded-lg'>
    <div className="About w-fit h-fit flex flex-col justify-center items-center rounded-lg py-5 px-8">
    <hr className=' w-full h-0.5 bg-slate-500 my-4'/>
        <p className="text text-white">This is a web-based drugs authentication system built to reduce the consumption of fake drugs by enabling drug users to check if a drug is genuine or a fake before using.</p>
        <br />
        <p className="text-white">This system was built using React js as the frontend programming language, html5 qrcode library for enabling the QR code generation and scanning functionality, and Google's Firebase as the backend for storage, database management and hosting of the site.</p>
        <hr className=' w-full h-0.5 bg-slate-500 my-4'/>
    </div>
    </div>
  )
}

export default About