import { Fragment, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import {Prompt} from 'react-router-dom';

const ContactUs = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pNumber,setPnumber] = useState('');
    const [isFocus,setIsFocus] = useState(false);

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const numberChangeHandler = (event) => {
        setPnumber(event.target.value);
    }

    const submitHandler = async(event) => {
        event.preventDefault();
        const data = {
            name: {name},
            email: {email},
            phone_number: {pNumber}
        }
        const response = await fetch('https://react-http-b29b9-default-rtdb.firebaseio.com/contacts.json',{
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type':'application/json'
            }
        })

        setEmail('');
        setName('');
        setPnumber('');

        console.log(response);
    }

    const onFocusHandler = () => {
      setIsFocus(true);
    }

  return (
    <Fragment>
      <Prompt when={isFocus} message = {() => 'Are You Sure'}></Prompt>
    <Container style={{ backgroundColor: "lightblue", marginBottom: '50px' }}>
      <Form onFocus={onFocusHandler} onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name: </Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={nameChangeHandler} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address: </Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={emailChangeHandler}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhNumber">
          <Form.Label>Phone number: </Form.Label>
          <Form.Control type="number" placeholder="Ph number" value={pNumber} onChange={numberChangeHandler}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </Fragment>
  );
};

export default ContactUs;
