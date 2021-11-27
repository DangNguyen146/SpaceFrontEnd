import React, { Component } from "react";
import CreateLinhTinh from "./CreateLinhTinh";
import Preview from "./Preview";

class CreateUserPublic extends Component {
  componentDidMount() {
    document.title = "Space | Tạo thông tin online";
  }
  render() {
    return (
      <div className="pt-5 mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-8">
              <CreateLinhTinh key={1} />
            </div>
            <div className="col-12 col-md-4">
              <Preview key={2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUserPublic;
