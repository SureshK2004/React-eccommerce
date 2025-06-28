import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status" />
        <p className="mt-2">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return <div className="container mt-5">Product not found</div>;
  }

  return (
    <div className="container mt-5">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-secondary mb-3"
      >
        Back to Products
      </button>

      <div className="card m-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.image}
              className="img-fluid rounded-start p-4"
              alt={product.title}
              style={{ height: "400px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p className="card-text">
                <span className="badge bg-primary">{product.category}</span>
              </p>
              <h3 className="text-success">₹{product.price}</h3>
              <p className="card-text mt-3">{product.description}</p>
              <div className="mt-4">
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-warning"  onClick={() => alert("Authentication service is currently unavailable - Please try again later")}>
                    Buy Now
                  </button>
                   <button className="btn btn-danger m-3"  onClick={() => alert("Authentication service is currently unavailable - Please try again later")}>
                    Add to Cart 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
