import React, { useContext } from "react";

import { currencyFormatter } from "../utility/formatting";

import Modal from "./UI/Modal";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

function Cart() {
  const cartCt = useContext(CartContext);
  const userProgressCt = useContext(UserProgressContext);

  const cartTotal = cartCt.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

  function handleCloseModal() {
    userProgressCt.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCt.progress === "cart"}>
      <h2>your cart</h2>
      <ul>
        {cartCt.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={() => {
                cartCt.addItem(item);
              }}
              onDecrease={() => {
                cartCt.removeItem(item.id);
              }}
            />
          );
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseModal} textOnly>
          Close
        </Button>
        {cartCt.items.length > 0 && <Button>Go to CheckOut</Button>}
      </p>
    </Modal>
  );
}

export default Cart;
