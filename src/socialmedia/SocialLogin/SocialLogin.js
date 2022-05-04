import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router";
import auth from "../../firebase.init";
import img from "../../images/google.png";
import Loading from "../Loading/Loading";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="d-flex align-items-center container">
        <div style={{ height: "2px" }} className="bg-success w-50"></div>
        <p className="mt-3 px-3">or</p>
        <div style={{ height: "2px" }} className="bg-success w-50"></div>
      </div>
      <div>
        <p className="text-danger h6 text-center mb-4">{error?.message}</p>
        <button
          className="border border-success bg-success p-2 text-dark bg-opacity-25 rounded-pill w-25 d-block mx-auto"
          onClick={() => signInWithGoogle()}
        >
          <img src={img} width="40px" alt="" />
          <span className="ms-4">Google sign in</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
