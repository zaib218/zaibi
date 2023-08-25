import React from 'react'
import './Link.css';


const Number = [
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg",
    novel: "It Starts with Us: A Novel",
    title: "Colleen Hoover",
    

  },

  {
    image: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg",
    novel: "It Starts with Us: A Novel",
    title: "Colleen Hoover",
  },

  {
    image: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg",
    novel: "It Starts with Us: A Novel",
    title: "Colleen Hoover",
  },

  {
    image: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg",
    novel: "It Starts with Us: A Novel",
    title: "Colleen Hoover",
  },


];



const Lab = () => {
  return (
    <>
      <h1>books</h1>
      <div className='booklist'>
        <Nam />



      </div>
    </>
  )

}
const Nam = () => {
  return <div>



    {
      Number.map((meraDta) => {

        return <div className="book">

          <img src={meraDta.image} alt="amazaon book" />
          <h4>{meraDta.novel}</h4>
          <h5>{meraDta.title}</h5>

        </div>


      })

    }









  </div>











};

export default Lab