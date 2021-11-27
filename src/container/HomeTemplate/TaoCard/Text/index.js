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
    // this.props.addLogo(this.state);
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
              htmlFor="exampleInputText1"
              className="form-label text-light fw-bold"
            >
              Link create qr
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText1"
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
