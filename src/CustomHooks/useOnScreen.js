import { useEffect, useState } from "react"


const useOnScreen = (ref) =>{
               const [intersecting, setintersecting] = useState(false)

               useEffect(() => {
                 const observer = new IntersectionObserver(
                              ([entry])=>{
                                             setintersecting(entry.intersecting ?? false)
                              },

                              {
                                             threshold: 0.9,
                              }
                 )
                 const currentRef = ref.currentRef;

                 if(currentRef){
                              observer.observe(currentRef);
                 }
               
                 return () => {
                              if(currentRef){
                                             observer.unobserve(currentRef);
                              }
                              
                 }
               }, [ref])

               return intersecting;
               
}

export default useOnScreen;