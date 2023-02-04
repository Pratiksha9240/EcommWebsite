import { Carousel, Card, Button } from "react-bootstrap";
import colors from "../assets/colors.jpg";
import blackwhite from "../assets/blackAndwhite.jpg";
import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <h1>This is About us Page</h1>
      <Carousel>
        <Carousel.Item interval={10000}>
          <Card style={{ width: "18rem", height: "380px" }}>
            <Card.Img variant="top" src={colors} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <Card style={{ width: "18rem", height: "380px" }}>
            <Card.Img variant="top" src={colors} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <Card style={{ width: "18rem", height: "380px" }}>
            <Card.Img variant="top" src={blackwhite} height="180px" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default AboutUs;
