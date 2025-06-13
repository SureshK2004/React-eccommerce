import React, { useEffect, useState } from "react";

function Homesection() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategory(json))
  }, []);

  return (
    <div className="row m-5">
      {category.map((data) => (
        <div className="col-md-3" >
          <div className="card h-100 text-center p-3">
            <h5 className="card-title text-capitalize">{data}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Homesection;
