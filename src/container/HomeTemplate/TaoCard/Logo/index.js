import React, { Component } from "react";
import { connect } from "react-redux";
import { HuyLogo, TangLogo } from "./modules/action";

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: null,
      sizeLogo: 100,
      locatedLogoX: 10,
      locatedLogoY: 10,
    };
  }
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      locatedLogo: parseInt(value),
    });
  };
  componentDidMount() {
    // this.props.addLogo(this.state);
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.logo !== this.state.logo ||
      prevState.locatedLogoX !== this.state.locatedLogoX ||
      prevState.locatedLogoY !== this.state.locatedLogoY ||
      prevState.sizeLogo !== this.state.sizeLogo
    ) {
      this.props.addLogo(this.state);
    }
  }

  render() {
    return (
      <div className="py-4 text-light">
        <h1>Logo</h1>
        <div className="container">
          <div className="row">
            <div
              className={
                this.state.logo === 0
                  ? "border border-success col-4  p-2"
                  : "col-4  p-2"
              }
              role="button"
              tabindex="0"
              onClick={() => {
                this.setState({ logo: 0 });
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/img/logoFinalwhite.png"}
                className="w-100"
                alt=""
              />
            </div>
            <div
              className={
                this.state.logo === 1
                  ? "border border-success col-4  p-2"
                  : "col-4  p-2"
              }
              role="button"
              tabindex="0"
              onClick={() => {
                this.setState({ logo: 1 });
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/img/logoFinal.png"}
                className="w-100"
                alt=""
              />
            </div>
          </div>
          <div className=" w-100 mt-3">
            <label htmlFor="customRange" className="form-label text-white">
              Kích thước
            </label>
            <span className="float-end">{this.state.sizeLogo}</span>
            <input
              type="range"
              min="0"
              max="300"
              step="10"
              onChange={(event) =>
                this.setState({ sizeLogo: event.target.value })
              }
              className="form-range"
              id="customRange"
            />
          </div>
        </div>
        <hr />
        <h1>Vị trí logo</h1>
        <div className="container">
          <div>
            <label htmlFor="customRangeX" className="form-label text-white">
              Vị trí theo chiều ngang(X)
            </label>
            <span className="float-end">{this.state.locatedLogoX}</span>
            <input
              type="range"
              min="0"
              max="450"
              step="5"
              onChange={(event) =>
                this.setState({ locatedLogoX: event.target.value })
              }
              className="form-range"
              id="customRangeX"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="customRangeY" className="form-label text-white">
              Vị trí theo chiều dọc(Y)
            </label>
            <span className="float-end">{this.state.locatedLogoY}</span>
            <input
              type="range"
              min="0"
              max="250"
              step="5"
              onChange={(event) =>
                this.setState({ locatedLogoY: event.target.value })
              }
              className="form-range"
              id="customRangeY"
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.listLogoCreateCardReducer.dangSachLogoCreateCard,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeLogo: (object) => {
      dispatch(HuyLogo(object));
    },
    addLogo: (object) => {
      dispatch(TangLogo(object));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Logo);
