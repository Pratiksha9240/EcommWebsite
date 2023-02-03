import "./App.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Products from "./components/UI/Products";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <>
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
          <Button variant="light">Cart</Button>
        </Container>
      </Navbar>
      <h1
        style={{
          marginLeft: "600px",
          marginBottom: "100px",
          marginTop: "50px",
        }}
      >
        The Generics
      </h1>
      <Products></Products>
      <Footer></Footer>
    </>
  );
}

export default App;
