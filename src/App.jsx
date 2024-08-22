import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

import Cart from "./components/Cart";
import Meals from "./components/Meals";
import Header from "./components/Header";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <CheckOut/>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
