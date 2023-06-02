import React, { useState } from 'react'
import Product from '../product/Product';
import { products, productstwo } from '../../data';

import './ProductList.css'
import ProductTwo from '../product/ProductTwo';

const ProductList = () => {
  const [item,setItem]=useState(null);
  return (
    <div className="pl" id='project'>
    <div className="pl-texts">
      <h1 className="pl-title">Create & Inspire</h1>
    
    </div>
    <div className="pl-list">
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
    <h3 style={{marginTop:"1rem"}}>Frontend Projects</h3>
    <div className="pl-list">
      {productstwo.map((item) => (
        <ProductTwo key={item.id} item={item} />
      ))}
    </div>
  </div>
);
};


export default ProductList