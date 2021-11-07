import { Link } from "react-router-dom";
import React, { Component } from "react";

import { WOW } from "wowjs";
import CategorySanPham from "../CategorySanPham";
import Footer from "../Footer";
import SilderCover from "../SilderCover";
import Searchbutton from "../SilderCover/searchbutton";

export default class SPhamPage extends Component {
  componentDidMount() {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      live: true,
    });
    document.title = "Space | Sản phẩm";
    wow.init();
  }
  render() {
    return (
      <div className="pt-4 mt-5">
        <SilderCover />
        <Searchbutton />
        <section className="container ">
          <Link className="text-decoration-none" to="/">
            <h4 className="d-inline text-dark">Trang chủ </h4>
          </Link>
          <i className="fa fa-angle-double-right"></i>
          <Link className="text-decoration-none" to="/sanpham">
            <h4 className="d-inline text-dark"> Sản phẩm</h4>
          </Link>
        </section>
        <div style={{ height: 1 }} className="bg-dark mt-2 mb-4"></div>
        <CategorySanPham />
        <Footer />
      </div>
    );
  }
}
