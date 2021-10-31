import React, { Component } from "react";

class Buttonthemoi extends Component {
  render() {
    return (
      <div className="container button-tranform">
        <div className="row">
          <div className="d-none d-md-block col"></div>
          <div className="col-12 text-center">
            <button className="w-50 creatnewcard text-center mx-auto">
              <h2 className="p-2 m-0">Tạo một thẻ mới!!!</h2>
            </button>
          </div>
          <div className="d-none d-md-block col"></div>
        </div>
      </div>
    );
  }
}

export default Buttonthemoi;
