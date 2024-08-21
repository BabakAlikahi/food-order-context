import Logo from "../assets/logo.jpg";
import Button from "./UI/button";

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="this is logo of fast food" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly>cart(0)</Button>
      </nav>
    </header>
  );
}

export default Header;
