import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./header";
import Homesection from "./section";
import Footer from "./footer";
import MainNavbar from "./main";

function Layouts() {
  const location = useLocation();
  const path = location.pathname;

  let navbarElement;
  if (path === "/") {
    navbarElement = null; // don't show navbar on home
  } else {
    navbarElement = <MainNavbar />;
  }

  return (
    <>
      <Header />
      {navbarElement}
      <Homesection />
      <Footer />
    </>
  );
}

export default Layouts;
