import React from "react";
import Product from "./Product";
import {products} from './seed'


const prodArray = products.products;



export default function Products() {
  return (
   <div>
   {prodArray.map(p=>{
    return <Product {...p} key={p.id}/>
   })}
   </div>
   
  );
}
