import React, { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      <div className="Loader">
        <div className="text-center text-redorange">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}
