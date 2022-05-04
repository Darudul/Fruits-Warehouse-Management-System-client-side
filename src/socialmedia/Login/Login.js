import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate("/signup");
  };
  return (
    <div>
      <h3 className="text-center mt-5 text-warning">Please login</h3>
      <Form className="w-25 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-success h5">Email address:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-success h5">Password: </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <button onClick={navigateToSignup} className="bg-white border-0 mb-3">
          If user is new?{" "}
          <span className="text-warning ">Please signup first!!</span>
        </button>{" "}
        <br />
        <Button
          className="bg-success text-white border-0 rounded-pill px-4 h6 py-2"
          type="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
