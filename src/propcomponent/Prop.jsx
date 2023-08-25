import React from 'react'

const Firstbook = {
    image: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg",
    novel: "It Starts with Us: A Novel",
    title: "Colleen Hoover",
}

const Prop = (Props) => {
    console.log(Props)
  return (
    
    <div>
        <Nok message="how are you" />
        <Nok />
    </div>
  )
}

// const Nok = (Props) => {
//     console.log(Props)
//   return (
    
//     <div>
//         {console.log(Props)}
//         <h1>{Firstbook.title}</h1>
//         <h2>{Props.message}</h2>
//     </div>
//   )
// }

const Nok = ({message}) => {
  
  return (
    
    <div>
        
        <h1>{Firstbook.title}</h1>
        <h2>{message}</h2>
    </div>
  )
}

export default Prop