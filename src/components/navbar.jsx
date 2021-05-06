import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
      <a className="navbar-brand" href="#">
        Items
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
