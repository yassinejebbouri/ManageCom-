import React, { Component, useEffect } from "react";

import { Link, useLocation } from 'react-router-dom';

import PerfectScrollbar from "react-perfect-scrollbar";

import MetisMenu from "metismenujs";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  /// Open menu
  useEffect(() => {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");

    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }

    btn.addEventListener("click", toggleFunc);
  }, []);
  const location = useLocation();

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            <li
              className={`${
                "summary" ===  location.pathname.slice(1) ||  location.pathname === "/" ? "mm-active" : ""
              }`}
            >
              <Link className="ai-icon" to="summary">
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Summary</span>
              </Link>
            </li>
            <li
              className={`${"employees" ===  location.pathname.slice(1) ? "mm-active" : ""}`}
            >
              <Link className="ai-icon" to="/employees" aria-expanded="false">
                <i className="flaticon-381-paperclip"></i>
                <span className="nav-text">Employees</span>
              </Link>
            </li>
            <li className={`${"users" ===  location.pathname.slice(1) ? "mm-active" : ""}`}>
              <Link className="ai-icon" to="/users" aria-expanded="false">
                <i className="flaticon-381-user"></i>
                <span className="nav-text">Users</span>
              </Link>
            </li>
            <li
              className={`${"inventory" ===  location.pathname.slice(1) ? "mm-active" : ""}`}
            >
              <Link className="ai-icon" to="/inventory" aria-expanded="false">
                <i className="flaticon-381-cloud"></i>
                <span className="nav-text">Inventory</span>
              </Link>
            </li>
            <li
              className={`${
                "ingredients" ===  location.pathname.slice(1) ? "mm-active" : ""
              }`}
            >
              <Link className="ai-icon" to="/ingredients" aria-expanded="false">
                <i className="flaticon-381-battery"></i>
                <span className="nav-text">Ingredients</span>
              </Link>
            </li>
            <li
              className={`${"products" ===  location.pathname.slice(1) ? "mm-active" : ""}`}
            >
              <Link className="ai-icon" to="/products" aria-expanded="false">
                <i className="flaticon-381-database"></i>
                <span className="nav-text">Products</span>
              </Link>
            </li>
            <li
              className={`${"store-locations" ===  location.pathname.slice(1) ? "mm-active" : ""}`}
            >
              <Link className="ai-icon" to="/store-locations" aria-expanded="false">
                <i className="flaticon-381-home"></i>
                <span className="nav-text">Store Locations</span>
              </Link>
            </li>
            <li
              className={`${"content-management" ===  location.pathname.slice(1) ? "mm-active" : ""}`}
            >
              <Link className="ai-icon" to="/content-management" aria-expanded="false">
                <i className="flaticon-381-folder"></i>
                <span className="nav-text">Content Management</span>
              </Link>
            </li>
            {/*                   
                  <ul aria-expanded="false">
                <li>
                  
                </li>

                <li>
                  <Link to="/ecom-product-order">Order</Link>
                </li>
                <li>
                  <Link to="table-bootstrap-basic">Tables</Link>
                </li>
              </ul>
                  <li>
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-layer-1"></i>
                        <span className="nav-text">Pages</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link to="/page-register">Register</Link>
                        </li>
                        <li>
                           <Link to="/login">Login</Link>
                        </li>
                        <li>
                           <Link
                              className="has-arrow"
                              to="#"
                              aria-expanded="false"
                           >
                              Error
                           </Link>
                           <ul aria-expanded="false">
                              <li>
                                 <Link to="/page-error-400">Error 400</Link>
                              </li>
                              <li>
                                 <Link to="/page-error-403">Error 403</Link>
                              </li>
                              <li>
                                 <Link to="/page-error-404">Error 404</Link>
                              </li>
                              <li>
                                 <Link to="/page-error-500">Error 500</Link>
                              </li>
                              <li>
                                 <Link to="/page-error-503">Error 503</Link>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <Link to="/lock-screen">Lock Screen</Link>
                        </li>
                     </ul>
                  </li> */}
          </MM>
          <div className="copyright">
            <p>
              <strong>ManageCom - Dashboard</strong> © All Rights Reserved
            </p>
            <p>by Yassine Jebbouri and Hamza Rehioui</p>
          </div>
        </PerfectScrollbar>
      </div>
    );
}

export default SideBar;
