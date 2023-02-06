import { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import CartContext from "../../context/cart-context";
import './MyNavbar.css';
import {NavLink} from "react-router-dom";

const MyNavbar = (props) => {

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

    return(
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-Commerce App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className='nav-link' to='/home'>Home</NavLink>
              <NavLink className='nav-link' to='/store'>Store</NavLink>
              <NavLink className='nav-link' to='/aboutUs'>About</NavLink>
              <NavLink className='nav-link' to='/contactUs'>Contact Us</NavLink>
            </Nav>
          </Navbar.Collapse>
          <Button variant="light" onClick={props.onShow}>Cart<span>{" " + numberOfCartItems}</span></Button>
        </Container>
      </Navbar>
    )
}

export default MyNavbar;