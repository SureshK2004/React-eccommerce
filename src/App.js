import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/header";
import Homesection from "./Components/section";
import Footer from "./Components/footer";

function App() {
  return (
    <div>
      <Header />
      <Homesection/>
      <Footer />
    </div>
  );
}

export default App;