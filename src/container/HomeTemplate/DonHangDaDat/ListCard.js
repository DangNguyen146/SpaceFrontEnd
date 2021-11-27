import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../../../components/Loading";
import { actDetailCardApi } from "../DetailPage/modules/action";

class ListCard extends Component {
  componentDidMount() {
    const { card } = this.props;
    this.props.fetchDetailCard(card);
  }
  render() {
    const { data, loading, sl, price } = this.props;
    console.log(data);
    if (loading) return <Loading />;
    return (
      data && (
        <>
          <div className="row">
            <div className="col-6 col-md-3">
              <img src={data.image} alt="" className="w-100" />
            </div>
            <div className="col-6 col-md-9">
              <p>
                <strong className="me-3">Tên: </strong>
                {data.name}
              </p>
              <p>
                <strong className="me-3">Số lượng: </strong>
                {sl}
              </p>
              <p>
                <strong className="me-3">Giá: </strong>
                {price}
              </p>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailCard: (card) => {
      dispatch(actDetailCardApi(card));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCard);
