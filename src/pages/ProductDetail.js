import { useParams } from "react-router-dom";
import ProductDemo from "../components/UI/ProductDemo";


const ProductDetail = () => {

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

  const params = useParams();

  const product = productsArr.find(p => (p.title === params.productId))
  console.log(product);

  if(!product){
    {<p>No product Found</p>}
  }

  return (
    <>
      <h1>Product Details</h1>
      <ProductDemo title={product.title} price={product.price} imageUrl={product.imageUrl}/>
      {/* <Routes>
        <Route path={'/details'} element={<ProductDemo />} />
      </Routes> */}
    </>
  );
};

export default ProductDetail;
