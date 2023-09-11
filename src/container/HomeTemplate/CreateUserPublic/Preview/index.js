import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { urlImagApi } from "../../../../config/api";
import RenderLink from "./RenderLink";
import RenderProfile from "./RenderProfile";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });
  }
  componentDidMount() {
    this.setState({ data: this.props.data });
  }
  renderREviewTemplate = () => {
    const data = this.state.data;
    if (data)
      if (data.css === "")
        return (
          <>
            <div
              className={
                this.state.id === data.id ? "border active my-3" : "my-3"
              }
              onClick={() => {
                this.setState({
                  id: data.id,
                  title: data.title,
                  image: data.image,
                });
              }}
            >
              <div
                className="container"
                style={{
                  background: `url(` + data.image + `)`,
                  minHeight: 300,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <RenderProfile key={10} />
                <RenderLink key={11} />
              </div>
            </div>
          </>
        );
      else {
        return (
          <>
            <div
              className={
                this.state.id === data.id ? "border active my-3" : "my-3"
              }
              onClick={() => {
                this.setState({
                  id: data.id,
                  title: data.title,
                  css: data.css,
                });
              }}
              style={{ cursor: "pointer" }}
            >
              <div
                className="container"
                style={{
                  backgroundImage: data.css,
                  minHeight: 300,
                }}
              >
                <RenderProfile key={10} />
                <RenderLink key={11} />
              </div>
            </div>
          </>
        );
      }
    else {
      return (
        <div>
          <RenderProfile key={10} />
          <RenderLink key={11} />
        </div>
      );
    }
  };
  renderLinkPublic = () => {
    const userData = this.props.userLoginReducer;
    if (userData === null)
      return (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      );
    return (
      <>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Link public
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readOnly
              className="form-control-plaintext"
              id="staticEmail"
              value={urlImagApi + "/view/" + userData.username}
            />
          </div>
          <button
            className="btn btn-success"
            onClick={() =>
              navigator.clipboard.writeText(
                urlImagApi + "/view/" + userData.username
              )
            }
          >
            Copy
          </button>
        </div>
      </>
    );
  };
  render() {
    return (
      <div>
        <div className="container bg-white card">
          <div className="card-header">{this.renderLinkPublic()}</div>
          <div className="card-body">{this.renderREviewTemplate()}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userLoginReducer: state.userLoginReducer.data,
    data: state.backgroundReducer.listBackGround,
  };
};
export default connect(mapStateToProps)(Preview);
