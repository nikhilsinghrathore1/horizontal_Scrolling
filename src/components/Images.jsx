import React, { useRef } from 'react'
import useOnScreen from '../CustomHooks/useOnScreen' 

const Images = ({src}) => {
  const ref = useRef(null)
  // useOnScreen(ref)

const style = {
               top:src.top,
               left:src.left,
               height:src.height,
               width:src.width,

}

  return (
               <>
               {src.speed ? (
                              <div ref={ref} style={style}className={` shadow rounded-md transition overflow-hidden absolute ${src.behind ? "z-[-1]" :"z-[2]"}`}  data-scroll data-scroll-speed= {2} >
               <img className='opacity-90 w-full h-full shadow object-cover object-top shadow-black ' src={src.url} alt="not showing" />
                </div>
                ) : 
                ( 
                               <div ref={ref} style={style}className={` shadow rounded-md overflow-hidden absolute ${src.behind ? "z-[-1]" :"z-[2]"}`} data-scroll >
    <img className='opacity-90 w-full h-full object-cover shadow shadow-black object-top ' src={src.url} alt="not showing" />
</div>
)}
   
</>
  )
}

export default Images