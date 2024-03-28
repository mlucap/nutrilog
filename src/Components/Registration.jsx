import { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { Navigation, useNavigate } from "react-router-dom";
import LogIn from "./LogIn";
const Registration = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
  });

  const [inputErrors, setInputErrors] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleBlur = ({ target }) => {
    const { name, value } = target;
    if (name === "userName" && value.length < 5) {
      setInputErrors((prevError) => ({
        ...prevError,
        [name]: "Username must be at least five Characters",
      }));
    } else {
      setInputErrors((prevError) => ({ ...prevError, [name]: "" }));
    }
  };
  console.log(inputValues.userName);

  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <FormControl
            name="userName"
            value={inputValues.userName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {inputErrors.userName && (
            <Form.Text className="text-danger">
              {inputErrors.userName}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="firstname">
          <Form.Label>First name</Form.Label>
          <FormControl name="firstname" value={inputValues.firstName} />
        </Form.Group>

        <Form.Group controlId="lastname">
          <Form.Label>Last name</Form.Label>
          <FormControl />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <FormControl />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <FormControl />
        </Form.Group>

        <Form.Group>
          <Form.Label>Gender:</Form.Label>
          <Form.Select>
            <option>---</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="forBasicCheckbox">
          <Form.Check type="checkbox" label="I agree to terms and conditions"/>
        </Form.Group>

        <Button
          id="register"
          className="btn btn-dark"
          onClick={() => navigate("/login")}
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
