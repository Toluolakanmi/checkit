import React from 'react'
import { Form } from 'react-router-dom'

const AdminLogin = () => {
  return (
    <div className='AdminLogin w-9/12 h-fit py-12 px-4 bg-white opacity-90 mt-12 mx-auto flex justify-center  items-center rounded-lg'>
        <Form method='post' action="/AdminLogin" className="LoginForm w-4/6 h-fit flex flex-col justify-center gap-2 items-center rounded-lg py-5 px-8">
            <p className=" text-center text-white font-semibold mb-6 mt-8">ADMIN LOGIN</p>
            <hr className=' w-full h-0.5 bg-slate-500 mb-4'/>
            <span className=' flex w-full h-fit py-2 gap-2 flex-col'>
              <p className='text-white px-4 text-center'>EMAIL :</p>
              <input type="email" name="email" className=' bg-slate-300  text-center outline-none w-full py-2 px-4 rounded-full'/>
            </span>
            
            <span className=' flex w-full h-fit py-2 gap-2 flex-col'>
              <p className='text-white px-4 text-center'>PASSWORD :</p>
              <input type="password" name="password" className=' bg-slate-300 text-center outline-none w-full py-2 px-4 rounded-full'/>
            </span>
            <hr className=' w-full h-0.5 bg-slate-500 my-8'/>
            <button className='AdminBtn w-full bg-white rounded-full text-white px-8 py-2 mb-8 font-semibold text-center'>LOGIN</button>
      </Form>
    </div>
  )
}

export default AdminLogin