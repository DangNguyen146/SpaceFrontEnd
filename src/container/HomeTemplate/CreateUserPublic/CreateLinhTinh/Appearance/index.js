import React, { Component } from "react";
import BackGround from "./BackGround/BackGround";
import Profile from "./Profile/Profile";

class Appearance extends Component {
  render() {
    return (
      <div className="conainer">
        <h2 className="text-center">Appearance</h2>
        <div>
          <Profile key={3} />
          <BackGround key={4} />
        </div>
      </div>
    );
  }
}

export default Appearance;
