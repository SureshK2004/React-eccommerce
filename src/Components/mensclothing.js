import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

function Menclothing() {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((res) => res.json())
      .then((json) => setCategory(json))
  }, []);
   

  const getIdData = (a) => {
    navigate(`/product/${a}`);
  }

 return (
  <>
 
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh"}}>
      <div className="row m-5 w-100">
        {category.map((data) => (
          <div className="col-md-3 mb-4" onClick={() => getIdData(data.id)}>
            <div className="card h-100 text-center p-3 category-card cards">
              <img
              src={data.image}
              alt={data.title}
              className="img-fuild mx-auto"
              style={{ maxHeight:"350px",maxWidth:"200px" ,objectFit:"contain"}}
              />
              <div><strong>Product ID:</strong>{data.id}</div>
              <div><strong>Prduct price:</strong>{data.price}</div>
     
              <h5  className="card-title text-capitalize">{}</h5>
         
            </div>
          </div>  
        ))}
      </div>
    </div>
    </>
  );
}

export default Menclothing;