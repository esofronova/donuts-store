import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { links, buttons, storeItems } from './data';
require('typeface-kaushan-script');

export default function DonutsStore() {

  let [items, setItems] = useState(storeItems);

  let itemsArray = [];
  let total = 0;
  items.forEach((item) => {
    if (item.isAdded === true) {
      itemsArray.push(item);
      total += item.price
    };
  });

  let [filter, setFilter] = useState('All');
  let [overlayInd, setOverlayInd] = useState(null);

  window.onscroll = () => {
    let cart = document.querySelector(".shopping-cart");
    let checkout = document.querySelector(".checkout");
    if (cart !== null && checkout !== null) {
      if (!cart.classList.contains("d-none")) { cart.classList.add("d-none") };
      if (window.pageYOffset > 1) {
        checkout.classList.add("fixed");
      } else {
        checkout.classList.remove("fixed");
      };
    };
  };

  return (
    <div className="donuts-store bg-white w-100 h-100 position-absolute">

      <nav className="navbar donuts-nav px-5 w-100 bg-white">
        <div className="logo">
          <img src="https://js-beginners.github.io/filter-project/img/logo.svg" alt="logo" />
        </div>
        <div className="links d-flex gap-3">
          {links.map((item, index) => {
            return (
              <a
                key={index}
                href={`#${item}`}
                className="btn text-pink fs-3 p-1 text-capitalize"
              >{item}</a>
            );
          })}
        </div>
        <button
          className="checkout btn hovered border border-dark blured"
          onClick={() => { document.querySelector('.shopping-cart').classList.toggle("d-none") }}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="ms-2">{itemsArray.length + (itemsArray.length === 1 ? ' item' : ' items') + ' - $' + total}</span>
        </button>
      </nav>

      <div className="shopping-cart position-fixed p-4 bg-white d-none">
        {itemsArray.map((item, index) => {
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
                    items.forEach((thing) => {
                      if (thing.name === item.name && thing.photo === item.photo && thing.price === item.price) {
                        thing.isAdded = !thing.isAdded;
                        setItems([...items]);
                      };
                    });
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
              items.forEach((item) => {
                item.isAdded = item.isAdded === true ? false : false;
              });
              setItems([...items]);
              document.querySelector('.shopping-cart').classList.toggle("d-none");
            }}
          >Clear Cart</button>
          <button className="btn border border-2 border-dark hovered w-100 fs-5 p-1">Checkout</button>
        </div>
      </div>

      <div className="body position-relative">

        <div className="welcome centered" id="home">
          <h1 className="text-white">Welcome to <b className="text-pink">Grandma's</b></h1>
          <button className="hovered fs-2 my-3 px-3 py-2 rounded text-uppercase bg-transparent">Explore</button>
        </div>

        <div className="about container d-flex py-5 bg-white" id="about">
          <div className="col-6 p-5 centered">
            <div className="w-75">
              <h1>About <b className="text-pink">Us</b></h1>
              <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis porro at dolorum! Ad!</p>
              <button className="hovered my-3 px-3 py-2 rounded text-uppercase bg-transparent">Explore</button>
            </div>
          </div>
          <div className="centered col-6 p-5">
            <div className="img-frame position-relative">
              <img src="https://js-beginners.github.io/filter-project/img/sweets-1.jpeg" alt="about" className="w-100 h-100" />
            </div>
          </div>
        </div>

        <div className="store py-5" id="store">
          <div className="container">
            <h1 className="text-center mb-5">Our <b className="text-pink">Store</b></h1>
            <div className="d-flex justify-content-center mb-4">
              {buttons.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={"hovered fs-4 py-1 px-3 rounded mx-3" + (item.slice(0, -1) === filter ? " active" : "")}
                    onClick={() => { setFilter(item === "All" ? item : item.slice(0, -1)) }}
                  >{item}</button>
                );
              })}
            </div>
            <div className="d-flex flex-wrap">
              {items.map((item, index) => {
                return (
                  <div
                    className={"col-lg-4 col-6 item overflow-hidden" + (item.name === filter || filter === "All" ? " d-block" : " d-none")}
                    key={index}
                  >
                    <div className="bg-white border m-2">
                      <div
                        className="img-container position-relative overflow-hidden"
                      >
                        <img
                          src={item.photo}
                          className="w-100 h-100"
                          alt={item.name}
                          onClick={() => { setOverlayInd(index) }}
                        />
                        <span
                          className={"cart position-absolute py-2 px-3 " + (item.isAdded === true ? "text-white" : "text-dark")}
                          onClick={() => {
                            item.isAdded = !item.isAdded;
                            setItems([...items]);
                            let cart = document.querySelector(".shopping-cart");
                            cart.classList.remove("d-none");
                            setTimeout(() => {
                              cart.classList.add("d-none");
                            }, 1500);
                          }}
                        ><FontAwesomeIcon icon={faShoppingCart} /></span>
                      </div>
                      <div className="d-flex justify-content-around p-3 fs-4">
                        <span>{item.name}</span>
                        <span>{'$' + item.price}</span>
                      </div>
                    </div>

                    <div
                      className={"position-fixed w-100 h-100 overlay centered " + (index === overlayInd ? "d-flex" : "d-none")}
                      onClick={() => { setOverlayInd(null) }}
                    >
                      <div className="w-75 position-relative" style={{ height: "80%" }}>
                        <img src={item.photo} alt={item.name} className="w-100 h-100 of-cover" />
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};