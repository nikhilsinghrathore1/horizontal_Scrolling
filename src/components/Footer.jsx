import React from 'react'
import Navbar from './Navbar'

const Footer = () => {
  return (
               <div className='w-[100vw] h-screen background overflow-hidden z-[-10]' data-scroll data-scroll-speed = {-7} >

               <Navbar />

               <div className='w-full h-[60%] mt-28 flex items-center justify-center text-white gap-[10vw]'>

                              <div className='leading-none opac'>
                                             <h1 className='text-6xl leading-none headFont capitalize mb-3'>work</h1>
                                             <p className='text-lg leading-none mb-1'>Lorem ipsum dolor sit.</p>
                                             <p className='text-lg leading-none mb-1'>Lorem ipsum dolor sit.</p>
                                             <p className='text-lg leading-none mb-1'>Lorem ipsum dolor sit.</p>
                                             <p className='text-lg leading-none mb-1'>Lorem ipsum dolor sit.</p>
                                             <p className='text-lg leading-none mb-1'>Lorem ipsum dolor sit.</p>
                                             
                              </div>
                              <div className='leading-none opac'>
                                             <h1 className='text-6xl leading-none headFont capitalize mb-3'>about</h1>
                                             <p className='text-lg leading-none mb-1'>Lorem ipsum dolor sit.</p>
                                             <p className='text-lg leading-none mb-1'>Lorem ipsum dolor sit.</p>
                                             <p className='text-lg leading-none mb-1'>Lorem ipsum dolor sit.</p>
                                             <p className='text-lg leading-none mb-1'>Lorem ipsum dolor sit.</p>
                                             <p className='text-lg leading-none mb-1'>Lorem ipsum dolor sit.</p>
                                             
                              </div>
                              <div className='leading-none opac'>
                                             <h1 className='text-6xl leading-none headFont capitalize mb-3'>contact</h1>
                                             <p className='text-lg leading-none mb-1'>Lorem ipsum dolor sit.</p>
                                             <p className='text-lg leading-none mb-1'>Lorem ipsum dolor sit.</p>
                                             <p className='text-lg leading-none mb-1'>Lorem ipsum dolor sit.</p>
                                             <p className='text-lg leading-none mb-1'>Lorem ipsum dolor sit.</p>
                                             <p className='text-lg leading-none mb-1'>Lorem ipsum dolor sit.</p>
                                             
                              </div>
                           
                             

               </div>

               {/* <button className='px-12 py-4 rounded-lg border-black border-4 text-3xl font-light'><a href="https://jisko-portfolio.vercel.app/" target="_blank">visit</a></button> */}

           </div>
  )
}

export default Footer