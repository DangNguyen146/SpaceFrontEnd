import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../../../../components/Loading";
import { actCommentDetailCardApi } from "./modules/action";
import "./comment.css";
import XuLiBinhLuan from "./XuLiBinhLuan";

class CommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
  }
  componentDidMount() {
    const { id_Card } = this.props;
    this.props.fetchCommentDetailCard(id_Card);
  }

  renderHtml = () => {
    const user = this.props.userLoginReducer;
    const { loading, data } = this.props;
    if (loading) return <Loading />;
    return (
      data &&
      data.map((item, i) => {
        return (
          <div className="col-12">
            <div className="card p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="user d-flex flex-row align-items-center">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/img/default-profile-picture.png"
                    }
                    width={30}
                    className="user-img rounded-circle mr-2"
                  />
                  <span>
                    <small className="font-weight-bold text-primary ms-3">
                      {item.creator.username}
                    </small>
                  </span>
                </div>
                <small>{item.update_date.slice(0, 19)}</small>
              </div>
              <div className="action d-flex justify-content-between mt-2 align-items-center">
                <div className="reply px-4">
                  <p className="">{item.content}</p>
                </div>
              </div>
              <div className="container">
                {user.username === item.creator.username ? (
                  <XuLiBinhLuan key={item.id} item={item} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        );
      })
    );
  };

  renderHtml2 = () => {
    const { loading2, data2 } = this.props;
    if (loading2) return <Loading />;
    return (
      data2 && (
        <div className="col-12">
          <div className="card p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="user d-flex flex-row align-items-center">
                <img
                  src={
                    process.env.PUBLIC_URL + "/img/default-profile-picture.png"
                  }
                  width={30}
                  className="user-img rounded-circle mr-2"
                />
                <span>
                  <small className="font-weight-bold text-primary ms-3">
                    {data2.creator.username}
                  </small>
                </span>
              </div>
              <small>{data2.update_date.slice(0, 19)}</small>
            </div>
            <div className="action d-flex justify-content-between mt-2 align-items-center">
              <div className="reply px-4">
                <p className="">{data2.content}</p>
              </div>
            </div>
          </div>
        </div>
      )
    );
  };
  render() {
    return (
      <div className="row">
        {this.renderHtml()}
        {this.renderHtml2()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLoginReducer: state.userLoginReducer.data,

    loading: state.viewCommentReducer.loading,
    data: state.viewCommentReducer.data,

    loading2: state.userPostCommentReducer.loading,
    data2: state.userPostCommentReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCommentDetailCard: (id) => {
      dispatch(actCommentDetailCardApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentComponent);
