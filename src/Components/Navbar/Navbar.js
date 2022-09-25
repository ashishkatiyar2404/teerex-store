import React from "react";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar__header">
      <div className="">
        <section className="navbar__section">
          <div className="store__heading">
            <h1>TeeRex Store</h1>
          </div>
          <div className="navbar__input_container">
            <input className="" placeholder="Search"></input>
          </div>
          <div className="navbar__cart">
            <Link to="/cart" className="link__cart">
              <GrCart className="cart__icons" /> Cart
            </Link>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Navbar;
