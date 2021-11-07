import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";
import { actOrderApi } from "./modules/action";
import ListCard from "./ListCard";

class DonHangDaDat extends Component {
  componentDidMount() {
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
      console.log(data);
      if (loading) return <Loading />;
      return (
        data &&
        data.map((item, i) => {
          return (
            <>
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
                  <strong className="me-3">Sđt: {item.last_name}</strong>
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
              <div className="row">{renderItem(item.items)}</div>
            </>
          );
        })
      );
    };
    return (
      <>
        <div className="mb-5" style={{ marginTop: 100 }}>
          <section className="container mb-5">
            <Link className="text-decoration-none" to="/">
              <h4 className="d-inline text-dark">Trang chủ </h4>
            </Link>
            <i className="fa fa-angle-double-right"></i>
            <Link className="text-decoration-none" to="/quanlidonhang">
              <h4 className="d-inline text-dark"> Quản lí đơn hàng</h4>
            </Link>
          </section>
          <div style={{ height: 1 }} className="bg-dark mt-2 mb-4"></div>
          <div className="container bg-white">
            <div className="row shadow rounded">
              <div className="col-12 mt-4">
                <h2 className="text-center">Sản phẩm đã đặt</h2>
              </div>
              <div className="col-12">
                <div className="row py-3 px-3">{renderHTML()}</div>
              </div>
            </div>
          </div>
        </div>
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
