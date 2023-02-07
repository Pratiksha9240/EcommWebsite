import { useParams, Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ProductDemo from "../components/UI/ProductDemo";


const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <h4>{params.productId}</h4>
      <Routes>
        <Route path={'/details'} element={<ProductDemo />} />
      </Routes>
      <><Outlet></Outlet></>
    </>
  );
};

export default ProductDetail;
