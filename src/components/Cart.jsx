import React, { useContext } from "react";

import { currencyFormatter } from "../utility/formatting";

import Modal from "./UI/Modal";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/userProgressContext";

function Cart() {
  const cartCt = useContext(CartContext);
  const userProgressCt = useContext(UserProgressContext);

  const cartTotal = cartCt.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

  function handleCloseModal() {
    console.log("close modal");
    userProgressCt.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCt.progress === "cart"}>
      <h2>your cart</h2>
      <ul>
        {cartCt.items.map((item) => {
          return (
            <li key={item.id}>
              {item.name} - {item.quantity}
            </li>
          );
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseModal} textOnly>
          Close
        </Button>
        <Button>Go to CheckOut</Button>
      </p>
    </Modal>
  );
}

export default Cart;
