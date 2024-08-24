import React, { useContext } from "react";

import { currencyFormatter } from "../utility/formatting";

import Error from "./Error";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import useHttp from "../hooks/useHttp";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

function CheckOut() {
  const cartCt = useContext(CartContext);
  const cartTotal = cartCt.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

  const { data, loading: sending, error, sendRequest } = useHttp("http://localhost:3000/orders/", requestConfig);

  const userProgressCt = useContext(UserProgressContext);
  function handleCloseModal() {
    userProgressCt.hideCheckOut();
  }
  function handelSubmitForm(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCt.items,
          customer: customerData,
        },
      })
    );
  }

  let actions = (
    <>
      <Button type="button" onClick={handleCloseModal} textOnly>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (sending) {
    actions = <span>Sending order data</span>;
  }

  return (
    <Modal open={userProgressCt.progress === "checkOut"}>
      <form onSubmit={handelSubmitForm}>
        <h2>form checkOut</h2>
        <p>Total Amount : {currencyFormatter.format(cartTotal)}</p>
        <Input id={"name"} label={"Full Name"} type={"text"} />
        <Input id={"email"} label={"Email Address"} type={"email"} />
        <Input id={"street"} label={"Street"} type={"text"} />
        <div className="control-row">
          <Input id={"postal-code"} label={"Postal Code"} type={"text"} />
          <Input id={"city"} label={"City"} type={"text"} />
        </div>

        {error && <Error title={"Failed To Submit Error"} message={error} />}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}

export default CheckOut;
