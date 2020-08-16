import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__title">
        Brown Stack
      </Link>
      <Link to="/about" className="header__link">
        About
      </Link>
    </div>
  );
};

export default Header;
