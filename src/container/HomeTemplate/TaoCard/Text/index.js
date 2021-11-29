import React, { Component } from "react";
import { connect } from "react-redux";
import { HuyText, TangText } from "./modules/action";

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      link: "",
      locatedNameX: 10,
      locatedNameY: 10,
      skewName: 10,
      locatedLinkX: 10,
      locatedLinkY: 10,
      skewLinkY: 10,
    };
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  componentDidMount() {
    const data = this.props.data;
    if (data.name) {
      document.getElementById("exampleInputText1").value = data.name;
      this.setState({ name: data.name });
    }
    if (data.link) {
      document.getElementById("exampleInputLink1").value = data.link;
      this.setState({ link: data.link });
    }
    if (data.locatedNameX) {
      document.getElementById("customNameRangeX").value = parseInt(
        data.locatedNameX
      );
      this.setState({ locatedNameX: data.locatedNameX });
    }
    if (data.locatedNameY) {
      document.getElementById("customNameRangeY").value = parseInt(
        data.locatedNameY
      );
      this.setState({ locatedNameY: data.locatedNameY });
    }
    if (data.skewName) {
      this.setState({ skewName: data.skewName });
      document.getElementById("customTextRange").value = data.skewName;
    }
    if (data.locatedLinkX) {
      document.getElementById("customLinkRangeX").value = parseInt(
        data.locatedLinkX
      );
      this.setState({ locatedLinkX: data.locatedLinkX });
    }
    if (data.locatedLinkY) {
      document.getElementById("customLinkRangeY").value = parseInt(
        data.locatedLinkY
      );
      this.setState({ locatedLinkY: data.locatedLinkY });
    }
    if (data.skewLinkY) {
      document.getElementById("customRange").value = parseInt(data.skewLinkY);
      this.setState({ skewLinkY: data.skewLinkY });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.name !== this.state.name ||
      prevState.link !== this.state.link ||
      prevState.locatedNameX !== this.state.locatedNameX ||
      prevState.locatedNameY !== this.state.locatedNameY ||
      prevState.locatedLinkX !== this.state.locatedLinkX ||
      prevState.locatedLinkY !== this.state.locatedLinkY ||
      prevState.skewLinkY !== this.state.skewLinkY
    ) {
      this.props.addText(this.state);
    }
  }
  render() {
    return (
      <div className="py-4 text-light">
        <h1>Text</h1>
        <div className="container">
          <div className="mb-3">
            <label
              htmlFor="exampleInputText1"
              className="form-label text-light fw-bold"
            >
              Tên của bạn
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText1"
              name="name"
              onChange={this.handleOnChange}
            />
            <h1>Vị trí Name</h1>
            <div className="container">
              <div className=" w-100 mt-3">
                <label htmlFor="customRange" className="form-label text-white">
                  Kích thước text
                </label>
                <span className="float-end">{this.state.skewName}</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="2"
                  onChange={(event) =>
                    this.setState({ skewName: event.target.value })
                  }
                  className="form-range"
                  id="customTextRange"
                />
              </div>
              <div>
                <label
                  htmlFor="customNameRangeX"
                  className="form-label text-white"
                >
                  Vị trí theo chiều ngang(X)
                </label>
                <span className="float-end">{this.state.locatedNameX}</span>
                <input
                  type="range"
                  min="0"
                  max="450"
                  step="5"
                  onChange={(event) =>
                    this.setState({ locatedNameX: event.target.value })
                  }
                  className="form-range"
                  id="customNameRangeX"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="customNameRangeY"
                  className="form-label text-white"
                >
                  Vị trí theo chiều dọc(Y)
                </label>
                <span className="float-end">{this.state.locatedNameY}</span>
                <input
                  type="range"
                  min="0"
                  max="250"
                  step="5"
                  onChange={(event) =>
                    this.setState({ locatedNameY: event.target.value })
                  }
                  className="form-range"
                  id="customNameRangeY"
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputLink1"
              className="form-label text-light fw-bold"
            >
              Link create qr
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLink1"
              name="link"
              onChange={this.handleOnChange}
            />
            <h1>Vị trí link</h1>
            <div className="container">
              <div>
                <label
                  htmlFor="customLinkRangeX"
                  className="form-label text-white"
                >
                  Vị trí theo chiều ngang(X)
                </label>
                <span className="float-end">{this.state.locatedLinkX}</span>
                <input
                  type="range"
                  min="0"
                  max="450"
                  step="5"
                  onChange={(event) =>
                    this.setState({ locatedLinkX: event.target.value })
                  }
                  className="form-range"
                  id="customLinkRangeX"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="customLinkRangeY"
                  className="form-label text-white"
                >
                  Vị trí theo chiều dọc(Y)
                </label>
                <span className="float-end">{this.state.locatedLinkY}</span>
                <input
                  type="range"
                  min="0"
                  max="250"
                  step="5"
                  onChange={(event) =>
                    this.setState({ locatedLinkY: event.target.value })
                  }
                  className="form-range"
                  id="customLinkRangeY"
                />
              </div>
              <div className=" w-100 mt-3">
                <label htmlFor="customRange" className="form-label text-white">
                  Kích thước
                </label>
                <span className="float-end">{this.state.skewLinkY}</span>
                <input
                  type="range"
                  min="0"
                  max="250"
                  step="10"
                  onChange={(event) =>
                    this.setState({ skewLinkY: event.target.value })
                  }
                  className="form-range"
                  id="customRange"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.listTextCreateCardReducer.dangSachTextCreateCard,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeText: (object) => {
      dispatch(HuyText(object));
    },
    addText: (object) => {
      dispatch(TangText(object));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Text);
