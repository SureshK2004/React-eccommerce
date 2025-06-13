import React,{useEffect,useState} from "react";

function Homesection(){
    const[product,setProduct] =useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
            .then(data => data.json())
            .then(json => setProduct(json))
             console.log(product)
            
    },[]);


    return(
       <>
       {product.map((data)=>(
        <>
        <ul>
            <li>{data.id}</li>
            <li>{data.title}</li>
        </ul>
        </>
       ))}
       </>
    )

}

export default Homesection;