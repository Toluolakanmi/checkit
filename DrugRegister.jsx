import React from 'react'
import QRCode from 'qrcode.react';
import { useState } from 'react';
import { serverTimestamp, addDoc, collection, } from "firebase/firestore"; 
import { dbase } from "../Firebase";

const DrugsListing = () => {
  const [pw, setPass] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    exp: '',
    manName: '',
    manAddress: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

  };

  const qrGenerate = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

   if(formData.batch) {
    console.log('ligrr')
    async function sha256(message) {
      // Encode the message as UTF-8
      const msgBuffer = new TextEncoder('utf-8').encode(message);
    
      // Hash the message
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    
      // Convert ArrayBuffer to an array of bytes
      const hashArray = Array.from(new Uint8Array(hashBuffer));
    
      // Convert bytes to a hex string
      const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    
      console.log(hashHex); // Print the hash value
      return hashHex;
    }
      
    async function main() {
      const drugName = formData.name
      const drugBatch = formData.batch
      const uniqueID = `${drugName}${drugBatch}`
      const hashedID = await sha256(uniqueID);
      setPass(hashedID)
      console.log('Hashed ID:', hashedID);
   }

   main()
  } 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbase, `drugData`), {
        name: formData.name,
        batch: formData.batch,
        exp: formData.exp,
        manName: formData.manName,
        manAddress: formData.manAddress,
        uID: pw,
        CreatedAt: serverTimestamp()
      });
     alert('SUBMITTED')
     setFormData({
      name: '',
      batch: '',
      exp: '',
      manName: '',
      manAddress: ''
     })
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
    

  return (
    <div className='AdminLogin w-full h-fit px-4 py-8 bg-white opacity-90 mx-auto flex flex-col justify-center  items-center rounded-lg'>
        <form method='post' action="/DrugsReg/DrugsListing" onSubmit={handleSubmit} className="LoginForm RegisterForm w-4/6 h-fit flex flex-col justify-center gap-2 items-center rounded-lg py-5 px-8">
            <p className=" text-center text-white font-semibold mb-6 mt-8">DRUG DETAILS</p>
            <hr className=' w-full h-0.5 bg-slate-500 mb-4'/>
            <span className=' flex w-full h-fit py-2 gap-2 flex-col'>
              <p className='text-white px-4 text-center'>DRUG NAME :</p>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className=' bg-slate-300 text-black text-center outline-none w-full py-2 px-4 rounded-full'/>
            </span>
            <span className=' flex w-full h-fit py-2 gap-2 flex-col'>
              <p className='text-white px-4 text-center'>BATCH NUMBER :</p>
              <input type="text" name="batch" value={formData.batch} onChange={qrGenerate} className=' bg-slate-300 text-black text-center outline-none w-full py-2 px-4 rounded-full'/>
            </span>
            <span className=' flex w-full h-fit py-2 gap-2 flex-col'>
              <p className='text-white px-4 text-center'>EXPIRATION DATE :</p>
              <input type="text" name="exp" value={formData.exp} onChange={handleChange} className=' bg-slate-300 text-black text-center outline-none w-full py-2 px-4 rounded-full'/>
            </span>
            <span className=' flex w-full h-fit py-2 gap-2 flex-col'>
              <p className='text-white px-4 text-center '>MANUFACTURER NAME :</p>
              <input type="text" name="manName" value={formData.manName} onChange={handleChange} className=' bg-slate-300 text-black  text-center outline-none w-full py-2 px-4 rounded-full'/>
            </span>
            <span className=' flex w-full h-fit py-2 gap-2 flex-col'>
              <p className='text-white px-4 text-center'>MANUFACTURER ADDRESS :</p>
              <input type="text" name="manAddress" value={formData.manAddress} onChange={handleChange} className=' bg-slate-300 text-black  text-center outline-none w-full py-2 px-4 rounded-full'/>
            </span>
            <hr className=' w-full h-0.5 bg-slate-500 my-8'/>
            <QRCode className=' w-50 h-50 bg-white cursor-pointer' value={pw} />
            <hr className=' w-full h-0.5 bg-slate-500 my-8'/>
            <button className='AdminBtn w-full bg-white rounded-full text-white px-8 py-2 mb-8 font-semibold text-center'>REGISTER DRUG</button>
      </form>
    </div>
  )
}

export default DrugsListing