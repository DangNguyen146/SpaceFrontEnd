import React, { Component } from "react";
import { connect } from "react-redux";
import { actDetailCardApi, actViewCardApi } from "./modules/action";
import InnerImageZoom from "react-inner-image-zoom";
import { DatHangAction } from "./modules2/action";
import Loading from "../../../components/Loading";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import toast, { Toaster } from "react-hot-toast";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = { imgurl: "", active: 1, comment: "" };
  }
  componentDidMount() {
    document.title = "Space | Sản phẩm";
    //lấy id từ url
    const id = this.props.match.params.id;
    this.props.fetchDetailCard(id);
    this.props.fetchViewCard(id);
  }

  render() {
    const notify = () => toast.success("Đã thêm vào giỏ hàng");
    const id_card = this.props.match.params.id;
    const { data, datav, loadingv, loading } = this.props;
    if (loading) return <Loading />;
    return (
      data &&
      datav && (
        <>
          <div className="mt-5 pt-5">
            <Breadcrumb
              key={1111111}
              text1={"Sản phẩm"}
              link1={"/sanpham"}
              text2={data.name}
              link2={"#"}
            />
            <div className="container-fluid mt-5 bg-white p-3">
              <div className="row">
                <div className="col-4 col-md-2">
                  <div className="container">
                    <div
                      className={
                        this.state.active === 1
                          ? "border-3 mx-auto text-center border"
                          : ""
                      }
                    >
                      <a
                        className="img-card"
                        onClick={() => {
                          this.setState({
                            imgurl: data.imageTruoc,
                            active: 1,
                          });
                        }}
                      >
                        <img
                          src={data.image}
                          className="my-2 px-2 w-100  rounded"
                          alt=""
                        />
                      </a>
                    </div>
                    <div
                      className={
                        this.state.active === 2
                          ? "border-3 mx-auto text-center border"
                          : ""
                      }
                    >
                      <a
                        className="img-card"
                        onClick={() => {
                          this.setState({
                            imgurl: data.imageTruoc,
                            active: 2,
                          });
                        }}
                      >
                        <img
                          src={data.imageTruoc}
                          className="my-2 px-2 w-100  rounded "
                          alt=""
                        />
                      </a>
                    </div>
                    <div
                      className={
                        this.state.active === 3
                          ? "border-3 mx-auto text-center border"
                          : ""
                      }
                    >
                      <a
                        className="img-card"
                        onClick={() => {
                          this.setState({
                            imgurl: data.imageSau,
                            active: 3,
                          });
                        }}
                      >
                        <img
                          src={data.imageSau}
                          className="my-2 px-2 w-100 rounded"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-5">
                  <div className="container img-card">
                    <InnerImageZoom
                      src={
                        this.state.imgurl === ""
                          ? data.image
                          : this.state.imgurl
                      }
                      zoomSrc={
                        this.state.imgurl === ""
                          ? data.image
                          : this.state.imgurl
                      }
                      className="w-100  rounded"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-5">
                  <h2 className="fw-bold">{data.name}</h2>
                  <span>Lượt xem: {datav.view}</span>
                  <h3 className="fw-bold mb-5">Giá: {data.price}</h3>
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <button
                        className="btn buttonPurple w-100 w-100 text-center border shadow item-hover-item bg-product"
                        onClick={() => {
                          notify();
                          this.props.datCard({
                            id: data.id,
                            name: data.name,
                            giaCard: data.price,
                            image: data.image,
                            description: data.description,
                            // danhGia: data.danhGia,
                            soLuong: 1,
                          });
                          this.setState({
                            show: true,
                          });
                        }}
                      >
                        Thêm vào giỏ hàng
                      </button>
                      <Toaster />
                    </div>
                    <div className="col-12 col-md-4">
                      <Link
                        className="btn buttonPurpleOutline  w-100 w-100 text-center border shadow item-hover-item bg-product"
                        to={"/preview/" + id_card}
                      >
                        Preview
                      </Link>
                    </div>
                    <div className="col-12 col-md-5 mt-3">
                      <Link
                        className="btn buttonPurple float-start rounded d-inline w-100"
                        onClick={() => {
                          notify();
                          this.props.datCard({
                            id: data.id,
                            name: data.name,
                            giaCard: data.price,
                            image: data.image,
                            description: data.description,
                            // danhGia: data.danhGia,
                            soLuong: 1,
                          });
                          this.setState({
                            show: true,
                          });
                        }}
                        to="/quanlidonhang"
                      >
                        Mua ngay
                      </Link>
                    </div>
                    <p className="my-3">Mô tả: {data.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="container mt-4  p-3 mb-5"
              style={{ minHeight: 500 }}
            >
              <div className="row">
                <div className="form-floating">
                  <div className="col-12 bg-white px-2 py-3">
                    <Comment key={Math.random} id_Card={data.id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.detailCardReducer.loading,
    data: state.detailCardReducer.data,

    loadingv: state.viewCardReducer.loading,
    datav: state.viewCardReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCard: (card) => {
      dispatch(DatHangAction(card));
    },
    fetchDetailCard: (id) => {
      dispatch(actDetailCardApi(id));
    },
    fetchViewCard: (id) => {
      dispatch(actViewCardApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
