import React from 'react'

const HowToUse = () => {
  return (
    <div className="HowToUse  w-4/6 h-fit flex justify-center items-center rounded-lg p-8 mt-6">
    <div className=' flex flex-col justify-start '>
        <p className=" font-bold text-white">HOW TO USE</p>
        <br />
        <hr className=' w-full h-0.5 bg-slate-500 my-4'/>
        <p className="guide text-white ">To verify that a drug is authentic, begin by checking the drug packaging for a QR code and use your phone's camera to scan the code. Or if the QR code image file already exists in your device then you use the second option that lets you upload the file from your device. </p>
        <br />
        <p className="guide text-white ">Once the QR code is captured, a check will be run in the backend, and the result will display on the webpage in a matter of seconds if your internet connection is stable. </p>
        <br />
        <p className="guide text-white ">If the result provides key details of the drug like the Drug name, Batch number, Manufacturer name and address, and Expiration date, then its genuine and safe for use because the drugs have been duly registered with the central database before distribution. But if no record is found then it's a fake as it cannot be traced to the manufacturer it claims to come from or you simoly retry again as it could be a bad network connection</p>
        <hr className=' w-full h-0.5 bg-slate-500 my-4'/>
    </div>
    </div>
  )
}

export default HowToUse