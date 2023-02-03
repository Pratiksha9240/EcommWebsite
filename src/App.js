import "./App.css";
import Products from "./components/UI/Products";
import Footer from "./components/Layout/Footer";
import MyNavbar from "./components/Layout/MyNavbar";
import SeeCartButton from "./components/Cart/SeeCartButton";
import MyCart from "./components/Cart/MyCart";
import { useState } from "react";

function App() {

  const [showCart,setShowCart] = useState(false);

  const showMyCartHandler = () => {
    setShowCart(true);
  }
  const closeMyCartHandler = () => {
    setShowCart(false);
  }

  return (
    <>
      <MyNavbar onShow = {showMyCartHandler}></MyNavbar>
      {showCart && <MyCart onClose = {closeMyCartHandler}/>}
      <h1
        style={{
          marginLeft: "600px",
          marginBottom: "100px",
          marginTop: "50px",
        }}
      >
        The Generics
      </h1>
      <Products></Products>
      <SeeCartButton/>
      <Footer></Footer>
    </>
  );
}

export default App;
