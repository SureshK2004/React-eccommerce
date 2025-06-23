import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});
  const [loading, setLoading] = useState(true);
  const limit = 5;
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedData = data.slice(start, end);
        setProducts(paginatedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (allProducts.length > 0) {
      const start = (page - 1) * limit;
      const end = start + limit;
      const paginatedData = allProducts.slice(start, end);
      setProducts(paginatedData);
    }
  }, [page, allProducts]);

  const goToDetails = (id) => {
    navigate(`/product/₹{id}`);
  };

  const handleEdit = (prod) => {
    setEditId(prod.id);
    setEditData({ ...prod });
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/₹{editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    })
      .then((res) => res.json())
      .then((updated) => {
        const updatedAllProducts = allProducts.map((p) =>
          p.id === editId ? updated : p
        );
        setAllProducts(updatedAllProducts);
        const updatedList = products.map((p) => (p.id === editId ? updated : p));
        setProducts(updatedList);
        alert("Product updated successfully!");
        setEditId(null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        setLoading(false);
      });
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete product ₹{id}?`)) {
      setLoading(true);
      fetch(`https://fakestoreapi.com/products/₹{id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          const filteredAllProducts = allProducts.filter((p) => p.id !== id);
          setAllProducts(filteredAllProducts);
          const filteredProducts = products.filter((p) => p.id !== id);
          setProducts(filteredProducts);
          alert(`Product ₹{id} deleted successfully!`);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
          setLoading(false);
        });
    }
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status" />
        <p className="mt-2">Loading...</p>
      </div>
    );
  }

  return (
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
            {products.map((product) => {
              if (editId === product.id) {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>
                      <input
                        name="image"
                        value={editData.image}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                      />
                    </td>
                    <td>
                      <input
                        name="title"
                        value={editData.title}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                      />
                    </td>
                    <td>
                      <input
                        name="category"
                        value={editData.category}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                      />
                    </td>
                    <td>
                      <input
                        name="price"
                        value={editData.price}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                      />
                    </td>
                    <td>
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // click panna separate ah eduthu kaamikurathuku
                          handleSave();
                        }}
                        className="btn btn-success btn-sm"
                      >
                        Save
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCancel();
                        }}
                        className="btn btn-secondary btn-sm"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              } else {
                return (
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
                    <td>₹{product.price}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(product);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-dark btn-sm mt-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(product.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-center m-5">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-primary btn-md me-2"
        >
          Previous
        </button>
        <span className="mx-2">Page {page}</span>
        <button
          disabled={page * limit >= allProducts.length}
          onClick={() => setPage(page + 1)}
          className="btn btn-primary btn-md ms-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllProducts;