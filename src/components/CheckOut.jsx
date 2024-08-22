import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utility/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

function CheckOut() {
  const cartCt = useContext(CartContext);
  const cartTotal = cartCt.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

  const userProgressCt = useContext(UserProgressContext);
  function handleCloseModal() {
    userProgressCt.hideCheckOut();
  }
  function handelSubmitForm() {
    userProgressCt.hideCheckOut();
  }

  return (
    <Modal open={userProgressCt.progress === "checkOut"} onClose={userProgressCt.progress === "checkOut" && handleCloseModal}>
      <form onSubmit={handelSubmitForm}>
        <h2>form checkOut</h2>
        <p>Total Amount : {currencyFormatter.format(cartTotal)}</p>
        <Input id={"full-name"} label={"Full Name"} type={"text"} />
        <Input id={"email"} label={"Email Address"} type={"email"} />
        <Input id={"street"} label={"Street"} type={"text"} />
        <div className="control-row">
          <Input id={"postal-code"} label={"Postal Code"} type={"text"} />
          <Input id={"city"} label={"City"} type={"text"} />
        </div>
        <p className="modal-actions">
          <Button type="button" onClick={handleCloseModal} textOnly>Close</Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}

export default CheckOut;
