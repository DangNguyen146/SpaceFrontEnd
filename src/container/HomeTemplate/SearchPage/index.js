import React, { Component } from "react";
import { connect } from "react-redux";
import ListCardItem from "../../../components/CardItem";
import SilderCover from "../SilderCover";
import { actSearchCardApi } from "./modules/action";

class SearchPage extends Component {
  componentDidMount() {
    document.title = "Space | Tìm kiếm sản phẩm";
    const pagram = this.props.match.params.pagram;
    this.props.fetchListSearchCard(pagram);
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
        data.results.map((item, i) => {
          return (
            <div className="col-3 mb-2">
              <ListCardItem key={i} card={item} height={150} />
            </div>
          );
        })
      );
    };
    return (
      <div className="mt-5">
        <SilderCover />
        <section>
          <h2
            className="fw-bold text-center mt-3 mb-5"
            style={{
              fontSize: "5rem",
            }}
          >
            Kết quả tìm kiếm
          </h2>
          <div className="container">
            <div className="row">{renderHtml()}</div>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.searchCardReducer.loading,
    data: state.searchCardReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListSearchCard: (pagram) => {
      dispatch(actSearchCardApi(pagram));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
