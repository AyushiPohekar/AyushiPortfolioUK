import "./Product.css";
import React from "react";

const ProductTwo = ({ item }) => {
  console.log(item)
  return (
  
   <div className="card" style={{width: '18rem',padding:0}}>

    <img src={item.img} className="card-img-top" style={{width: '100%',height:"50%"}} alt="..." />
    <h5 className="card-title" style={{padding: '1rem 1rem 0 1rem'}}>{item.title}</h5>
    <p className="card-text" style={{padding: '0 1rem',fontSize:"14px"}}>{item.description}</p>
    
    <div style={{padding: '0 1rem 1rem 1rem '}}>
    <a href={item.demo} target="_blank" className="card-link cardlink">Demo</a>
    <a href={item.frontendlink} target="_blank" className="card-link cardlink">FrontendLink</a>
  
  
  </div>
</div>

    
  );
};

export default ProductTwo;