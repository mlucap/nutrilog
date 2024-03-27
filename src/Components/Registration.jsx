import { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";

function Registration() {
  const [inputValues, setInputValues] = useState([
    { userName: "", userNameErr: "" },
    { firstName: "", firstNameErr: "" },
    {lastName:"", lastNameErr:""},
    {},
    {},
    {},
  ]);

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <FormControl />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>First name</Form.Label>
          <FormControl />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last name</Form.Label>
          <FormControl />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <FormControl />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <FormControl />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender</Form.Label>
          <FormControl />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Registration;
