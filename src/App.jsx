import locomotiveScroll from 'locomotive-scroll/src/locomotive-scroll';
import { useEffect, useRef } from 'react'
import Main from './components/Main'
import * as smoothscroll from 'smoothscroll-polyfill'
import LocomotiveScroll from 'locomotive-scroll';

function App() {


const ref = useRef(null)

useEffect(() => {
 if(ref){
  new locomotiveScroll({
    el:ref.current,
    smooth:true,
    direction:"horizontal"
  })
 }

}, [])


  return (
    <>
    

    <div  data-scroll-container data-scroll-speed={-10} ref={ref}  className='w-fit '>
      <div className='flex w-fit relative' >

      <Main  />
     
      </div>
    </div>
    {/* <h1 >hello</h1> */}
    </>
  )
}

export default App
