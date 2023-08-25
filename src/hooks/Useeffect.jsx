import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [num, setNum] = useState(0);
    const [size, setSize]= useState(window.innerWidth)
    useEffect(()=>{
        console.log("rendarion")
        
        document.title=`title ${num}`
        
        window.addEventListener('resize', ()=>{
            setSize(window.innerWidth)
        })

        // window.removeEventListener('resize', ()=>{
        //     setSize(window.innerWidth)
        // })

    },[])
  return (
    <div>
        {console.log("this is message")}
        
          {
            <h1>{size}px</h1>
          }
        <h1>this is use effect</h1>
        <h1>{num}</h1>
        <button onClick={()=> setNum(num+1)}>increament</button>
    </div>
  )
}

export default Useeffect