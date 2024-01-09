import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomerNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">ESHOP</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/UICustomer/CustomerProducts">Products</NavLink>
              </li>
            </ul>
            <div className="button">
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart (0)
              </NavLink>
            </div>
            <div className="nav-item dropdown" style={{ marginLeft: '10px' }}>
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-user me-1"></i> Profile
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="/profile">Account Settings</NavLink></li>
                <li><NavLink className="dropdown-item" to="/orders">My Orders</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default CustomerNavbar;
