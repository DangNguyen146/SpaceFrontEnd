import React, { Component } from "react";
import Background from "./Background";
import CardPreview from "./CardPreview";
import Logo from "./Logo";

import Text from "./Text";

class TaoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 0,
    };
  }
  componentDidMount() {
    document.title = "Space | Tạo card";
  }
  renderComponent = () => {
    if (this.state.category === 0) return <Logo key={this.state.category} />;
    if (this.state.category === 1)
      return <Background key={this.state.category} />;
    if (this.state.category === 2) return <Text key={this.state.category} />;
  };
  render() {
    return (
      <div className="mt-5 pt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 col-md-1 text-center py-4 text-light bg-dark ">
              <div
                className={
                  this.state.category === 0
                    ? "border border-success py-2 border-2"
                    : "py-2 border-2"
                }
                role="button"
                tabindex="0"
                onClick={() => {
                  this.setState({ category: 0 });
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/img/logoFinalwhite.png"}
                  className="w-50  "
                  alt=""
                />
                <p className="mt-3 pb-0 font-weight-bold">Logo</p>
              </div>
              <hr />
              <div
                className={
                  this.state.category === 1
                    ? "border border-success py-2 border-2"
                    : "py-2 border-2"
                }
                role="button"
                tabindex="0"
                onClick={() => {
                  this.setState({ category: 1 });
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/img/736461.png"}
                  className="w-50"
                  alt=""
                />
                <p className="mt-3 pb-0 font-weight-bold">Background</p>
              </div>
              <hr />
              <div
                className={
                  this.state.category === 2
                    ? "border border-success py-2 border-2"
                    : "py-2 border-2"
                }
                role="button"
                tabindex="0"
                onClick={() => {
                  this.setState({ category: 2 });
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/img/44.png"}
                  className="w-50"
                  alt=""
                />
                <p className="mt-3 pb-0 font-weight-bold">Text</p>
              </div>
              <hr />
            </div>
            <div
              className="col-8 col-md-3"
              style={{ backgroundColor: "#293039", minHeight: "95vh" }}
            >
              {this.renderComponent()}
            </div>
            <div className="col-12 col-md-8">
              <CardPreview />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaoCard;
