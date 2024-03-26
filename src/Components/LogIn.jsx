import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import "../css/LogIn.scss";


const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErorMsg] = useState("");
  const [isValid, setiSValid] = useState(true);
  //using navigation from react route to take user to dashbord when log in credentials are valid
  const navigate = useNavigate();
  const toProfile = () => {
    if (!email.trim() || !password.trim()) {
      setErorMsg("Required field");
    } else {
      navigate("/dashboard");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setErorMsg("Required field!");
    }
    if (!password.trim()) {
      setErorMsg("Required field");
    }
  };

  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <Form className="roundedvp-4 p-sm-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="forBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter @"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
        <Form.Group className="mb-3" controlId="forBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="forBasicCheckbox">
          <Form.Check type="checkbox" label="RememberMe" />
        </Form.Group>
        <Button className="btn btn-dark" onClick={toProfile}>
          Log In
        </Button>
        <Button id="register" className="btn btn-light" onClick={() => navigate("/register")} >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default LogIn;
