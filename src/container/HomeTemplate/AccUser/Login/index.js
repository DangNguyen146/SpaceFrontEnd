import React, { Component } from "react";
import { fetchLoginApi } from "./modules/action";
import { connect } from "react-redux";
import Axios from "axios";
import { urlApi } from "../../../../config/api";
import Loading from "../../../../components/Loading";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      client_id: "",
      client_secret: "",
      grant_type: "password",
    };
  }
  componentDidMount() {
    document.title = "Space | Đăng nhập";

    Axios.get(urlApi + `oauth2-info/`)
      .then((res) => {
        const data = res.data;
        if (data) {
          this.setState({
            client_id: data.client_id,
            client_secret: data.client_sercet,
          });
        }
      })
      .catch((error) => console.log(error));
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.fetchLogin(this.state, this.props.history);
  };
  renderNoti = () => {
    const { err } = this.props;
    if (err)
      return (
        <div className="alert alert-danger p-2">
          Sai tên đăng nhập hoặc mật khẩu
        </div>
      );
  };
  renderLoding = () => {
    const { loading } = this.props;
    if (loading) return <Loading />;
    return (
      <input type="submit" defaultValue="Đăng nhập" className="btn solid" />
    );
  };
  render() {
    return (
      <section
        className="loginPage container-fluid p-0"
        style={{
          backgroundImage:
            "url(" + process.env.PUBLIC_URL + "/img/backgroud.png)",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col d-none d-md-block"></div>
            <div
              className="col-12 col-md-8 bg-light"
              style={{
                marginTop: 200,
              }}
            >
              <div className="row">
                <div className="col-6 p-0">
                  <div
                    className="h-100"
                    style={{
                      backgroundImage:
                        "url(" + process.env.PUBLIC_URL + "/img/44.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
                <div className="col-6 p-0">
                  <div className="container py-5 rounded shadow overflow-hidden">
                    <h2 className="text-center">Đăng nhập</h2>

                    <form onSubmit={this.handleLogin} action="#">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputName"
                          className="form-label"
                        >
                          Tên đăng nhâp
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName"
                          name="username"
                          onChange={this.handleOnChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword"
                          className="form-label"
                        >
                          Mật khẩu
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword"
                          name="password"
                          onChange={this.handleOnChange}
                        />
                      </div>
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          Lưu đăng nhập
                        </label>
                      </div>
                      {this.renderNoti()}
                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="btn buttonPurple px-2 "
                        >
                          Đăng nhập
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col d-none d-md-block"></div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.userLoginReducer.loading,
    err: state.userLoginReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin: (user, histoty) => {
      dispatch(fetchLoginApi(user, histoty));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
