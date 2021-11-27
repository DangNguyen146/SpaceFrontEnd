import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../Footer";
import { fetchContactApi } from "./modules/action";
import toast, { Toaster } from "react-hot-toast";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      title: "",
      message: "",
    };
  }
  componentDidMount() {
    document.title = "Space | Đóng góp ý kiến";
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchSubmit(this.state);
  };
  renderNoti = () => {
    const { err } = this.props;
    if (err)
      return (
        <div className="alert alert-danger p-2">
          Vui lòng điền đầy đủ thông tin
        </div>
      );
  };

  render() {
    const notify = () => toast.success("Cảm ơn bạn đã đóng góp");
    return (
      <>
        <div
          className="mt-5 pt-5"
          style={{
            minHeight: "90vh",
            background: "url(" + process.env.PUBLIC_URL + "/img/736461.png)",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-center">Liên hệ</h1>
          <div className="container py-3 px-3 bg-white rounded shadow">
            <form onSubmit={this.handleSubmit} action="#">
              {/* Name input */}
              <div className="form-outline mb-4">
                <input
                  name="name"
                  onChange={this.handleOnChange}
                  type="text"
                  id="form4Example1"
                  className="form-control border-bottom rounded-0"
                />
                <label className="form-label" htmlFor="form4Example1">
                  Name
                </label>
              </div>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  name="email"
                  onChange={this.handleOnChange}
                  type="email"
                  id="form4Example2"
                  className="form-control border-bottom rounded-0"
                />
                <label className="form-label" htmlFor="form4Example2">
                  Email address
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  name="title"
                  onChange={this.handleOnChange}
                  type="text"
                  id="form4Example1"
                  className="form-control border-bottom rounded-0"
                />
                <label className="form-label" htmlFor="form4Example1">
                  Name
                </label>
              </div>
              {/* Message input */}
              <div className="form-outline mb-4">
                <textarea
                  name="message"
                  onChange={this.handleOnChange}
                  className="form-control border-bottom rounded-0"
                  id="form4Example3"
                  rows={4}
                  defaultValue={""}
                />
                <label className="form-label" htmlFor="form4Example3">
                  Message
                </label>
              </div>
              {this.renderNoti()}
              {/* Submit button */}
              <button
                type="submit"
                className="btn btn-primary btn-block mb-4"
                onClick={() => {
                  notify();
                }}
              >
                Send
              </button>
            </form>
            <Toaster />
          </div>
        </div>
        <Footer key={22222} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.userContactReducer.loading,
    err: state.userContactReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubmit: (data) => {
      dispatch(fetchContactApi(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
