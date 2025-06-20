import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function ProductDetails() {
  const [category, setCategory] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setCategory(data))
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, [id]);


  return (
    <>
    
      <div
        className="d-flex justify-content-center align-items-center section"
        style={{ minHeight: "80vh" }}
      >
        <div className="container">
          <div className="row m-5 justify-content-center align-items-center ">
            <div className="col-md-5 mb-5">
              <div className="card w-100 text-center p-3 category-card ">
                <img
                  src={category.image}
                  alt={category.title}
                  className="img-fluid mx-auto"
                  style={{
                    maxHeight: "350px",
                    maxWidth: "200px",
                    objectFit: "contain",
                  }}
                />
                <div className="m-2">
                  <strong>Categories:</strong> {category.category}
                </div>
                <div>
                  <strong>Description:</strong> {category.description}
                </div>
                <div className="m-2">
                  <strong>Price:</strong> ₹{category.price}
                </div>
                <h5 className="card-title text-capitalize">{category.title}</h5>

                <div
                  className="d-flex justify-content-center align-items-center mt-3 mb-1"
                >
                  <button
                    className="btn btn-danger"
                    style={{ width: "180px" }}
                  >
                    Buy Now
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
