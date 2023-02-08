import { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import CartContext from "../../context/cart-context";
import "./MyNavbar.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const MyNavbar = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">E-Commerce App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            {isLoggedIn && (
              <NavLink className="nav-link" to="/store">
                Store
              </NavLink>
            )}
            <NavLink className="nav-link" to="/aboutUs">
              About
            </NavLink>
            <NavLink className="nav-link" to="/contactUs">
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        {!isLoggedIn && (
          <NavLink className="nav-link" to="/login">
            <Button variant="light">
              Login
            </Button>
          </NavLink>
        )}
        {isLoggedIn && (
          <><Button variant="light" onClick={props.onShow}>
            Cart<span>{" " + numberOfCartItems}</span>
          </Button><NavLink className="nav-link" to='/login' style={{marginLeft: '20px'}}>
              <Button variant="light" onClick={authCtx.logout}>
                Logout
              </Button>
            </NavLink></>
        )}
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
