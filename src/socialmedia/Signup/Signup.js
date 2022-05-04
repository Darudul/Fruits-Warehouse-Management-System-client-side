import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  const hangdleSignup = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
  };
  return (
    <div>
      <h3 className="text-center mt-5 text-warning">Please signup</h3>
      <Form onSubmit={hangdleSignup} className="w-25 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-success h5">Email address:</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-success h5">Password: </Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label className="text-success h5">
            Confirm Password:{" "}
          </Form.Label>
          <Form.Control
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <button onClick={navigateToLogin} className="bg-white border-0 mb-3">
          If user is signup alreay?{" "}
          <span className="text-warning ">Please Login!!</span>
        </button>{" "}
        <br />
        <Button
          className="bg-success text-white border-0 rounded-pill px-4 h6 py-2"
          type="submit"
        >
          Signup
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
