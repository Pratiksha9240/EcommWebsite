import { Form, Button, Container } from "react-bootstrap";

const ContactUs = () => {

    return(
        <Container>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name: </Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address: </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone number: </Form.Label>
        <Form.Control type="number" placeholder="Ph number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    )
}

export default ContactUs;