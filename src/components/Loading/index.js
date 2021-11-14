import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
}

export default Loading;
