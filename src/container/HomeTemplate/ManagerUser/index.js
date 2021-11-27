import React, { Component } from "react";
import ThayDoiMK from "./ThayDoiMK";
import ThayDoiUser from "./ThayDoiUser";

class ManagerUser extends Component {
  componentDidMount() {
    document.title = "Space | Quản lý tài khoản";
  }
  render() {
    return (
      <div className="pt-5 mt-5 user">
        <div className="cover container-fluid">
          <h1 className="text-center">Quản lý tài khoản</h1>
          <ThayDoiUser key={1} />
          <ThayDoiMK key={2} />
        </div>
      </div>
    );
  }
}

export default ManagerUser;
