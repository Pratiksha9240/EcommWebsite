import './ProductDemo.css';

const ProductDemo = (props) => {
  return (
    <div>
      <h1> {props.title}</h1>
      <img src={props.imageUrl} alt={props.title} />
      <div>${props.price}</div>
    </div>
  );
};

export default ProductDemo;
