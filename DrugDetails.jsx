import React, { useEffect, useState } from 'react'
import { query, collection, where, onSnapshot } from 'firebase/firestore';
import { dbase } from "./Firebase";

const DrugDetails = ({scanRes}) => {
  const [details, setDetails] = useState(null);

  const reloadBtn = () => {
    window.location.reload(false)
  }

  useEffect(() => {
    try {
      const q = query(collection(dbase, 'drugData'), where('uID', '==', scanRes));
      const unsubscribe = onSnapshot(q, async (snapshot) => {
        const fetchedDrug = [];
        snapshot.docs.forEach((doc) => {
          const drugItem = { ...doc.data(), id: doc.id };
          fetchedDrug.push(drugItem);
        });
        console.log(fetchedDrug)
        setDetails(fetchedDrug);
      });
      return () => unsubscribe(); // Cleanup function to unsubscribe from the snapshot listener
    } catch (error) {
      console.error('Error fetching drug details:', error);
    }
  }, [scanRes]); // Include scanRes as a dependency
  


  return (
    <div className='AdminLogin w-full h-fit py-12 px-4 bg-white opacity-95 mx-auto flex flex-col justify-center  items-center rounded-lg'>
    <h2 className="homeHead vstatus w-4/6 py-2 px-8 text-center rounded-full font-semibold text-nowrap">VERIFICATION STATUS</h2>
    <hr className=" w-4/6 h-0.5 bg-black my-6"/>
    {details ? details.map(detail => (
    <div key={detail.id} className='resultdetails w-fit h-fit flex flex-col justify-center items-center rounded-lg py-5 px-8'>
        <p className='resultText w-full py-2 text-black text-nowrap text-sm'>Drug Name: {detail.name}</p>
        <div className=' flex gap-4 w-full'>
        <p className='resultText w-full py-2 text-sm'>Batch Number: {detail.batch}</p>
        <p className='resultText w-full py-2 text-sm'>Expiration Date: {detail.exp}</p>
        </div>
        <div className=' flex gap-4 w-full'>
        <p className='resultText w-full py-2 text-sm'>Manufacturer Name: {detail.manName}</p>
        <p className='resultText w-full py-2 text-sm'>Manufacturer Address: {detail.manAddress}</p>
        </div>
        <button onClick={reloadBtn} className='AdminBtn resultBtn w-full bg-white rounded-full text-white py-2 px-3 my-4 font-semibold text-center text-sm'>REFRESH</button>
    </div> )) :
    <div className='nullRes py-3 px-8 my-4  text-white font-semibold rounded-full'> COULD NOT FIND DRUGS IN DATABASE. Likely a FAKE </div>
    }
    </div>
  )
}


export default DrugDetails