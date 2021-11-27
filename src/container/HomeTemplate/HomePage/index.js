import React, { Component } from "react";

import { WOW } from "wowjs";
import Footer from "../Footer";
import HomePageContent from "../HomePageContent";
import SilderCover from "../SilderCover";
import Buttonthemoi from "../SilderCover/buttonthemoi";
import SlideSanPham from "../SlideSanPham";

export default class HomePage extends Component {
  componentDidMount() {
    document.title = "Space | Trang chủ";
  }
  render() {
    return (
      <div className="pt-4 mt-5">
        <SilderCover />
        <Buttonthemoi />
        <HomePageContent />
        <SlideSanPham />
        <Footer />
      </div>
    );
  }
}
