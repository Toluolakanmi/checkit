import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { auth } from "./Firebase";
import Result from "./Result";


const HomePage = () => {
  const [user, setUser] = useState('')
  const User = auth.currentUser;

  useEffect(() => {
    if (User) {
      setUser(User);
    }
  }, [User]);




  return (
    <div className='HomePageWrapper w-9/12 flex-col h-fit py-12 px-8 opacity-90 bg-white mt-12 mx-auto flex justify-center rounded-lg'>
      <h2 className="homeHead verify mt-4 w-full py-4 px-8 text-center rounded-full font-semibold">VERIFY DRUG BEFORE USE</h2>
      <hr className=" w-full h-0.5 bg-black mt-8"/>
      <div className=" w-full flex flex-col gap-4 py-4 mt-4">
      <h2 className="optionOne w-full py-4 px-8 text-center rounded-full font-semibold cursor-pointer">SCAN WITH CAMERA OR UPLOAD IMAGE</h2>
      </div>
      <Result />
    </div>
  )
}

export default HomePage