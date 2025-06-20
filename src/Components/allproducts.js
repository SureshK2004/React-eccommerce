import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, []);

  const goToDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center mb-4">All Products</h3>
        <div className="table-responsive">
          <table className="table table-striped table-bordered text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Edit the product</th>
                <th>Delete the product</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  onClick={() => goToDetails(product.id)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{product.id}</td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ height: "60px", objectFit: "contain" }}
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.category}</td>
                  <td>${product.price}</td>
                  <td>
                    <button className="btn btn-warning">Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-dark mt-1">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
