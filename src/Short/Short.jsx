import React, { useState } from 'react'

const Short = () => {
    // const [text, setText]= useState("hello world");
    // const first = text || "first text"
    // const second = text && "second text"
    const [error, setError] = useState(false)
    return (
        <div>
            {/* <h1>{first}</h1>
      
      <h2>{second}</h2> */}
            {/* {
        text || <h1>hello you are true</h1>
      } */}

            {/* {error &&(
        <div>
             <h1>page not fount</h1>
             <p>error 404</p>
        </div>  
          
      )} */}

      {/* ternary operater */}
            {
              error ? (
                <div>
                <h1>page not fount</h1>
                <p>error 404</p>
           </div>  

              )
              : (
                <h1>congration no error</h1>
              )
              
            }


            <button onClick={() => setError(!error)}>click on it</button>


        </div>
    )
}

export default Short