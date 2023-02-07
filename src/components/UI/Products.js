import classes from "./Products.module.css";
import ProductItem from "./ProductItem";

const Products = () => {

  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];


  

  const productsList = productsArr.map((p) => (
    <div className={classes.div}>
      <ProductItem title = {p.title} price = {p.price} imageUrl = {p.imageUrl}/>
    </div>
  ));

  return <ul>{productsList}</ul>;
};

export default Products;
