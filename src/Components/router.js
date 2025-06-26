import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./layout";
import Homesection from "./category";
import Electronics from "./electronics";
import Jewellery from "./jewellery";
import Menclothing from "./mensclothing";
import Womensclothing from "./womenclothing";
import ProductDetails from "./productdetails";
import AllProducts from "./allproducts";
import AddProduct from "./addproducts"



function Routeapp() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layouts />} >
                        <Route index element={<Homesection />} />
                        <Route path="electronics" element={<Electronics />} />
                        <Route path="jewelery" element={<Jewellery />} />
                        <Route path="men's clothing" element={<Menclothing />} />
                        <Route path="women's clothing" element={<Womensclothing />} />
                        <Route path="/products" element={<AllProducts />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="/add-product" element={<AddProduct />} />
                    </Route>
                </Routes>
            </BrowserRouter >
        </>
    );
}
export default Routeapp;