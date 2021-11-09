import { buttons, storeItems } from '../data';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Store.scss';
import { Col, Container } from 'react-bootstrap';
import { setItemsInCart } from './ShoppingCart';

export let items, setItems;

export default function Store() {

  [items, setItems] = useState(storeItems);
  let [filter, setFilter] = useState('All');
  let [overlayInd, setOverlayInd] = useState(null);

  return (
    <>
      <div className="store py-5" id="store">
        <Container>
          <h1 className="text-center mb-5">Our <b className="text-pink">Store</b></h1>
          <div className="d-flex flex-column flex-md-row justify-content-center mb-4 px-3">
            {buttons.map((item, index) => {
              return (
                <button
                  key={index}
                  className={"hovered fs-4 py-1 px-3 rounded mx-md-3 text-dark" + (item.slice(0, -1) === filter ? " active" : "")}
                  onClick={() => { setFilter(item === "All" ? item : item.slice(0, -1)) }}
                >{item}</button>
              );
            })}
          </div>
          <div className="d-flex flex-wrap">
            {items.map((item, index) => {
              return (
                <Col xs={12} md={6} lg={4}
                  className={"item overflow-hidden p-3" + (item.name === filter || filter === "All" ? " d-block" : " d-none")}
                  key={index}
                >
                  <div className="bg-white border">
                    <div className="img-container position-relative overflow-hidden pointer" >
                      <img
                        src={item.photo}
                        className="w-100 h-100 of-cover"
                        alt={item.name}
                        onClick={() => { setOverlayInd(index) }}
                      />
                      <span
                        className={"cart position-absolute py-2 px-3 " + (item.isAdded === true ? "text-white" : "text-dark")}
                        onClick={() => {
                          item.isAdded = !item.isAdded;
                          setItems([...items]);
                          setItemsInCart(items.filter(item => item.isAdded ));
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

                </Col>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};