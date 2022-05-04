import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [errorpass, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigateToSignup = () => {
    navigate("/signup");
  };
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const hangdleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <h3 className="text-center mt-5 text-warning">Please login</h3>
      <Form onSubmit={hangdleLogin} className="w-25 mx-auto">
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
        <p className="text-danger h6">{error?.message}</p>
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
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
