import React, { Component } from "react";
import { connect } from "react-redux";

class RenderLink extends Component {
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
  render() {
    const renderHtml = () => {
      return (
        this.state.data &&
        this.state.data.map((item) => {
          return (
            <div className="col-12">
              <div className="container bg-white my-2 border rounded shadow-sm py-2">
                <label>{item.title}</label>
                <p className="mb-0">{item.link}</p>
              </div>
            </div>
          );
        })
      );
    };
    return (
      <div className="mt-3 container-fluid">
        <div className="container">
          <div className="row">{renderHtml()}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.listLinkReducer.dangSachLink,
    userLoginReducer: state.userLoginReducer.data,
  };
};
export default connect(mapStateToProps)(RenderLink);
