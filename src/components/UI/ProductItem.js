import classes from "./Products.module.css";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../context/cart-context";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const ProductItem = (props) => {
  const ctx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const email = authCtx.emailId.replace(/[|&;$%@"<>.()+,]/g, "");
  // console.log(email);

  const addToCartHandler = async () => {
    ctx.addItem({
      id: props.title,
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
      amount: 1,
    });

    try {
      const response = await fetch(
        `https://crudcrud.com/api/2675dd5555d9419e80fb632e0d2c019d/${email}`,
        {
          method: "POST",
          body: JSON.stringify({
            id: props.title,
            title: props.title,
            price: props.price,
            imageUrl: props.imageUrl,
            amount: 1,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <Link to={`/store/${props.title}`}>
        <h3>{props.title}</h3>
      </Link>
      <img
        src={props.imageUrl}
        alt={props.title}
        className={classes.img}
        style={{ marginTop: "50px" }}
      />
      <div className={classes.div1}>
        <h5>
          ${props.price}
          <Button
            variant="primary"
            className={classes.button}
            onClick={() => {
              addToCartHandler();
            }}
          >
            Add to Cart
          </Button>
        </h5>
      </div>
    </>
  );
};

export default ProductItem;
