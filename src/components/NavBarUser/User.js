import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LogoutApi } from "../../container/HomeTemplate/AccUser/Login/modules/actionforLogin";

class User extends Component {
  handelOnLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("userKH");
    this.props.fectchLogOut();
  };
  render() {
    const userData = this.props.userLoginReducer;
    if (userData) {
      return (
        <div className="dropdown">
          <a
            className="text-dark text-decoration-none dropdown-toggle px-3"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
            style={{ cursor: "pointer" }}
          >
            Chào, {userData.username}
          </a>
          <ul className="dropdown-menu dropdown-menu-lg-end">
            <li>
              <Link className="dropdown-item" to="/donhangdadat">
                Đơn hàng đã đặt
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/quanlidonhang">
                Quản lí đơn hàng
              </Link>
            </li>
            <hr />
            <li>
              <Link className="dropdown-item" to="/quanlytaikhoan">
                Quản lý tài khoản
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                onClick={() => {
                  this.handelOnLogout();
                }}
                to="/"
              >
                Đăng xuất
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/login" className="text-decoration-none">
            <button className="btn buttonPurple me-2  rounded" type="submit">
              Đăng nhập
            </button>
          </Link>
          <Link to="/signin" className="text-decoration-none">
            <button
              className="btn buttonPurpleOutline   rounded"
              type="submit"
              to="/signin"
            >
              Đăng kí
            </button>
          </Link>
        </div>
      );
    }
  }
}
const mapStapToProps = (state) => {
  return {
    userLoginReducer: state.userLoginReducer.data,
    err: state.userLoginReducer.err,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fectchLogOut: () => {
      dispatch(LogoutApi());
    },
  };
};

export default connect(mapStapToProps, mapDispatchToProps)(User);
