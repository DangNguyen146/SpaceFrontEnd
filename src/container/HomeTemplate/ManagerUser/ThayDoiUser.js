import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../../../components/Loading";
import { fetchPutApi } from "./modules/action";
import toast, { Toaster } from "react-hot-toast";

class ThayDoiUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
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
    const data = {
      username:
        this.state.username === ""
          ? this.props.data.username
          : this.state.username,
      first_name:
        this.state.first_name === ""
          ? this.props.data.username
          : this.state.first_name,
      last_name:
        this.state.last_name === ""
          ? this.props.data.username
          : this.state.last_name,
      email: this.state.email === "" ? this.props.data.email : this.state.email,
    };
    this.props.fetchChange(data, this.props.data.id);
  };
  render() {
    const notify = () =>
      toast.success(
        "Đã thay đổi thành công! Vui lòng đăng xuất và đăng nhập lại"
      );
    const { data, loading } = this.props;
    if (loading) return <Loading />;
    return (
      data && (
        <div className="mt-3">
          <h1 className="text-center fw-bold">Thay đổi user</h1>
          <div className="container bg-white">
            <form onSubmit={this.handleSubmit} action="#">
              <div className="mb-3">
                <label htmlFor="inputUserName" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder={data.username}
                  onChange={this.handleOnChange}
                />

                <div id="textHelp" className="form-text">
                  Username
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputFirstName" className="form-label">
                  Firstname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  name="first_name"
                  placeholder={data.first_name}
                  onChange={this.handleOnChange}
                />
                <div id="textHelp" className="form-text">
                  Firstname
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputLastName" className="form-label">
                  LastName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  name="last_name"
                  placeholder={data.last_name}
                  onChange={this.handleOnChange}
                />
                <div id="textHelp" className="form-text">
                  LastName
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder={data.email}
                  onChange={this.handleOnChange}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
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
      )
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
      dispatch(fetchPutApi(data, id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThayDoiUser);
