import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";
import { actOrderApi } from "./modules/action";
import ListCard from "./ListCard";
import Breadcrumb from "../../../components/Breadcrumb";
import Footer from "../Footer";
import { Redirect } from "react-router";

class DonHangDaDat extends Component {
  componentDidMount() {
    document.title = "Space | Đơn hàng đã đặt";
    this.props.fetchOrder();
  }

  render() {
    const renderItem = (object) => {
      return object.map((item, i) => {
        return (
          <>
            <ListCard
              key={i}
              card={item.card}
              sl={item.quantity}
              price={item.price}
            />
            {object.length - 1 !== i ? <hr /> : ""}
          </>
        );
      });
    };

    const renderHTML = () => {
      const { loading, data } = this.props;
      if (loading) return <Loading />;
      try {
        data && data.map((item, i) => {});
      } catch (err) {
        return (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        );
      }
      return (
        data &&
        data.map((item, i) => {
          return (
            <>
              <div className="row">
                <div className="col-12 mt-3 py-3 border border-dark">
                  <div className="row">
                    <div className="col-12  ">
                      <p className="bg-success px-3 text-light py-1 rounded">
                        <strong className="mr-3">Id: </strong>
                        {item.id}
                      </p>
                    </div>
                    <div className="col-6 col-md-4">
                      <p>
                        <strong className="me-3">Tên: </strong>
                        {item.first_name}
                      </p>
                    </div>
                    <div className="col-6 col-md-4">
                      <p>
                        <strong className="me-3">Họ: </strong>
                        {item.last_name}
                      </p>
                    </div>
                    <div className="col-6 col-md-4">
                      <p>
                        <strong className="me-3">Tên đệm:</strong>
                        {item.last_name}
                      </p>
                    </div>
                    <div className="col-12 col-md-4">
                      <p>
                        <strong className="me-3">Địa chỉ: </strong>
                        {item.address} {" - "}
                        {item.place}
                      </p>
                    </div>
                    <div className="col-12 col-md-4">
                      <p>
                        <strong className="me-3">Số điện thoại:</strong>
                        {item.phone}
                      </p>
                    </div>
                    <div className="col-12">
                      <p>
                        <strong className="me-3">Tình trang: </strong>
                        <span className="text-success">
                          {parseInt(item.last_name) !== 1
                            ? "Đang xử lí"
                            : "Đang giao hàng"}
                        </span>
                      </p>
                    </div>
                    <div className="container">
                      <Link
                        className="float-end me-5"
                        to={"/detaildonhangdadat/" + item.id}
                      >
                        Xem chi tiết hóa đơn {">>>"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row">{renderItem(item.items)}</div> */}
            </>
          );
        })
      );
    };
    return (
      <>
        <div className="mb-5" style={{ marginTop: 100, minHeight: "80vh" }}>
          <Breadcrumb
            key={9999999}
            text1={"Trang chủ"}
            link1={"/"}
            text2={"Quản lí đơn hàng"}
            link2={"/quanlidonhang"}
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
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listOrderReducer.loading,
    data: state.listOrderReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrder: () => {
      dispatch(actOrderApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonHangDaDat);
