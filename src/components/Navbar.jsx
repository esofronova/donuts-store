import { Navbar, Nav } from 'react-bootstrap';
import { links } from '../data';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { itemsArray } from '../App';

export default function NavBar() {

  return (
    <Navbar expand="md" className="navbar-light donuts-nav px-5" id="navbar">
      <div className="logo">
        <img src="https://js-beginners.github.io/filter-project/img/logo.svg" alt="logo" />
      </div>
      <Navbar.Toggle aria-controls="collapsible-navbar" className="btn border-0 shadow-none" />
      <Navbar.Collapse id="collapsible-navbar" className="justify-content-end">
        <Nav>
          {links.map((item, index) => {
            return (
              <a
                key={index}
                href={`#${item}`}
                className="btn text-pink fs-3 p-1 text-capitalize mx-2 mb-3 mb-md-0"
              >{item}</a>
            );
          })}
        </Nav>
        {/* <button
            className="checkout btn hovered border border-dark blured"
            onClick={() => { document.querySelector('.shopping-cart').classList.toggle("d-none") }}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="ms-2">{itemsArray.length + (itemsArray.length === 1 ? ' item' : ' items') + ' - $' + total}</span>
          </button> */}
      </Navbar.Collapse>
    </Navbar>
  );
};