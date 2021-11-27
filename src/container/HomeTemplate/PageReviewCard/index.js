import React, { Component } from "react";
import { connect } from "react-redux";
import { actPreviewCardApi } from "./modules/action";
import ShowImageReview from "./ShowImageReview";

class PageReviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      link: "",
      card: this.props.match.params.id,
    };
  }
  componentDidMount() {
    document.title = "Space | Preview Card";
  }

  handelOnPreview = (e) => {
    e.preventDefault();
    this.props.fetchSubmit(this.props.match.params.id, this.state);
  };
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  renderHtml = () => {
    const data = this.props.previewCardReducer;
  };
  render() {
    return (
      <div className="mt-5 pt-5">
        <h1 className="text-center">PageReviewCard</h1>
        <div className="container shadow p-3 mb-5 bg-body rounded">
          <form onSubmit={this.handelOnPreview} action="#">
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form6Example1"
                    name="name"
                    onChange={this.handleOnChange}
                    className="form-control border-bottom"
                  />
                  <label className="form-label" htmlFor="form6Example1">
                    Name
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form6Example2"
                    name="title"
                    onChange={this.handleOnChange}
                    className="form-control border-bottom"
                  />
                  <label className="form-label" htmlFor="form6Example2">
                    Title
                  </label>
                </div>
              </div>
            </div>
            <div className="form-outline mb-4">
              <input
                type="text"
                id="form6Example3"
                name="link"
                onChange={this.handleOnChange}
                className="form-control border-bottom"
              />
              <label className="form-label" htmlFor="form6Example3">
                Link
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Submit
            </button>
          </form>
        </div>
        <div className="container">
          <ShowImageReview key={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.previewCardReducer.loading,
    data: state.previewCardReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubmit: (id, data) => {
      dispatch(actPreviewCardApi(id, data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageReviewCard);
