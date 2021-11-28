import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteCommentApi, actPacthCommentApi } from "./modules/action";

class XuLiBinhLuan extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }
  handleOnDelete = (id_Comment) => {
    this.props.fetchDeleteComment(id_Comment);
  };
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleComment = (id_Comment) => {
    this.props.fetchPatchComment(this.state, id_Comment);
  };
  render() {
    const { item } = this.props;
    return (
      <>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            this.handleOnDelete(item.id);
          }}
        >
          Xóa commnet
        </button>
        <button
          className="btn btn-warning"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target={"#collapseExample" + item.id}
          aria-expanded="false"
          aria-controls={"collapseExample" + item.id}
        >
          Cập nhật
        </button>
        <div className="collapse mt-3" id={"collapseExample" + item.id}>
          <form onSubmit={this.handleComment(item.id)} action="#">
            <label htmlFor="floatingTextarea2">Cập nhật comment</label>
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
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeleteComment: (id) => {
      dispatch(actDeleteCommentApi(id));
    },
    fetchPatchComment: (content, id) => {
      dispatch(actPacthCommentApi(content, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XuLiBinhLuan);
