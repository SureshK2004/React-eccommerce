import React, { useEffect, useState } from "react";
import MainNavbar from "./main"; // or whatever your navbar is
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch failed:", err));
  }, []);

   const goToDetails= (a) => {
    navigate(`/product/${a}`);
  }

  return (
    <>
      <MainNavbar />
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="row m-5 w-100">
          {products.map((product) => (
            <div
              className="col-md-3 mb-4"
              key={product.id}
              onClick={() => goToDetails(product.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="card h-100 text-center p-3 category-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid mx-auto"
                  style={{ maxHeight: "350px", maxWidth: "200px", objectFit: "contain" }}
                />
                <div><strong>ID:</strong> {product.id}</div>
                <div><strong>Price:</strong> ${product.price}</div>
                <h5 className="card-title text-capitalize">{product.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllProducts;
