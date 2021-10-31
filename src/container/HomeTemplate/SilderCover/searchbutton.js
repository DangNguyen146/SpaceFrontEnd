import React, { Component } from "react";

class Searchbutton extends Component {
  render() {
    return (
      <div className="container button-tranform">
        <div className="row">
          <div className="d-none d-md-block col"></div>
          <div className="col-12 col-md-8 ">
            <div className="creatnewcard p-3 shadow rounded overflow-hidden">
              <div className="input-group w-100">
                <input
                  type="text"
                  className="form-control px-2 border-0 bg-transparent text-light setplaceholder"
                  placeholder="Tìm kiếm sản phẩm"
                  aria-label="Tìm kiếm sản phẩm"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary border-0"
                  type="button"
                  id="button-addon2"
                >
                  <i class="fa fa-search px-2 text-light"></i>
                </button>
              </div>
              <div>
                <hr className="w-100 d-block my-0 bg-light" />
              </div>
            </div>
          </div>
          <div className="d-none d-md-block col"></div>
        </div>
      </div>
    );
  }
}

export default Searchbutton;
