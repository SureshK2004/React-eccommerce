import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./layout";
import Homesection from "./category";
import Electronics from "./electronics";
import Jewellery from "./jewellery";
import Menclothing from "./mensclothing";


function Routeapp() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layouts />} >
                        <Route index element={<Homesection />} />
                        <Route path="electronics" element={<Electronics />} />
                        <Route path="jewelery" element={<Jewellery />} />
                        <Route path="mensclothing" element={<Menclothing />} />
                       
                        

                    </Route>
                </Routes>
            </BrowserRouter >
        </>
    );
}
export default Routeapp;