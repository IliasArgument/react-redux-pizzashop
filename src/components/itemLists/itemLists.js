import React, { Component } from "react";
import "./itemLists.css";

class ItemLists extends Component {
  render() {
    const { menu, onAddToCart } = this.props;
    return (
    <div>
     
      <>
      
        <li className="menu__item" key={menu.id}>
          <div className="menu__title">{menu.title}</div>
          <img className="menu__img" src={menu.url} alt="Cesar salad"></img>
          <div className="menu__category">
            Category: <span>{menu.category}</span>
          </div>
          <div className="menu__price">
            Price: <span>{menu.price}$</span>
          </div>
          <button
            className="menu__btn"
            onClick={(e) => {
              e.preventDefault();
              onAddToCart();
            }}
          >
            Add to cart
          </button>
        </li>
      </>
      </div>
    );
  }
}

export default ItemLists;
