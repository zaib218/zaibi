import React, { useState } from 'react'

const Conditioanl = () => {
  const [loading, setLoading] =useState(true)
  if(loading===true){
    return <h1>loading.....</h1>
  }
  return (
    <div>
      <h1>conditional rendarion</h1>
    </div>
  )
}

export default Conditioanl