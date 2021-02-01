import React from 'react';
import "./itemCart.css";
import { connect } from "react-redux";
import { onDelete,onClear} from "../../actions/index";
import WithRestoService from "../../hoc";
import { Link } from "react-router-dom";
import uniqBy from "lodash/uniqBy";


const ItemCart = ({ items, onDelete, RestoService,onClear}) => {


  if (items.length === 0) {
    return (
      <div
        style={{ color: "white", textAlign: "center", fontStyle: "inherit" }}
      >
        <h1>КОРЗИНА ПУСТА...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {items.map((item, i) => {
          let { price, title, url, id, qtty } = item;

          return (
            <div key={id} className="cart__item">
              <img src={url} className="cart__item-img" alt={title}></img>
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">
                {price}$ * ({qtty})
              </div>
              <div className="cart__close" onClick={() => onDelete(id)}>
                &times;
              </div>
            </div>
          );
        })}
      </div>
      <form>
        <Link className="link" to="/modal">
          <button
            type="submit"
            className="order"
            // eslint-disable-next-line no-undef
            onClick={() => {
              RestoService.setOrder(generateOrder(items)) && onClear()
            }}
          >
            Оформить заказ
          </button>
        </Link>
      </form>
    </>
  );
};

const generateOrder = (items) => {
  const newOrder = items.map((item) => {
    return {
      id: item.id,
      qtty: item.qtty,
    };
  });
  return newOrder;
};

const mapStateToProps = (state) => {
  return {
    items: uniqBy(state.items, (o) => o.id),
    modal: state.modal,
    totalPrice: state.totalPrice,
  };
};

const mapDispatchToProps = {
  onDelete,
  onClear
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(ItemCart)
);
