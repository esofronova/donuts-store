import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { items, setItems } from './Store';
import './ShoppingCart.scss';
import { useState } from 'react';

export let itemsInCart, setItemsInCart, total, setTotal;

export default function ShoppingCart() {

  [itemsInCart, setItemsInCart] = useState(items.filter(item => item.isAdded ));
  let total = itemsInCart.reduce((a, b) => a += b.price, 0);

  let [cartExpanded, setCartExpanded] = useState(false);
  let [scrolled, setScrolled] = useState(false);
  let [screenSize, setScreenSize] = useState(window.innerWidth);

  window.onscroll = () => {
    setScrolled(window.scrollY > 50 ? true : false);
    setCartExpanded(false);
  };

  window.onresize = () => setScreenSize(window.innerWidth);

  return (
    <>
      <div
        className="checkout position-fixed d-flex flex-column"
        style={{ top: scrolled ? "0" : "4em" }}
      >
        <button
          className="btn hovered border border-dark blured m-3 align-self-end"
          onClick={() => setCartExpanded(!cartExpanded)}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className={"ms-2 " + (screenSize < 576 ? "d-none" : "")} 
          >{itemsInCart.length + (itemsInCart.length === 1 ? ' item' : ' items') + ' - $' + total}</span>
        </button>

        <div className={"shopping-cart p-4 bg-white " + (cartExpanded ? "" : "d-none")}>
          {itemsInCart.map((item, index) => {
            return (
              <div className="d-flex justify-content-between align-items-center mb-4" key={index}>
                <div className="centered px-4">
                  <img src={item.photo} alt="item" className="of-cover rounded-circle" style={{ width: "3.2em", height: "3.2em" }} />
                </div>
                <div className="centered px-4">
                  <span className="fw-bold">{item.name}</span>
                  <span>{'$' + item.price}</span>
                </div>
                <div className="centered px-4 fs-5 remove text-pink">
                  <FontAwesomeIcon icon={faTrash}
                    onClick={() => {
                      item.isAdded = false;
                      setItems([...items]);
                      setItemsInCart(items.filter(item => item.isAdded ));
                    }}
                  />
                </div>
              </div>
            );
          })}
          <div className="d-flex justify-content-around my-4 fs-4 fw-bold">
            <span>Total</span>
            <span>{'$' + total}</span>
          </div>
          <div className="d-flex justify-content-around">
            <button
              className="btn border border-2 border-dark w-100 me-3 fs-5 hovered p-1"
              onClick={() => {
                items.forEach((item) => { item.isAdded = false; });
                setItems([...items]);
                setItemsInCart(items.filter(item => item.isAdded ));
                setCartExpanded(false);
              }}
            >Clear Cart</button>
            <button className="btn border border-2 border-dark hovered w-100 fs-5 p-1">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};