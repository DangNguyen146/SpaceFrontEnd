import React, { Component, useRef } from "react";
import domtoimage from "dom-to-image";
import { connect } from "react-redux";
import "./taocard.css";
import Loading from "../../../components/Loading";
import QRCode from "qrcode.react";

class CardPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      data3: [],
    };
    this.myRef = React.createRef(null);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.state.data) {
      this.setState({
        data: nextProps.data,
      });
    }
    if (nextProps.data2 !== this.state.data2) {
      this.setState({
        data2: nextProps.data2,
      });
    }
    if (nextProps.data3 !== this.state.data3) {
      this.setState({
        data3: nextProps.data3,
      });
    }
  }
  componentDidMount() {
    this.setState({
      data: this.props.data,
      data2: this.props.data2,
      data3: this.props.data3,
    });
  }
  exportToPng = (dom) => {
    domtoimage
      .toPng(dom)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.getElementById("preview").appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };
  saveToPng = (dom) => {
    domtoimage
      .toPng(dom)
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };
  render() {
    const container = this.myRef;
    let dataLink =
      this.state.data3.link !== null && this.state.data3.link !== ""
        ? String(this.state.data3.link)
        : "";
    let srcBackGround =
      parseInt(this.state.data2.itemBackground) === 2 &&
      document.getElementById("backgroundBackground") !== null &&
      document.getElementById("backgroundBackground").src !== null
        ? document.getElementById("backgroundBackground").src
        : "";
    return (
      <div className="TaoCard mt-5 pt-5">
        <button
          className="btn btn-success"
          onClick={() => this.exportToPng(container.current)}
        >
          export
        </button>
        <button
          className="btn btn-warning"
          onClick={() => this.saveToPng(container.current)}
        >
          Dowload
        </button>
        <div className="container">
          <div className="row">
            <div id="container">
              <div
                ref={container}
                className="position-relative createcard mt-3"
                style={
                  this.state.data2.itemBackground == null
                    ? {}
                    : parseInt(this.state.data2.itemBackground) === 0
                    ? {
                        background:
                          "url(" +
                          process.env.PUBLIC_URL +
                          "/img/backgroud.png" +
                          ")",
                      }
                    : parseInt(this.state.data2.itemBackground) === 1
                    ? {
                        background:
                          "url(" +
                          process.env.PUBLIC_URL +
                          "/img/736461.png" +
                          ")",
                      }
                    : {
                        background: "url(" + srcBackGround + ")",
                      }
                }
              >
                {this.state.data ? (
                  <img
                    width={
                      this.state.data.sizeLogo ? this.state.data.sizeLogo : 150
                    }
                    className="position-absolute"
                    style={{
                      left: parseInt(this.state.data.locatedLogoX),
                      top: parseInt(this.state.data.locatedLogoY),
                    }}
                    src={
                      this.state.data
                        ? this.state.data.logo === 1
                          ? process.env.PUBLIC_URL + "/img/logoFinal.png"
                          : process.env.PUBLIC_URL + "/img/logoFinalwhite.png"
                        : ""
                    }
                    alt=""
                  />
                ) : (
                  ""
                )}
                <p
                  className="position-absolute fw-bold"
                  style={
                    this.state.data3
                      ? {
                          left: parseInt(this.state.data3.locatedNameX),
                          top: parseInt(this.state.data3.locatedNameY),
                        }
                      : ""
                  }
                >
                  {this.state.data3 !== null ? this.state.data3.name : ""}
                </p>
                {this.state.data3.link !== null &&
                this.state.data3.link !== "" ? (
                  <QRCode
                    className="position-absolute"
                    style={
                      this.state.data3.link !== null
                        ? {
                            left: parseInt(this.state.data3.locatedLinkX),
                            top: parseInt(this.state.data3.locatedLinkY),
                          }
                        : {}
                    }
                    id="qrcode"
                    value={dataLink}
                    size={parseInt(this.state.data3.skewLinkY)}
                    level={"H"}
                    includeMargin={true}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <h2 className="text-center">Preview sản phẩm</h2>
          <div className="mx-auto text-center">
            <div id="preview"></div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.listLogoCreateCardReducer.dangSachLogoCreateCard,
    data2: state.listBackGroundCreateCardReducer.dangSachBackGroundCreateCard,
    data3: state.listTextCreateCardReducer.dangSachTextCreateCard,
  };
};
export default connect(mapStateToProps)(CardPreview);
