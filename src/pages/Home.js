import classes from "./Home.module.css";
import { Card, Button } from "react-bootstrap";
import home from "../assets/home.jpg";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
// import home from "../assets/home.jpg";

const Home = () => {
  return (
    <>
      <div className={classes.div}>
        Color (American English) or colour (Commonwealth English) is the visual
        perception based on the electromagnetic spectrum. Though color is not an
        inherent property of matter, color perception is related to an object's
        light absorption, reflection, emission spectra and interference. For
        most humans, color are perceived in the visible light spectrum with
        three types of cone cells (trichromacy). Other animals may have a
        different number of cone cell types or have eyes sensitive to different
        wavelength, such as bees that can distinguish ultraviolet, and thus has
        a different color sensitivity range. Animal perception of color
        originates from different light wavelength or spectral sensitivity in
        cone cell types, which is then processed by the brain.
      </div>
      <div className={classes.div1}>
        <Card style={{ width: "18rem", height: "380px" }}>
          <Card.Img variant="top" src={home} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "380px" }}>
          <Card.Img variant="top" src={home1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "380px" }}>
          <Card.Img variant="top" src={home2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "380px" }}>
          <Card.Img variant="top" src={home1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Home;
