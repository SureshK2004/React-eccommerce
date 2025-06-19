import React, { useState, useEffect } from 'react';
import MainNavbar from './main';

export default function Menclothing() {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then((res) => res.json())
            .then((json) => {
                setCategory(json);
                setLoading(false); 
            });
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "8vh" }}>
                <div className="spinner-border text-primary mt-4" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <>
        <MainNavbar/>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "8vh" }}>
            <div className="row m-5 w-100">
                {category.map((data) => (
                    <div key={data.id} className="col-md-3 mb-4">
                        <div className="card h-100 text-center p-3  category-card">
                            <img
                                src={data.image}
                                alt={data.title}
                                className="card-img-top img-fluid mb-3"
                                style={{ height: "180px", objectFit: "contain" }}
                            />
                            <h5 className="card-title text-capitalize">{data.title}</h5>
                            <p className="card-text">₹{data.price}</p>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>

    );
}