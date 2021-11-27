import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ListCardItem extends Component {
  render() {
    const { card, height } = this.props;
    return (
      <div className="px-2">
        <div className="card" style={{ minHeight: 350 }}>
          <Link to={"/detail/" + card.id}>
            <img
              src={card.image}
              className="card-img-top"
              style={{ height: height }}
              alt={card.name}
            />
          </Link>
          <div className="card-body">
            <Link
              className="text-decoration-none text-dark"
              to={"/detail/" + card.id}
            >
              <h5 className="card-title ">{card.name}</h5>
            </Link>
            <p className="card-text">{card.price}</p>
            <p className="card-text">{card.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
