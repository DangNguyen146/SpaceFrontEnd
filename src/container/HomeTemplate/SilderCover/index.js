import React, { Component } from "react";

export default class SilderCover extends Component {
  render() {
    return (
      <>
        <div className="Slider">
          <div
            id="carouselControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="img-cover"
                  style={{
                    backgroundImage:
                      "url(" + process.env.PUBLIC_URL + "/img/COVER.png)",
                  }}
                ></div>
              </div>
              <div className="carousel-item">
                <div
                  className="img-cover"
                  style={{
                    backgroundImage:
                      "url(" + process.env.PUBLIC_URL + "/img/COVER.png)",
                  }}
                ></div>
              </div>
              <div className="carousel-item">
                <div
                  className="img-cover"
                  style={{
                    backgroundImage:
                      "url(" + process.env.PUBLIC_URL + "/img/COVER.png)",
                  }}
                ></div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next buttonContolHover"
              type="button"
              data-bs-target="#carouselControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </>
    );
  }
}
