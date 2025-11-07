import React from 'react'

const Card = (props) => {
  return (
   <>
 <div className="card">
    <img src={props.img}  />
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  <button>{props.buttonText}</button>

 </div>
 
   </>
  ) 
}
    
export default Card;