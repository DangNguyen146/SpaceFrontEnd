import React, { Component } from "react";
import { connect } from "react-redux";
import { actDetailCardApi, actViewCardApi } from "./modules/action";
import InnerImageZoom from "react-inner-image-zoom";
import { Link } from "@material-ui/core";
import { DatHangAction } from "./modules2/action";
import Loading from "../../../components/Loading";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = { imgurl: "", active: 1 };
  }
  componentDidMount() {
    document.title = "Space | Sản phẩm";
    //lấy id từ url
    const id = this.props.match.params.id;
    this.props.fetchDetailCard(id);
    this.props.fetchViewCard(id);
  }
  render() {
    const { data, datav, loadingv, loading } = this.props;
    if (loading) return <Loading />;
    return (
      data &&
      datav && (
        <div className="mt-5 pt-5">
          <div className="container-fluid bg-white py-2">
            <div className="container">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mt-2">
                  <li className="breadcrumb-item">
                    <Link className=" text-decoration-none" href="/sanpham">
                      Category
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {data.name}
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="container-fluid mt-5 bg-white p-3">
            <div className="row">
              <div className="col-2">
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
              <div className="col-5">
                <div className="container img-card">
                  <InnerImageZoom
                    src={
                      this.state.imgurl === "" ? data.image : this.state.imgurl
                    }
                    zoomSrc={
                      this.state.imgurl === "" ? data.image : this.state.imgurl
                    }
                    className="w-100  rounded"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-5">
                <h2 className="fw-bold">{data.name}</h2>
                <span>Lượt xem: {datav.view}</span>
                <h3 className="fw-bold mb-5">Giá: </h3>
                <div className="row">
                  <div className="col-4">
                    <button
                      className="btn buttonPurple w-100 w-100 text-center border shadow item-hover-item bg-product"
                      onClick={() => {
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

                    {/* <button className="btn buttonPurple w-100">
                      Thêm vào giỏ hàng
                    </button> */}
                  </div>
                  <div className="col-4">
                    <button className="btn buttonPurpleOutline rounded d-inline w-100">
                      Mua ngay
                    </button>
                  </div>
                  <p className="my-3">Mô tả:</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-4 bg-white p-3">
            <div className="row">
              <div className="form-floating">
                <div className="col-12">
                  <label htmlFor="floatingTextarea2">Comments</label>
                  <textarea
                    className="form-control w-100"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: 100 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
