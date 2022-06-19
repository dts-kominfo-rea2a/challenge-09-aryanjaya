// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1 className="title">Call a Friend</h1>
      <p className="sub-title">your friendly contact app</p>
    </header>
  );
};

export default Header;
