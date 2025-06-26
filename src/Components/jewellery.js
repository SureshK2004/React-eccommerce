import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

function Jewellery() {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => setCategory(json))
    setLoading(false);
  }, []);


  const getIdData = (a) => {
    navigate(`/product/${a}`);
  }


if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status" />
        <p className="mt-2">Loading...</p>
      </div>
    );
  }

  return (
    <>

      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="row m-5 w-100">
          {category.map((data) => (
            <div className="col-md-3 mb-4" onClick={() => getIdData(data.id)}>
              <div className="card h-100 text-center p-3 category-card cards">
                <img
                  src={data.image}
                  alt={data.title}
                  className="img-fuild mx-auto"
                  style={{ maxHeight: "350px", maxWidth: "200px", objectFit: "contain" }}
                />
                <div><strong>Product ID:</strong>{data.id}</div>
                <div><strong>Prduct price:</strong>{data.price}</div>

                <h5 className="card-title text-capitalize">{ }</h5>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Jewellery;