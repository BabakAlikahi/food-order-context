import { useContext } from "react";
import Logo from "../assets/logo.jpg";
import Button from "./UI/button";
import CartContext from "../store/CartContext";

function Header() {

const cartCt=useContext(CartContext)

const totalCartCt=cartCt.items.reduce((totalNumberOfItems,item)=>{
  return totalNumberOfItems + item.quantity;
 
},0)

  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="this is logo of fast food" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly>cart({totalCartCt})</Button>
      </nav>
    </header>
  );
}

export default Header;
