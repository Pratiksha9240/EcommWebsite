import { Button } from 'react-bootstrap';
import classes from './Products.module.css';

const Products = () => {

    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png'
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]

        const productsList = productsArr.map(p => (<div className={classes.div}><h3>{p.title}</h3><img src={p.imageUrl} alt = {p.title} className={classes.img}/><div className={classes.div1}><h5>${p.price}<Button variant='primary' className={classes.button}>Add to Cart</Button></h5></div></div>));

    return(
        <ul>
            {productsList}
        </ul>
    );
}

export default Products;