import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";
import { urlImagApi } from "../../../config/api";
import { actDetailUserApi } from "./modules/action";
import { Redirect } from "react-router";

class PageViewUser extends Component {
  componentDidMount() {
    //lấy id từ url
    const username = this.props.match.params.username;
    document.title = "Space | " + username;
    this.props.fetchUser(username);
  }
  renderData = (data) => {
    const datas = JSON.parse(data);
    return datas.map((item) => {
      return (
        <div className="col-12">
          <Link
            className="text-decoration-none nav-link bg-white rounded border shadow-sm text-center p-3 mb-3 font-weight-bold text-black"
            to={item.link}
          >
            {item.title}
            <p>{item.link}</p>
          </Link>
        </div>
      );
    });
  };
  render() {
    const { loading, data } = this.props;
    if (loading) return <Loading key={999999} />;
    if (data === null)
      return (
        <Redirect
          to={{
            pathname: "/pagenotfound",
          }}
        />
      );

    return (
      data && (
        <div
          className="mt-5 pt-5"
          style={{ minHeight: "100vh", backgroundImage: data[0].css }}
        >
          <div className="container mt-3 ">
            <div className="text-center mx-auto" style={{ width: "15vh" }}>
              <img
                className="rounded-circle shadow-sm w-100 mx-auto"
                src={urlImagApi + data[0].avatars}
                alt={data[0].username}
              />
            </div>
            <h2 className="text-center mt-2 fw-bold">
              {data[0].profile_title}
            </h2>
            <p className="text-center">{data[0].decripttion}</p>
            <div>{this.renderData(data[0].data)}</div>
          </div>
        </div>
      )
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.detailUserReducer.loading,
    data: state.detailUserReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (username) => {
      dispatch(actDetailUserApi(username));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageViewUser);
