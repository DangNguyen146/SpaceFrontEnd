import React, { Component } from "react";
import { connect } from "react-redux";
import { actLisCategoryApi } from "./modulesCategory/action";
import ListItemSanPham from "./ListItemSanPham";
import Loading from "../../../components/Loading";

class CategorySanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: "",
    };
  }
  componentDidMount() {
    this.props.fetchListCategory(this.state.category_id);
  }

  onChangeValue = (event) => {
    let temp = event.target.value;
    this.setState({
      category_id: temp,
    });
  };
  renderHtml = () => {
    const { loading, data } = this.props;
    if (loading) return <Loading />;

    return (
      data &&
      data.map((item, i) => {
        return (
          <>
            <div className=" form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value={item.id}
                id={"flexRadioDefault" + i}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                {item.name}
              </label>
            </div>
          </>
        );
      })
    );
  };
  render() {
    return (
      <div
        className="container-fluid shadow py-0 "
        style={{
          backgroundColor: "#fff",
        }}
      >
        <div className="row py-0">
          <div className="col-12 col-md-2 shadow py-4">
            <div className="">
              <a
                className=" text-decoration-none fw-bolder text-dark"
                data-bs-toggle="collapse"
                href="#collapCategory"
                role="button"
                aria-expanded="false"
                aria-controls="collapCategory"
              >
                <i className="fa fa-sliders-h me-3"></i>Thể loại card
                <i className="ms-3 fa fa-caret-down "></i>
              </a>
              <hr className="my-0" />
              <div className="collapse show " id="collapCategory">
                <p className="fw-bold my-2">Category</p>
                <ul className="list-group ps-3">
                  <div className="form-check my-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      defaultChecked
                      onChange={() => {
                        this.setState({ category_id: "" });
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      <a>All</a>
                    </label>
                  </div>
                  <div className=" my-2" onChange={this.onChangeValue}>
                    {this.renderHtml()}
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-10 py-4"
            style={{
              minHeight: "1569",
            }}
          >
            <div className="px-2 row" style={{ minHeight: "90vh" }}>
              <ListItemSanPham
                key={Math.random()}
                category_id={this.state.category_id}
              />
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
