import { Navbar, Nav, Container, Button } from "react-bootstrap";
import './MyNavbar.css';

const MyNavbar = (props) => {

    return(
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-Commerce App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Store</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="light" onClick={props.onShow}>Cart</Button>
        </Container>
      </Navbar>
    )
}

export default MyNavbar;