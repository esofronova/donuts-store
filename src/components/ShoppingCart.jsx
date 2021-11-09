export default function ShoppingCart() {

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
    <>
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
    </>
  );
};