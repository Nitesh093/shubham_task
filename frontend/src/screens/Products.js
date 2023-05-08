import React, { useEffect, useState } from "react";


import { json } from "react-router-dom";

export default function   Products(){
    
    const [products,setProducts]=useState({});
    const fetchData=async ()=>{
    const fetchData= await fetch("http://dummyjson.com/products").then(async(data)=>{

    return await data.json();
  }).then((data)=>{
    setProducts(data)
    console.log(data)
  }).catch((e)=>{
    console.log(e)
  })}
    
  
  console.log(products.products)

  useEffect(()=>{
    fetchData()
  },[])
  
 

    return <div>
      <h1 style={{"text-align":"center"}}>Products List</h1>
    <table className="table text-white table-bordered">
      
    
    <thead>
      <tr>
        <th scope="col">#id</th>
        <th scope="col">title</th>
        <th scope="col">description</th>
        <th scope="col">price</th>
        <th scope="col">discountPercentage</th>
        <th scope="col">rating </th>
        <th scope="col">stock</th>
        <th scope="col">brand</th>
        <th scope="col">smartphones</th>
        <th scope="col">thumbnail</th>
        <th scope="col">images</th>
      </tr>
    </thead>
    <tbody>

        
    

          {  products.products ?.map((data,index )=>{
            
            return <tr key={index+1}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.description}</td>
                    <td>{data.price}</td>
                    <td>{data.discountPercentage}</td>
                    <td>{data.rating}</td>
                    <td>{data.stock}</td>
                    <td>{data.brand}</td>
                    <td>{data.category}</td>
                    <td><a href={`${data.thumbnail}`}>thumbnail</a></td>
                    <td>{data.images.map((img,ind)=>{
                        return <tr><a href={img}>img-{ind+1}</a></tr>
                    })}</td>
                    
                    
                    
        
            </tr>
        })
} 
      
   
   
    </tbody>
  </table>
  
  </div>
  

}