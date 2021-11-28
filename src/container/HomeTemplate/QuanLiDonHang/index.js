import React, { Component } from "react";
import { GiamSoLuong, TangSoLuong, HuySanPham } from "./Modules/action";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actOrderApi } from "./modulesSubmit/action";
import Breadcrumb from "../../../components/Breadcrumb";
import { RemoveHangAction } from "../../../components/CardItem/Modules/action";

class QuanLiDonHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      place: "",
      phone: "",
      link: "",
      items: [],
    };
  }
  getItems = () => {
    const itemss = [];
    for (let i = 0; i < this.props.dangSachCardDangDat.length; i++) {
      const item = this.props.dangSachCardDangDat[i];
      const obj = {
        card: item.id,
        quantity: item.soLuong,
        price: this.renderTien(),
      };
      itemss.push(obj);
    }
    this.setState({
      items: itemss,
    });
  };
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchSubmit(this.state, this.props.history);
    this.props.fetchRemoveList();
  };
  renderTien = () => {
    let sum = 0;
    if (this.props.dangSachCardDangDat.length !== 0) {
      this.props.dangSachCardDangDat.map((item, index) => {
        sum = sum + parseInt(item.giaCard);
      });
    }

    return sum;
  };
  renderHTML = () => {
    if (this.props.dangSachCardDangDat.length !== 0) {
      console.log(this.props.dangSachCardDangDat);
      return this.props.dangSachCardDangDat.map((item, index) => {
        return (
          <>
            <div className="col-12 ">
              <div className="row">
                <div className="col-12 col-md-3">
                  <img className="w-100" src={item.image} alt="" />
                </div>
                <div className="col-12 col-md-9 ">
                  <div className="row">
                    <div className="col-5">Tên sản phẩm: </div>
                    <div className="col-7">
                      <b className="pb-0">{item.name}</b>
                    </div>
                    <div className="col-5">Giá sản phẩm: </div>
                    <div className="col-7">
                      <i className="pb-0">{item.giaCard} VNĐ</i>
                    </div>
                    <div className="col-12 col-md-5">Số lượng sản phẩm:</div>
                    <button
                      className="col-2 col-md-1 btn btn-dark"
                      onClick={() => {
                        this.props.giamSoLuong(item);
                      }}
                    >
                      -
                    </button>
                    <div className="col-4 col-md-2 text-center px-2">
                      <p className="pb-0  mb-0 mt-2 ">{item.soLuong}</p>
                    </div>
                    <button
                      className="col-2 col-md-1 btn btn-dark"
                      onClick={() => {
                        this.props.tangSoLuong(item);
                      }}
                    >
                      +
                    </button>
                    <div className="col-12 mt-3">
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.props.huySanPham(item);
                        }}
                      >
                        <i>Hủy mua sản phẩm</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {index + 1 < this.props.dangSachCardDangDat.length ? (
                <div className="bg-dark w-100 my-4" style={{ height: 2 }}></div>
              ) : (
                ""
              )}
            </div>
          </>
        );
      });
    } else {
      return <h5>Chưa có sản phẩm nào được mua</h5>;
    }
  };

  render() {
    return (
      <>
        <div className="mb-5" style={{ marginTop: 100 }}>
          <Breadcrumb
            key={99999}
            text1={"Trang chủ"}
            link1={"/"}
            text2={"Quản lí đơn hàng"}
            link2={"#"}
          />

          <div className="container bg-white">
            <div className="row shadow rounded">
              <div className="col-12 mt-4">
                <h2 className="text-center">Quản lí đơn hàng</h2>
              </div>
              <div className="col-12 col-md-8 my-3">
                <div className="row py-3 px-3">{this.renderHTML()}</div>
              </div>
              <div className="col-12 col-md-4">
                <h3>Chi tiết đơn hàng</h3>
                <p className="mb-2">
                  Số mặt hàng: {this.props.dangSachCardDangDat.length}
                </p>
                <p className="mb-2" id="giaCard">
                  Tồng số tiền: {this.renderTien()} vnđ
                </p>
                <a
                  className="btn btn-success px-5"
                  href="#collapseExample"
                  data-bs-toggle="collapse"
                  onClick={this.getItems}
                >
                  Đặt hàng
                </a>
              </div>
              <div className="col-12 my-3">
                <div className="bg-dark w-100 my-4" style={{ height: 2 }}></div>
                <div className="collapse" id="collapseExample">
                  <div className="container">
                    <form
                      onSubmit={this.handleSubmit}
                      action="#"
                      enctype="multipart/form-data"
                    >
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                          <label
                            htmlFor="InputFirstName"
                            className="form-label"
                          >
                            FirstName
                          </label>
                          <input
                            type="firstname"
                            className="form-control"
                            name="first_name"
                            id="InputFirstName"
                            onChange={this.handleOnChange}
                          />
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                          <label htmlFor="InputLastName" className="form-label">
                            LastName
                          </label>
                          <input
                            type="lasttname"
                            className="form-control"
                            name="last_name"
                            id="InputLastName"
                            onChange={this.handleOnChange}
                          />
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                          <label htmlFor="InputEmail" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="InputEmail"
                            onChange={this.handleOnChange}
                          />
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                          <label htmlFor="InputAddress" className="form-label">
                            Address
                          </label>
                          <input
                            type="address"
                            className="form-control"
                            name="address"
                            id="InputAddress"
                            onChange={this.handleOnChange}
                          />
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                          <label htmlFor="InputPlace" className="form-label">
                            Place
                          </label>
                          <input
                            type="place"
                            className="form-control"
                            name="place"
                            id="InputPlace"
                            onChange={this.handleOnChange}
                          />
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                          <label htmlFor="InputPhone" className="form-label">
                            Phone
                          </label>
                          <input
                            type="phone"
                            className="form-control"
                            name="phone"
                            id="InputPhone"
                            onChange={this.handleOnChange}
                          />
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                          <label htmlFor="InputLink" className="form-label">
                            Link
                          </label>
                          <input
                            type="link"
                            className="form-control"
                            name="link"
                            id="InputLink"
                            onChange={this.handleOnChange}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Đặt hàng
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dangSachCardDangDat: state.datHangReducer.dangSachCardDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    giamSoLuong: (card) => {
      dispatch(GiamSoLuong(card));
    },
    tangSoLuong: (card) => {
      dispatch(TangSoLuong(card));
    },
    huySanPham: (card) => {
      dispatch(HuySanPham(card));
    },
    fetchSubmit: (data, histoty) => {
      dispatch(actOrderApi(data, histoty));
    },
    fetchRemoveList: () => {
      dispatch(RemoveHangAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuanLiDonHang);
