import React, { useEffect, useState } from "react";
import "./section.css"
import electronicsImg from "./asserts/electronics.jpg";
import jewelryImg from "./asserts/jw.jpg";
import mensClothingImg from "./asserts/mens clothing.jpg";
import womensClothingImg from "./asserts/women.jpg";
import { Link } from "react-router-dom";


function Homesection() {
  const [category, setCategory] = useState([]);

  const categoryImages = {
    "electronics": electronicsImg,
    "jewelery": jewelryImg,
    "men's clothing": mensClothingImg,
    "women's clothing": womensClothingImg
  };


  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategory(json))
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="row m-5 w-100">
        {category.map((data) => (
          <div className="col-md-3 mb-4" >
            <Link to={data} style={{ textDecoration: "none", color: "black" }}>
              <div className="card h-100 text-center p-3  category-card">
                <img
                  src={categoryImages[data]}
                  alt={data}
                  className="card-img-top img-fluid mb-3"
                  style={{ height: "180px", objectFit: "contain" }}
                />
                <h5 className="card-title" >{data}</h5>

              </div>
            </Link>
          </div>
        ))}
      </div>

    </div >
  );
}

export default Homesection;