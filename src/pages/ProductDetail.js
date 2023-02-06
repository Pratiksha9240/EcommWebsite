import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  <>
    <h1>Product Details</h1>
    <h4>{params.productId}</h4>
  </>;
};

export default ProductDetail;
