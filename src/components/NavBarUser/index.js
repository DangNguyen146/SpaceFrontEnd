import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import User from "./User";

export default class NavbarHome extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container-fluid">
          <NavLink className="nav-link navbar-brand" to="/">
            <img
              src={process.env.PUBLIC_URL + "/img/logoFinal.png"}
              width="60"
              alt=""
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarScroll"
          >
            <ul>
              <span className=""></span>
            </ul>
            <ul className="navbar-nav  my-2 my-lg-0 ">
              <li className="nav-item">
                <NavLink
                  className="nav-link mx-2  fw-2 fw-bold"
                  aria-current="page"
                  to="/"
                >
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-2 text-dark  fw-2 fw-bold"
                  aria-current="page"
                  to="/sanpham"
                >
                  Sản phẩm
                </Link>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link mx-2  fw-2 fw-bold"
                  aria-current="page"
                  to="#"
                >
                  Liên hệ
                </NavLink>
              </li>
            </ul>
            <ul className="ps-0 p-md-2">
              <User />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
