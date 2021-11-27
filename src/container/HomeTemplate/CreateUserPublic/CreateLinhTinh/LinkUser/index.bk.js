import React, { Component } from "react";
import { connect } from "react-redux";
import { arrayMove } from "react-sortable-hoc";
import List from "./List";
import { HuyLinks, TangLinks } from "./modules/action";

class LinkUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    };
  }
  addTitle = () => {
    if (document.getElementById("title").value === "") return;
    let temp = {
      title: document.getElementById("title").value,
      link: document.getElementById("linkss").value,
    };
    document.getElementById("linkss").value = "";
    document.getElementById("title").value = "";
    this.props.tangSoLuong(temp);
  };
  render() {
    const { data } = this.props;
    return (
      <>
        <div className="container my-3">
          <div>
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Thêm link
            </button>
            <div className="collapse" id="collapseExample">
              <div className="card card-body bg-white">
                <div className="container my-3">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập title"
                      aria-label="Nhập title"
                      aria-describedby="button-addon2"
                      id="title"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập link"
                      aria-label="Nhập link"
                      aria-describedby="button-addon2"
                      id="linkss"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                      onClick={() => {
                        this.addTitle();
                      }}
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Thêm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <List items={data} onSortEnd={this.onSortEnd.bind(this)} />
        {/* <button
          type="button"
          style={{ width: 50, height: 50 }}
          onClick={() => {
            let temp = {
              title: "zalo",
              link: "0817764291",
            };
            this.props.tangSoLuong(temp);
          }}
          className="btn btn-info text-white rounded-circle float-end"
        >
          +
        </button> */}
      </>
    );
  }
  onSortEnd({ oldIndex, newIndex }) {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.listLinkReducer.dangSachLink,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    giamSoLuong: (links) => {
      dispatch(HuyLinks(links));
    },
    tangSoLuong: (links) => {
      dispatch(TangLinks(links));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LinkUser);
