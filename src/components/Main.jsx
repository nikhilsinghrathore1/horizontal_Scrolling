import LocomotiveScroll from 'locomotive-scroll'
import React, { useEffect, useRef } from 'react'
import "../../node_modules/locomotive-scroll/src/locomotive-scroll"
import locomotiveScroll from '../../node_modules/locomotive-scroll/src/locomotive-scroll'
import Footer from './Footer'
import Images from './Images'
import { FaCaretRight } from "react-icons/fa6";
import Navbar from './Navbar'


const Main = () => {
          const image =[
               {
                              url:"https://images.unsplash.com/photo-1709522065858-d73b9ee76105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
                              behind:false,
                              top:"16%",
                              height:"290px",
                              width:"300px",
                              left:"6%",
                              speed:false
               },
               {
                              url:"https://images.unsplash.com/photo-1581952449676-b59f9fc1b746?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
                              behind:true,
                              top:"55%",
                              height:"250px",
                              width:"200px",
                              left:"18%",
                              speed:false
               },
               {
                              url:"https://images.unsplash.com/photo-1709840636489-04dff8a8eb9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
                              behind:false,
                              top:"7%",
                              height:"350px",
                              width:"200px",
                              left:"28%",
                              speed:true
               },
               {
                              url:"https://images.unsplash.com/photo-1709888247000-222026030103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
                              behind:true,
                              top:"30%",
                              height:"300px",
                              width:"270px",
                              left:"40%",
                              speed:false
               },
               {
                              url:"https://images.unsplash.com/photo-1709647514369-cf16e289f429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
                              behind:true,
                              top:"64%",
                              height:"200px",
                              width:"200px",
                              left:"50%",
                              speed:true
               },
               {
                              url:"https://plus.unsplash.com/premium_photo-1704477658142-d0af9445b7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D",
                              behind:false,
                              top:"7%",
                              height:"400px",
                              width:"200px",
                              left:"58%",
                              speed:false
               },
               {
                              url:"https://images.unsplash.com/photo-1709508767870-26654e137a3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D",
                              behind:true,
                              top:"60%",
                              height:"250px",
                              width:"370px",
                              left:"65%",
                              speed:true
               },
               {
                              url:"https://images.unsplash.com/photo-1709708210579-e60b1f8144ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fHw%3D",
                              behind:true,
                              top:"15%",
                              height:"350px",
                              width:"270px",
                              left:"80%",
                              speed:true
               },
          ]
               
               
  return (
              
               <>
            
    <div className='w-[250vw] h-screen bg-zinc-100 flex hideScroll   flex-shrink-0 relative' data-scroll data-scroll-speed = {0} >
               <div className='behind absolute top-[50%] left-[10%] -translate-y-[50%]'>
                              <h1 className='text-[13em] word font opacity-30  text-zinc-900 capitalize font-semibold tracking-widest relative z-10' data-scroll data-scroll-speed = {-2}>the work is done</h1>
               </div>

              {image.map((e,ind)=><Images src = {e} key = {ind} />)}

              

                              
              
    </div>

    <Footer />
            
            {/* <div className='w-[100vw] h-screen bg-purple-600 flex items-center justify-center' data-scroll >
                <button className='px-12 py-4 rounded-lg border-black border-4 text-3xl font-light'><a href="https://jisko-portfolio.vercel.app/" target="_blank">visit</a></button>
            </div> */}

            <div className='absolute bottom-10 left-20 flex items-center gap-0' data-scroll data-scroll-speed={-2}>
              <h1 className='text-[20px] text-green-900 font-semibold opacity-40 font tracking-tight '>scroll to know more</h1>
              <FaCaretRight className='mt-[2px] opacity-55' />
            </div>
            </>
  )
}

export default Main