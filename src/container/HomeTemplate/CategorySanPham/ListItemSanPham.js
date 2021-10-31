import React, { Component } from "react";
import { connect } from "react-redux";
import { actLisCardApi } from "../SlideSanPham/modules/action";
import ListCardItem from "../../../components/CardItem";

class ListItemSanPham extends Component {
  componentDidMount() {
    this.props.fetchListCard();
  }
  render() {
    const renderHtml = () => {
      const { loading, data } = this.props;
      if (loading)
        return (
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        );
      return (
        data &&
        data.map((item, i) => {
          return (
            <div className="col-6 col-md-3 mb-5">
              <ListCardItem key={i} card={item} height={200} />
            </div>
          );
        })
      );
    };
    return <>{renderHtml()}</>;
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listCardReducer.loading,
    data: state.listCardReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListCard: () => {
      dispatch(actLisCardApi());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItemSanPham);
