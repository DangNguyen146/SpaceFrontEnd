import React, { Component } from "react";

import { WOW } from "wowjs";
import Breadcrumb from "../../../components/Breadcrumb";
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

        <Breadcrumb
          key={1}
          text1={"Trang chủ"}
          link1={"/"}
          text2="Sản phẩm"
          link2={"/sanpham"}
        />
        <CategorySanPham key={2} />
        <Footer key={3} />
      </div>
    );
  }
}
