import React, { Component } from "react";
import { connect } from "react-redux";
import { actCreatePublicUserApi } from "../../modules2/action";
import { AddProfile } from "./modules/action";
import toast, { Toaster } from "react-hot-toast";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatars: null,
      profile_title: "",
      decripttion: "",
    };
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "avatars") {
      this.setState({
        avatars: e.target.files[0],
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };
  componentDidUpdate() {
    this.props.addProfile(this.state);
  }
  filePreview(e) {
    const file = e.target.files[0];
    document.getElementById("avatar").src = URL.createObjectURL(file);
    this.handleOnChange(e);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.profile_title &&
      this.state.decripttion &&
      this.state.avatars
    ) {
      let username = this.props.data1.username;
      let data2 = this.props.data2;
      let data4 = this.props.data4.css;
      let data3 = [];
      data3.push(this.props.data3);
      let profile_title = this.state.profile_title;
      let decripttion = this.state.decripttion;
      let avatars = this.state.avatars;

      const form_data = new FormData();
      form_data.append("avatars", this.state.avatars, this.state.avatars.name);
      form_data.append("profile_title", profile_title);
      form_data.append("username", username);
      form_data.append("decripttion", decripttion);
      form_data.append("css", data4);
      form_data.append("data", JSON.stringify(data2));

      this.props.fetchCreateUserPublic(form_data);
    }
  };
  render() {
    const notify = () => toast.success("Đã thêm thành công");
    return (
      <div className="container">
        <h3>Profile</h3>
        <div className="container bg-white">
          <div className="row">
            <div className="col-3">
              <img src="" id="avatar" className="w-100" />
            </div>
            <form
              action="#"
              onSubmit={this.handleSubmit}
              enctype="multipart/form-data"
            >
              <div className="col-3">
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Avatar
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    name="avatars"
                    onChange={this.filePreview.bind(this)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Profile title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="@example"
                      name="profile_title"
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Decripttion
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={""}
                      name="decripttion"
                      onChange={this.handleOnChange}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  notify();
                }}
              >
                Hoàn thành
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userLoginReducer: state.userLoginReducer.data,
    data: state.profileReducer.data,

    data1: state.userLoginReducer.data,
    data2: state.listLinkReducer.dangSachLink,
    data3: state.profileReducer.listProfile,
    data4: state.backgroundReducer.listBackGround,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCreateUserPublic: (datas) => {
      dispatch(actCreatePublicUserApi(datas));
    },
    addProfile: (profiles) => {
      dispatch(AddProfile(profiles));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
