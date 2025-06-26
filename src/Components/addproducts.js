import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

 
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    
 
    const newProduct = {
      ...product,
      id: Date.now(),
      price: parseFloat(product.price)
    };

    
    const updatedProducts = [...existingProducts, newProduct];

  
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    setTimeout(() => {
      alert(`"${newProduct.title}" added successfully!`);
      navigate('/products');
      setLoading(false);
    }, 500);
  };

  return (
    <div className="container mt-4">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            step="0.01"
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-control"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
        
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="url"
            className="form-control"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
            placeholder="https://example.com/image.jpg"
          />
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Product'}
        </button>
      </form>
    </div>
  );
}

export default AddProduct;