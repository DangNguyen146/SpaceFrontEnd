import React, { Component } from "react";
import { connect } from "react-redux";
import CommentComponent from "./CommentComponent/CommentComponent";
import { fetchPostCommentApi } from "./modules3/action";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "", iscommet: 0 };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleComment = (e) => {
    e.preventDefault();
    const { id_Card } = this.props;
    this.props.fetchPostComment(this.state, id_Card);
    this.setState({ content: "", iscommet: 0 });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleComment} action="#">
          <label htmlFor="floatingTextarea2">Comments</label>
          <textarea
            className="form-control w-100"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            name="content"
            onChange={this.handleOnChange}
            style={{ height: 100 }}
          />
          <button className="btn btn-success text-end mt-3">
            Gởi bình luận
          </button>
        </form>
        <div className="container mt-3">
          <CommentComponent key={123} id_Card={this.props.id_Card} />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.userLoginReducer.loading,
    err: state.userLoginReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostComment: (user, id_Card) => {
      dispatch(fetchPostCommentApi(user, id_Card));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
