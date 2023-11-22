import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Oauth } from "../Components/Oauth";
const SignIn = () => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const navigate = useNavigate();
  const onEmailChange = (e) => {
    setSignInEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setSignInPassword(e.target.value);
  };

  const onSubmitSignIn = (e) => {
    fetch("http://localhost:4000/SignIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: signInEmail, password: signInPassword }),
    })
      .then(async (res) => res.json())
      .then(async (res) => {
        // console.log(res);

        navigate("/dashboard/" + res._id);
      });
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form
        action=""
        method="post"
        className="grid grid-flow-row bg-[#202e74] w-96 rounded-md xl:scale-125 2xl:scale-150"
      >
        <h1 className="text-2xl text-center font-medium mt-6  mb-4">Sign In</h1>
        <div className="flex justify-center  mb-4">
          <h3>Don't have an Account?</h3>
          <Link
            to="/SignUp"
            className=" text-cyan-500 ml-2 underline hover:text-cyan-600"
          >
            Sign Up
          </Link>
        </div>

        <input
          type="email"
          placeholder="Email"
          className=" mx-4 my-2.5 p-3 rounded-sm"
          onChange={onEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="mx-4 my-2.5 p-3 rounded-sm"
          onChange={onPasswordChange}
        />
        <a
          href="#"
          className="flex justify-end mr-5 text-lg hover:text-gray-800 mb-3 underline"
        >
          Need help?
        </a>
        <div className="flex justify-center mb-2">
          <button
            className=" rounded bg-blue-500 p-2 hover:bg-blue-400 duration-500 text-xl w-72 "
            onClick={onSubmitSignIn}
          >
            Sign In
          </button>
        </div>
        <div className="flex justify-center mb-2">
          <h3>OR</h3>
        </div>
        <div className="flex justify-center mb-5">
          <Oauth />
        </div>
      </form>
      <Outlet />
    </div>
  );
};

export default SignIn;
