import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../../../components/Loading";
import { fetchPutPasswordApi } from "./modules/action2";
import toast, { Toaster } from "react-hot-toast";

class ThayDoiMK extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      password2: "",
      old_password: "",
    };
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchChange(this.state, this.props.data.id);
  };
  render() {
    const notify = () =>
      toast.success(
        "Đã thay đổi mật khẩu thành công! Vui lòng đăng xuất và đăng nhập lại"
      );
    const { data, loading } = this.props;
    if (loading) return <Loading />;
    return (
      <div className="mt-3 mb-5">
        <h1 className="text-center fw-bold">Thay đổi mật khẩu</h1>
        <div className="container bg-white">
          <form onSubmit={this.handleSubmit} action="#">
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.handleOnChange}
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputpassword2" className="form-label">
                password2
              </label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.handleOnChange}
                id="exampleInputpassword2"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputold_password" className="form-label">
                old_password
              </label>
              <input
                type="password"
                className="form-control"
                name="old_password"
                onChange={this.handleOnChange}
                id="exampleInputold_password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                notify();
              }}
            >
              Submit
            </button>
          </form>
          <Toaster />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.userLoginReducer.loading,
    data: state.userLoginReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchChange: (data, id) => {
      dispatch(fetchPutPasswordApi(data, id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThayDoiMK);
