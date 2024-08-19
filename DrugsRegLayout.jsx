import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DrugsRegLayout = () => {
  return (
    <div className="HelpWrapper DrugsReg w-9/12 h-fit flex flex-col mt-12 mx-auto justify-start">
        <div className="navLinksH w-fit flex justify-center items-center gap-4 mx-auto">
        <Link to='/DrugsReg' className="UseGuide How py-2 px-4 w-fit text-nowrap text-white text-center rounded-full text-sm font-semibold">HOW TO USE</Link>
        <Link to='/DrugsReg/DrugsListing' className="DrugsRegister py-2 px-4 w-fit text-nowrap text-white text-center rounded-full text-sm font-semibold">REGISTER DRUGS</Link>
        
        </div>
        <div className='Help w-full h-fit px-4 mt-8 bg-white opacity-95 mx-auto flex flex-col justify-center  items-center rounded-lg'>
        <Outlet />
        </div>
    </div>
  )
}

export default DrugsRegLayout