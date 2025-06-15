import React from "react";
import Signup from "./signup";
import Signin from "./signin";

function Header() {
    return (
        <nav className="navbar navbar-light bg-dark navbar-expand-lg">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 text-danger">React Ecommerce</span>
                <div className="d-flex">
                    <Signin />
                    <Signup />
                </div>
            </div>
        </nav>
    );
}

export default Header;