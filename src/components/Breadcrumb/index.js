import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends Component {
  render() {
    const { text1, link1, text2, link2, text3, link3 } = this.props;
    return (
      <>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {text1 ? (
                <>
                  <li className="breadcrumb-item">
                    <Link
                      className="text-black text-decoration-none h5"
                      to={link1}
                      style={{ fontWeight: 700 }}
                    >
                      {text1}
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
              {text2 ? (
                <>
                  <li className="breadcrumb-item">
                    <Link
                      className="text-black text-decoration-none h5"
                      to={link2}
                      style={{ fontWeight: 700 }}
                    >
                      {text2}
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
              {text3 ? (
                <>
                  <li className="breadcrumb-item">
                    <Link
                      className="text-black text-decoration-none h5"
                      to={link3}
                      style={{ fontWeight: 700 }}
                    >
                      {text3}
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ol>
          </nav>
        </div>
        <div style={{ height: 1 }} className="bg-dark mt-2 mb-4"></div>
      </>
    );
  }
}

export default Breadcrumb;
