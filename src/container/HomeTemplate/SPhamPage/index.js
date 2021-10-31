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
    document.title = "Trang chủ | Space";
    wow.init();
  }
  render() {
    return (
      <div className="pt-4 mt-5">
        <SilderCover />
        <Searchbutton />
        <CategorySanPham />
        <Footer />
      </div>
    );
  }
}
