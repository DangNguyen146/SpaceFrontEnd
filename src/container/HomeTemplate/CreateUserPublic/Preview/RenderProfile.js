import { data } from "jquery";
import React, { Component } from "react";
import { connect } from "react-redux";

class RenderProfile extends Component {
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
      const item = this.state.data;
      let srcAvatr =
        item.srcAvatr !== null &&
        document.getElementById("avatar") !== null &&
        document.getElementById("avatar").src !==
          "http://localhost:3000/user/dasboard"
          ? document.getElementById("avatar").src
          : process.env.PUBLIC_URL + "/img/default-profile-picture.png";
      if (item)
        return (
          <div className="mx-auto">
            <div className="col-12">
              <div className="mx-auto" style={{ width: 100, height: 100 }}>
                <img
                  src={srcAvatr}
                  className="w-100 rounded-circle"
                  alt="avatar"
                />
              </div>
            </div>
            <div className="col-12 text-center">
              <strong>{item.profile_title}</strong>
            </div>
            <div className="col-12 text-center">
              <p>{item.decripttion}</p>
            </div>
          </div>
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
    userLoginReducer: state.userLoginReducer.data,
    data: state.profileReducer.listProfile,
  };
};
export default connect(mapStateToProps)(RenderProfile);
