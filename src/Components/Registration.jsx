import React, { useState } from 'react';
import { Form, Button, Alert, FormCheck } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    acceptTerms: false,
  });

  const [inputErrors, setInputErrors] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    acceptTerms: "",
  });

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    if (type === "checkbox") {
      setInputValues((prevValues) => ({ ...prevValues, [name]: checked }));
    } else {
      setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };

  const handleBlur = ({ target }) => {
    const { name, value } = target;
    if (name === "userName" && value.length < 5) {
      setInputErrors((prevError) => ({
        ...prevError,
        [name]: "Username must be at least five Characters",
      }));
    } else if (name === "firstName" && value.length === 0) {
      setInputErrors((prevError) => ({
        ...prevError,
        [name]: "First name is required",
      }));
    } else if (name === "lastName" && value.length === 0) {
      setInputErrors((prevError) => ({
        ...prevError,
        [name]: "Last name is required",
      }));
    } else if (name === "email" && !/^[^@]+@[^@]+\.[^@]+$/.test(value)) {
      setInputErrors((prevError) => ({
        ...prevError,
        [name]: "Email is invalid",
      }));
    } else if (name === "password" && value.length < 8) {
      setInputErrors((prevError) => ({
        ...prevError,
        [name]: "Password must be at least eight Characters",
      }));
    } else if (name === "gender" && value === "") {
      setInputErrors((prevError) => ({
        ...prevError,
        [name]: "Gender is required",
      }));
    } else {
      setInputErrors((prevError) => ({ ...prevError, [name]: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputValues.acceptTerms) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        acceptTerms: "You must accept the terms and conditions to proceed.",
      }));
      return;
    }

    if (
      !inputErrors.userName &&
      !inputErrors.firstName &&
      !inputErrors.lastName &&
      !inputErrors.email &&
      !inputErrors.password &&
      !inputErrors.gender &&
      inputValues.acceptTerms
    ) {
      // Navigate to login component
      navigate("/login");
    } else {
      // Display error messages
      setInputErrors({
        userName: inputValues.userName.length < 5 ? "Username must be at least five Characters" : "",
        firstName: inputValues.firstName ? "" : "First name is required",
        lastName: inputValues.lastName ? "" : "Last name is required",
        email: inputValues.email ? "" : "Email is required",
        password: inputValues.password ? "" : "Password is required",
        gender: inputValues.gender ? "" : "Gender is required",
        acceptTerms: inputValues.acceptTerms ? "" : "You must accept the terms and conditions to proceed.",
      });
    }
  };

  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
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
          <Form.Control name="firstName" value={inputValues.firstName} onChange={handleChange} onBlur={handleBlur} />
          {inputErrors.firstName && (
            <Form.Text className="text-danger">
              {inputErrors.firstName}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="lastname">
          <Form.Label>Last name</Form.Label>
          <Form.Control name="lastName" value={inputValues.lastName} onChange={handleChange} onBlur={handleBlur} />
          {inputErrors.lastName && (
            <Form.Text className="text-danger">
              {inputErrors.lastName}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" value={inputValues.email} onChange={handleChange} onBlur={handleBlur} />
          {inputErrors.email && (
            <Form.Text className="text-danger">
              {inputErrors.email}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" value={inputValues.password} onChange={handleChange} onBlur={handleBlur} />
          {inputErrors.password && (
            <Form.Text className="text-danger">
              {inputErrors.password}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label>Gender:</Form.Label>
          <Form.Select name="gender" value={inputValues.gender} onChange={handleChange} onBlur={handleBlur}>
            <option>---</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
          {inputErrors.gender && (
            <Form.Text className="text-danger">
              {inputErrors.gender}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="forBasicCheckbox">
          <Form.Check type="checkbox" name="acceptTerms" label="I agree to terms and conditions" checked={inputValues.acceptTerms} onChange={handleChange} />
          {inputErrors.acceptTerms && (
            <Form.Text className="text-danger">
              {inputErrors.acceptTerms}
            </Form.Text>
          )}
        </Form.Group>

        <Button
          id="register"
          className="btn btn-dark"
          onClick={handleSubmit}
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Registration;