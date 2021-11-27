import { data } from "jquery";
import React, { Component } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../../../../components/Breadcrumb";
import Loading from "../../../../components/Loading";
import Footer from "../../Footer";
import ListCard from "../ListCard";
import { actDetailOrderApi } from "./modules/action";

class DetailDonHangDaDat extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    document.title = "Space | Chi tiết hóa đơn" + id;
    this.props.fetchDetailOrder(id);
  }
  render() {
    const id = this.props.match.params.id;
    const renderHTMLCard = (data) => {
      return data.map((item, index) => {
        return (
          <ListCard
            key={1}
            card={item.card}
            sl={item.quantity}
            price={parseFloat(item.price) * parseInt(item.quantity)}
          />
        );
      });
    };
    const renderHTML = () => {
      const { loading, data } = this.props;
      if (loading) return <Loading key={333333333} />;
      return (
        data && (
          <>
            <div className="row">
              <div className="col-12 mt-3 py-3 border border-dark">
                <div className="row">
                  <div className="col-12  ">
                    <p className="bg-success px-3 text-light py-1 rounded">
                      <strong className="mr-3">Id: </strong>
                      {data.id}
                    </p>
                  </div>
                  <div className="col-6 col-md-4">
                    <p>
                      <strong className="me-3">Tên: </strong>
                      {data.first_name}
                    </p>
                  </div>
                  <div className="col-6 col-md-4">
                    <p>
                      <strong className="me-3">Họ: </strong>
                      {data.last_name}
                    </p>
                  </div>
                  <div className="col-6 col-md-4">
                    <p>
                      <strong className="me-3">Tên đệm:</strong>
                      {data.last_name}
                    </p>
                  </div>
                  <div className="col-12 col-md-4">
                    <p>
                      <strong className="me-3">Địa chỉ: </strong>
                      {data.address} {" - "}
                      {data.place}
                    </p>
                  </div>
                  <div className="col-12 col-md-4">
                    <p>
                      <strong className="me-3">Số điện thoại:</strong>
                      {data.phone}
                    </p>
                  </div>
                  <div className="col-12">
                    <p>
                      <strong className="me-3">Tình trang: </strong>
                      <span className="text-success">
                        {parseInt(data.last_name) !== 1
                          ? "Đang xử lí"
                          : "Đang giao hàng"}
                      </span>
                    </p>
                  </div>
                  <div className="col-12">{renderHTMLCard(data.items)}</div>
                </div>
              </div>
            </div>
          </>
        )
      );
    };
    return (
      <div>
        <div className="mb-5" style={{ marginTop: 100, minHeight: "80vh" }}>
          <Breadcrumb
            key={9999999}
            text1={"Trang chủ"}
            link1={"/"}
            text2={"Quản lí đơn hàng"}
            link2={"/quanlidonhang"}
            text3={id}
            link={"/detaildonhangdadat/" + id}
          />
          <div className="container bg-white">
            <div className="row shadow rounded">
              <div className="col-12 mt-4">
                <h2 className="text-center">Sản phẩm đã đặt</h2>
              </div>
              <div className="col-12">
                <div className="row py-3 px-3">
                  <div className="container ">{renderHTML()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer key={99999} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.detailOrderReducer.loading,
    data: state.detailOrderReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailOrder: (id) => {
      dispatch(actDetailOrderApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDonHangDaDat);
