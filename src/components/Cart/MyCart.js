import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import CartContext from "../../context/cart-context";

const MyCart = (props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  const ctx = useContext(CartContext);

  const totalPrice = ctx.items.reduce((currNumber, item) => {
    return currNumber + item.price;
  }, 0);

  const productsList = ctx.items.map((p) => (
    <div id={p.title}>
      <h3>{p.title}</h3>
      <img src={p.imageUrl} alt={p.title} />
      <h5>${p.price}</h5>
      <Button
        variant="danger"
        onClick={() => {
          // const e = document.getElementById(`${p.title}`);
          ctx.removeItem(p.title);
        }}
      >
        Remove
      </Button>
    </div>
  ));

  return (
    <Modal show={props.onShow}>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={props.onClose}>
          <Modal.Title>My Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>{productsList}</div>
        </Modal.Body>

        <Modal.Footer>
          <div>Total Price</div>
        <div>${totalPrice}</div>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default MyCart;
