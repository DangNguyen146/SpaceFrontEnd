import React, { Component } from "react";

class CreateUserPublic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      fullname: "",
      avatars: null,
      cover: null,
      description: "",
      phones: [],
      emails: [],
      socials: [],
    };
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="pt-4 mt-5">
        <div className="container-fluid">
          <form className="py-5">
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Cover
              </label>
              <input
                className="form-control"
                type="file"
                id="formFilecover"
                name="cover"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Avatar
              </label>
              <input
                className="form-control"
                type="file"
                id="formFileavatars"
                name="avatars"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputusername" className="form-label">
                username
              </label>
              <input
                type="username"
                className="form-control"
                id="exampleInputusername"
                name="username"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputfullname" className="form-label">
                fullname
              </label>
              <input
                type="fullname"
                className="form-control"
                id="exampleInputfullname"
                name="fullname"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputdescription" className="form-label">
                description
              </label>
              <input
                type="description"
                className="form-control"
                id="exampleInputdescription"
                name="description"
                onChange={this.handleOnChange}
              />
            </div>
            {/* Tạo thêm vài component nữa để gởi lên */}

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateUserPublic;
