import React from 'react'

const UseGuide = () => {
  return (
    <div className="UseGuide w-4/6 h-fit flex flex-col justify-center items-center rounded-lg p-8 mt-12">
    <div className=' flex flex-col justify-start '>
        <p className=" font-bold text-white">USE GUIDE</p>
        <br />
        <hr className=' w-full h-0.5 bg-slate-500 my-4'/>
        <p className="guide text-white ">To verify that a drug is real before you use it, begin by checking the drug packaging for a QR code and use your phone's camera to scan the code. Or if the QR code image file already exists in your device then you use the "OPTION TWO" that lets you upload the file from your device. </p>
        <br />
        <p className="guide text-white ">Once the QR code is captured, a check will be run in the backend, and the result will display on the webpage in a matter of seconds if your internet connection is stable. If the result provides key details of the drug like the Manufacturer name and address, Batch number and Expiration date, then its genuine and safe for use. But if no record is found then it's a fake as it cannot be traced to the manufacturer it claims to come from.</p>
        <br />
        <p className="guide text-white ">If the result provides key details of the drug like the Manufacturer name and address, Batch number and Expiration date, then its genuine and safe for use. But if no record is found then it's a fake as it cannot be traced to the manufacturer it claims to come from.</p>
        <hr className=' w-full h-0.5 bg-slate-500 my-4'/>
    </div>
    </div>
  )
}

export default UseGuide