import React, { Component } from "react";

export default class ListCardItem extends Component {
  render() {
    const { card, height } = this.props;
    return (
      <div className="px-2">
        <div className="card">
          <img
            src={card.image}
            className="card-img-top"
            style={{ height: height }}
            alt={card.subject}
          />
          <div className="card-body">
            <h5 className="card-title">{card.subject}</h5>
            <p className="card-text">Decrition</p>
          </div>
        </div>
      </div>
    );
  }
}
