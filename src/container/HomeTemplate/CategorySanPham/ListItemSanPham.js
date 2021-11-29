import React, { Component } from "react";
import { connect } from "react-redux";
import { actLisCardApi } from "../SlideSanPham/modules/action";
import ListCardItem from "../../../components/CardItem";
import Loading from "../../../components/Loading";

class ListItemSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }
  componentDidMount() {
    const { category_id } = this.props;
    this.props.fetchListCard(category_id, this.state.page);
  }

  render() {
    const renderPgtination = () => {
      const { category_id } = this.props;
      const { loading, data } = this.props;
      if (loading) return <Loading key={99999999999} />;
      if (data !== null && data.next !== null) {
        const temp = parseInt(data.next.substr(48, data.next.length));
        console.log(data.next.substr(48, data.next.length));
        if (temp === 1) {
          return (
            <>
              <li className="page-item disabled">
                <a className="page-link">Previous</a>
              </li>
              <li className="page-item disabled">
                <a className="page-link " href="#">
                  0
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item disabled">
                <a className="page-link " href="#">
                  2
                </a>
              </li>
              <li className="page-item disabled">
                <a className="page-link " href="#">
                  Next
                </a>
              </li>
            </>
          );
        } else if (temp === 2)
          return (
            <>
              <li className="page-item disabled">
                <a className="page-link">Previous</a>
              </li>
              <li className="page-item disabled">
                <a className="page-link " href="#">
                  0
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListCard(category_id, temp);
                    this.setState({ page: temp });
                  }}
                >
                  1
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListCard(category_id, 2);
                    this.setState({ page: 2 });
                  }}
                >
                  2
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListCard(category_id, 2);
                    this.setState({ page: 2 });
                  }}
                >
                  Next
                </a>
              </li>
            </>
          );
        else
          return (
            <>
              <li className="page-item disabled">
                <a
                  className="page-link"
                  onClick={() => {
                    this.props.fetchListCard(category_id, temp - 1);
                    this.setState({ page: temp - 1 });
                  }}
                >
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListCard(category_id, temp - 1);
                    this.setState({ page: temp - 1 });
                  }}
                >
                  {temp - 1}
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListCard(category_id, temp);
                    this.setState({ page: temp });
                  }}
                >
                  {temp}
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  {temp + 1}
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    this.props.fetchListCard(category_id, temp + 1);
                    this.setState({ page: temp + 1 });
                  }}
                >
                  Next
                </a>
              </li>
            </>
          );
      }
      return (
        <>
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => {
                this.props.fetchListCard(category_id, this.state.page - 1);
                this.setState({ page: this.state.page - 1 });
              }}
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link "
              href="#"
              onClick={() => {
                this.props.fetchListCard(category_id, this.state.page - 1);
                this.setState({ page: this.state.page - 1 });
              }}
            >
              {this.state.page - 1}
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a
              className="page-link"
              href="#"
              onClick={() => {
                this.props.fetchListCard(category_id, this.state.page);
                this.setState({ page: this.state.page });
              }}
            >
              {this.state.page}
            </a>
          </li>
          <li className="page-item disabled">
            <a className="page-link" href="#">
              {this.state.page + 1}
            </a>
          </li>
          <li className="page-item disabled">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </>
      );
    };
    const renderHtml = () => {
      const { loading, data } = this.props;
      if (loading) return <Loading key={9999999999} />;
      return (
        data &&
        data.results.map((item, i) => {
          return (
            <div className="col-6 col-md-3 mb-5">
              <ListCardItem key={i} card={item} height={200} />
            </div>
          );
        })
      );
    };
    return (
      <>
        {renderHtml()}
        <div className="container">
          <div className="float-end">
            <nav aria-label="...">
              <ul className="pagination">{renderPgtination()}</ul>
            </nav>
          </div>
        </div>
      </>
    );
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
    fetchListCard: (category_id, page) => {
      dispatch(actLisCardApi(category_id, page));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItemSanPham);
