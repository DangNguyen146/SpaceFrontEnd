import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../../../components/Loading";
import { urlImagApi } from "../../../config/api";
import { saveAs } from "file-saver";

class ShowImageReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      link: "",
      card: "",
      imageTruoc: "",
      imageSau: "",
      card: 0,
      creator: 0,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }
  downloadImage = (url, name) => {
    saveAs(name + ".png", url); // Put your image url here.
  };
  render() {
    const { loading, data } = this.props;
    if (loading) return <Loading />;
    return (
      data && (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="container px-3 py-1">
                <img
                  src={urlImagApi + data.imageTruoc}
                  className="w-100"
                  alt="imageTruoc"
                />
              </div>
              <button
                className="btn btn-success"
                onClick={() =>
                  this.downloadImage(
                    urlImagApi + data.imageTruoc,
                    data.name + "truoc"
                  )
                }
              >
                Dowload
              </button>
            </div>
            <div className="col-12 col-md-6">
              <div className="container px-3 py-1">
                <img
                  src={urlImagApi + data.imageSau}
                  className="w-100"
                  alt="imageSau"
                />
              </div>
              <button
                className="btn btn-success"
                onClick={() =>
                  this.downloadImage(
                    urlImagApi + data.imageSau,
                    data.name + "sau"
                  )
                }
              >
                Dowload
              </button>
            </div>
          </div>
        </div>
      )
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.previewCardReducer.loading,
    data: state.previewCardReducer.data,
  };
};

export default connect(mapStateToProps)(ShowImageReview);
