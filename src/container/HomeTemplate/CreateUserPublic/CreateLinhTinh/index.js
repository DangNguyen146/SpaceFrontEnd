import React, { Component } from "react";
import { connect } from "react-redux";
import Appearance from "./Appearance";
import LinkUser from "./LinkUser";
import { actCreatePublicUserApi } from "./modules2/action";
import toast, { Toaster } from "react-hot-toast";

class CreateLinhTinh extends Component {
  render() {
    const notify = () => toast.success("Okkkk");
    return (
      <div className="container-fluid">
        <div className="float-end">
          <button
            className="btn btn-success"
            onClick={() => {
              notify();
              this.handleOnClick();
            }}
          >
            Check
          </button>
        </div>
        <Toaster />
        <div>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="link-tab"
                data-bs-toggle="tab"
                data-bs-target="#link"
                type="button"
                role="tab"
                aria-controls="link"
                aria-selected="true"
              >
                Links
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="image-tab"
                data-bs-toggle="tab"
                data-bs-target="#image"
                type="button"
                role="tab"
                aria-controls="image"
                aria-selected="false"
              >
                Appearance
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active container mt-3"
              id="link"
              role="tabpanel"
              aria-labelledby="link-tab"
            >
              <LinkUser key={1} />
            </div>
            <div
              className="tab-pane fade"
              id="image"
              role="tabpanel"
              aria-labelledby="image-tab"
            >
              <Appearance key={2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data1: state.userLoginReducer.data,
    data2: state.listLinkReducer.dangSachLink,
    data3: state.profileReducer.listProfile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCreateUserPublic: (datas) => {
      dispatch(actCreatePublicUserApi(datas));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateLinhTinh);
