import React, { Component } from "react";
import { connect } from "react-redux";
import { HuyBackGround, TangBackGround } from "./modules/action";

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemBackground: null,
      backgroundBackground: null,
    };
  }
  componentDidMount() {
    // this.props.addBackGround(this.state);
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.itemBackground !== this.state.itemBackground ||
      prevState.backgroundBackground !== this.state.backgroundBackground
    ) {
      this.props.addBackGround(this.state);
    }
  }
  handleOnChange = (e) => {
    this.setState({
      backgroundBackground: e.target.files[0],
    });
  };
  filePreview(e) {
    const file = e.target.files[0];
    document.getElementById("backgroundBackground").src =
      URL.createObjectURL(file);
    this.handleOnChange(e);
  }
  render() {
    return (
      <div className="py-4 text-light">
        <h1>Background</h1>
        <div className="container">
          <div className="row">
            <div
              className={
                this.state.itemBackground === 0
                  ? "border border-success col-4  p-2"
                  : "col-4  p-2"
              }
              role="button"
              tabindex="0"
              onClick={() => {
                this.setState({ itemBackground: 0 });
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/img/backgroud.png"}
                className="w-100"
                alt=""
              />
            </div>
            <div
              className={
                this.state.itemBackground === 1
                  ? "border border-success col-4  p-2"
                  : "col-4  p-2"
              }
              role="button"
              tabindex="0"
              onClick={() => {
                this.setState({ itemBackground: 1 });
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/img/736461.png"}
                className="w-100"
                alt=""
              />
            </div>
            <div
              className={
                this.state.itemBackground === 2
                  ? "border border-success col-4  p-2"
                  : "col-4  p-2"
              }
              role="button"
              tabindex="0"
              onClick={() => {
                this.setState({ itemBackground: 2 });
              }}
            >
              <img src="" id="backgroundBackground" className="w-100" />
            </div>
            <div className="col-12  p-2">
              <label
                htmlFor="formFile"
                className="form-label text-white fw-bold"
              >
                Thêm ảnh ngoài
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                name="avatars"
                onChange={this.filePreview.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.listBackGroundCreateCardReducer.dangSachBackGroundCreateCard,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeBackGround: (object) => {
      dispatch(HuyBackGround(object));
    },
    addBackGround: (object) => {
      dispatch(TangBackGround(object));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Background);
