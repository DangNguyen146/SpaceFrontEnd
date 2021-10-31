import React, { Component } from "react";
import { connect } from "react-redux";
import { actLisCategoryApi } from "./modulesCategory/action";
import ListItemSanPham from "./ListItemSanPham";

class CategorySanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
    };
  }
  componentDidMount() {
    this.props.fetchListCategory();
  }
  renderHtml = () => {
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
        return (
          <>
            <li class="list-group-item list-group-item-action bg-transparent border-0">
              <a>{item.name}</a>
            </li>
            {i != data.length - 1 ? <hr className="my-0" /> : ""}
          </>
        );
      })
    );
  };
  render() {
    return (
      <div
        className="container-fluid shadow py-0"
        style={{
          backgroundColor: "#fff",
        }}
      >
        <div className="row py-0">
          <div className="col-12 col-md-2 shadow py-4">
            <div className="">
              <p>
                <a
                  class=" text-decoration-none fw-bolder text-dark"
                  data-bs-toggle="collapse"
                  href="#collapCategory"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapCategory"
                >
                  <h3>
                    <i class="fa fa-sliders-h me-3"></i>Thể loại card
                  </h3>
                </a>
              </p>
              <hr className="my-0" />
              <div class="collapse show " id="collapCategory">
                <p className="fw-bold my-2">Category</p>
                <ul class="list-group ps-3">{this.renderHtml()}</ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-10 py-4">
            <div className="px-2 row">
              <ListItemSanPham />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listCategoryReducer.loading,
    data: state.listCategoryReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListCategory: () => {
      dispatch(actLisCategoryApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategorySanPham);
