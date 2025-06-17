import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function MainNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  px-4">
      <Link className="navbar-brand" to="/">MyStore</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/women's clothing">Women's clothing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/men's clothing">Men's Clothing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jewelery">Jewellery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/electronics">Electronics</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavbar;
