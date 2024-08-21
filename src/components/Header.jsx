import Logo from "../assets/logo.jpg";

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="this is logo of fast food" />
        <h1>React Food</h1>
      </div>
      <nav>
        <button>cart (0)</button>
      </nav>
    </header>
  );
}

export default Header;
