import "./App.css";
import Products from "./components/UI/Products";
import Footer from "./components/Layout/Footer";
import MyNavbar from "./components/Layout/MyNavbar";
import SeeCartButton from "./components/Cart/SeeCartButton";
import MyCart from "./components/Cart/MyCart";
import { useState } from "react";
import { CartProvider } from "./context/cart-context";
import AboutUs from "./pages/AboutUs";
import { Route } from "react-router-dom";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showMyCartHandler = () => {
    setShowCart(true);
  };
  const closeMyCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      <MyNavbar onShow={showMyCartHandler}></MyNavbar>
      {showCart && <MyCart onClose={closeMyCartHandler} onShow={showCart} />}
      <h1
        style={{
          marginLeft: "600px",
          marginBottom: "100px",
          marginTop: "50px",
        }}
      >
        The Generics
      </h1>
      <Route path="/store">
        <Products></Products>
        <SeeCartButton onShow={showMyCartHandler} />
      </Route>
      <Route path="/aboutUs">
        <AboutUs></AboutUs>
      </Route>
      <Footer></Footer>
    </CartProvider>
  );
}

export default App;
