import React, { Component } from "react";
import { connect } from "react-redux";

class Notication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ show: false }), 3000);
  }
  componentDidUpdate() {
    console.log("true");
    this.setState = { show: true };
  }
  render() {
    return (
      <div
        className="toast-container position-fixed"
        style={{ top: "10vh", right: 0 }}
      >
        <div
          className={this.state.show === true ? "toast show" : "toast"}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <img src="..." className="rounded me-2" alt="..." />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">just now</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
          <div className="toast-body">See? Just like this.</div>
        </div>
        <div
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <img src="..." className="rounded me-2" alt="..." />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">2 seconds ago</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
          <div className="toast-body">
            Heads up, toasts will stack automatically
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.datHangReducer.data,
  };
};
export default connect(mapStateToProps)(Notication);
