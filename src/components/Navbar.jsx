import React from 'react'
import { Fa500Px } from "react-icons/fa";

const Navbar = () => {
  return (

    <div className='w-[100vw] h-18 text-white flex items-center justify-between px-10 py-3'>
               <div >
                              <Fa500Px className='text-4xl ' />
               </div>
             <div className='flex gap-x-10 items-center '>
             <p className='uppercase text-lg font hover:opacity-60 font-semibold  tracking-tight'>portfolio</p>
              <p className='uppercase text-lg font  font-semibold hover:opacity-60 tracking-tight '>contact</p>
              <p className='uppercase text-lg font  font-semibold hover:opacity-60 tracking-tight '>about</p>
             </div>
    </div>
  )
}

export default Navbar