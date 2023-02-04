import classes from "./Products.module.css";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../context/cart-context";

const ProductItem = (props) => {

    const ctx = useContext(CartContext);

    const addToCartHandler = () => {
        ctx.addItem({
          id: props.title,
          title: props.title,
          price: props.price,
          imageUrl: props.imageUrl,
          amount: 1
      })
      }
  return (
    <>
      <h3>{props.title}</h3>
      <img src={props.imageUrl} alt={props.title} className={classes.img} style={{marginTop: '50px'}}/>
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