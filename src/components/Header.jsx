import { useContext } from "react";

import Button from "./UI/Button";
import Logo from "../assets/logo.jpg";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/userProgressContext";

function Header() {
  const cartCt = useContext(CartContext);
  const userProgressCt = useContext(UserProgressContext);

  const totalCartCt = cartCt.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handelShowCart() {
    userProgressCt.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="this is logo of fast food" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button onClick={handelShowCart} textOnly>
          cart({totalCartCt})
        </Button>
      </nav>
    </header>
  );
}

export default Header;
