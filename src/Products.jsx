import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Seed } from "./seed";





const prodArray = [...Seed.products];

export default function Products() {

  const [products,setProducts] = useState(prodArray); 
  
  const sortedProducts = products.sort((a,b)=>a.votes>b.votes?1:-1);

  useEffect(() => {
    
  }, [products])
  
     
  

  
  function updateVotes(votes,id){
    
    const prodCopy = [...products]
    const index = prodCopy.findIndex(p=>p.id===id)
    prodCopy[index].votes = votes;
    setProducts(prodCopy);
  }
  return (
   <div>
   {sortedProducts.map(p=>{
    return <Product {...p} key={p.id} handleVotes={updateVotes}/>
   })}
   </div>
   
  );
}
