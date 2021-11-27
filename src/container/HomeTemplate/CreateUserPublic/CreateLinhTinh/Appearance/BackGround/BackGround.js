import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../../../../../../components/Loading";
import { AddBackground } from "./modules/action";
import { actLisBackgroundApi } from "./modulesGetBackGroud/action";

class BackGround extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      title: "",
      css: "",
      image: "",
    };
  }
  componentDidMount() {
    this.props.fetchListBackground();
  }
  componentDidUpdate() {
    this.props.addBackgroud(this.state);
  }
  renderHtml = () => {
    const { loading_backgroud, data_backgroud } = this.props;
    if (loading_backgroud) return <Loading />;
    return (
      data_backgroud &&
      data_backgroud.map((item, i) => {
        if (item.css === "")
          return (
            <>
              <div
                className={
                  this.state.id === item.id
                    ? "col-3 border active my-3"
                    : "col-3 my-3"
                }
                onClick={() => {
                  this.setState({
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    css: "",
                  });
                }}
              >
                <label>{item.title}</label>
                <div
                  className="container"
                  style={{
                    background: `url(` + item.image + `)`,
                    minHeight: 300,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </>
          );
        else {
          return (
            <>
              <div
                className={
                  this.state.id === item.id
                    ? "col-3 border active my-3"
                    : "col-3 my-3"
                }
                onClick={() => {
                  this.setState({
                    id: item.id,
                    title: item.title,
                    css: item.css,
                    image: "",
                  });
                }}
                style={{ cursor: "pointer" }}
              >
                <label>{item.title}</label>
                <div
                  className="container"
                  style={{
                    backgroundImage: item.css,
                    minHeight: 300,
                  }}
                ></div>
              </div>
            </>
          );
        }
      })
    );
  };
  render() {
    return (
      <div className="container">
        <h3>Backgroud</h3>
        <div className="container">
          <div className="row">{this.renderHtml()}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userLoginReducer: state.userLoginReducer.data,
    data: state.backgroundReducer.data,

    loading_backgroud: state.listBackgroundReducer.loading,
    data_backgroud: state.listBackgroundReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addBackgroud: (backgrounds) => {
      dispatch(AddBackground(backgrounds));
    },
    fetchListBackground: () => {
      dispatch(actLisBackgroundApi(1));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BackGround);
