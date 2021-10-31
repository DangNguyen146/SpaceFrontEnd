import React, { Component } from "react";
import { connect } from "react-redux";
import { actLisCardApi } from "./modules/action";
import Slider from "react-slick";
import ListCardItem from "../../../components/CardItem";

class SlideSanPham extends Component {
  componentDidMount() {
    this.props.fetchListCard();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 6,
    };
    const renderHtml = () => {
      const { loading, data } = this.props;
      if (loading)
        return (
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        );
      return (
        data &&
        data.map((item, i) => {
          return <ListCardItem key={i} card={item} height={200} />;
        })
      );
    };
    return (
      <div className="container sanphammoinhat mt-5">
        <h2 className="text-center fw-bolder text-uppercase my-3">
          Sản phẩm mới nhất
        </h2>
        <Slider {...settings} className="text-center">
          {renderHtml()}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listCardReducer.loading,
    data: state.listCardReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListCard: () => {
      dispatch(actLisCardApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideSanPham);
