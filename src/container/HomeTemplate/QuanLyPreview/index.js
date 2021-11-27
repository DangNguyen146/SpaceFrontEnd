import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../../../components/Loading";
import { urlImagApi } from "../../../config/api";
import { actLisPreviewCardApi } from "./modules/action";
import { saveAs } from "file-saver";
import { actDeletePreviewCardApi } from "./modulesDelete/action";

class QuanLyPreview extends Component {
  componentDidMount() {
    document.title = "Space | Quản lý các card đã preview";
    this.props.fetchListPreviewComment();
  }
  downloadImage = (url, name) => {
    saveAs(name + ".png", url); // Put your image url here.
  };
  onDelte = (id) => {
    this.props.fetchDeletehCard(id);
  };
  render() {
    const renderHtml = () => {
      const { loading, data } = this.props;
      if (loading) return <Loading />;
      return (
        data &&
        data.map((item, i) => {
          return (
            <>
              <div className="col-12 my-3">
                <div className="row">
                  <div className="col-6 col-md-3">
                    <img
                      src={urlImagApi + item.imageTruoc}
                      className="w-100 rounded overflow-hidden"
                      alt="imageTruoc"
                    />
                  </div>
                  <div className="col-6 col-md-3">
                    <img
                      src={urlImagApi + item.imageSau}
                      className="w-100 rounded overflow-hidden"
                      alt="imageSau"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <h3 className="fw-bolder">{item.title}</h3>
                    <div className="col-6 col-md-3">{item.name}</div>
                    <div className="col-6 col-md-3">{item.link}</div>
                    <div className="col-6 col-md-3">
                      <button
                        className="btn btn-success w-100"
                        onClick={() =>
                          this.downloadImage(
                            urlImagApi + item.imageTruoc,
                            item.name + "truoc"
                          )
                        }
                      >
                        Dowload ảnh mặt trước
                      </button>
                    </div>
                    <div className="col-6 col-md-3">
                      <button
                        className="btn btn-success w-100"
                        onClick={() =>
                          this.downloadImage(
                            urlImagApi + item.imageSau,
                            item.name + "truoc"
                          )
                        }
                      >
                        Dowload ảnh mặt sau
                      </button>
                    </div>
                    <div className="col-6 col-md-3">
                      <button
                        className="btn btn-danger"
                        onClick={() => this.onDelte(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })
      );
    };
    return (
      <>
        <div className="pt-5 mt-5">
          <h1 className="text-center">QuanLyPreview</h1>
          <div className="container mt-3">
            <div className="container bg-white rounded shadow">
              <div className="row">{renderHtml()} </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listPreviewReducer.loading,
    data: state.listPreviewReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListPreviewComment: () => {
      dispatch(actLisPreviewCardApi());
    },
    fetchDeletehCard: (id) => {
      dispatch(actDeletePreviewCardApi(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuanLyPreview);
