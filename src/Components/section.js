import React, { useEffect, useState } from "react";
import "./section.css"

function Homesection() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategory(json))
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="row m-5 w-100">
        {category.map((data) => (
          <div className="col-md-3 mb-4">
            <div className="card h-100 text-center p-3 category-card">
              <h5 className="card-title text-capitalize">{data}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homesection;