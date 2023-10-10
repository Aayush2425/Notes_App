import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import { Oauth } from "../Components/Oauth";
const SignUp = () => {
  const [signUpForm, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSignedIn, setSignedIn] = useState(false);
  const navigate = useNavigate();

  const onHandelChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setForm({ ...signUpForm, [name]: value });
    console.log(signUpForm);
  };

  useEffect(() => {
    // console.log(formErrors);
    if (
      formErrors.username === "valid" &&
      formErrors.password === "valid" &&
      formErrors.email === "valid" &&
      formErrors.confirmPassword === "valid"
    ) {
      fetch("http://localhost:4000/SignUps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: signUpForm.userName,
          email: signUpForm.email,
          password: signUpForm.password,
        }),
      })
        .then(async (res) => res.json())
        .then(async (res) => {
          console.log(res.id);
          navigate("/notes/" + res.id);
        });
    }
  }, [formErrors]);

  const onSubmitSignUp = async (e) => {
    e.preventDefault();

    const response = {};
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!signUpForm.userName) {
      response.username = "Username is required!";
    } else {
      response.username = "valid";
    }

    if (!signUpForm.email) {
      response.email = "Email is required!";
    } else if (!regex.test(signUpForm.email)) {
      response.email = "This is not a valid email format!";
    } else {
      response.email = "valid";
    }

    if (!signUpForm.password) {
      response.password = "Password is required!";
    } else if (signUpForm.password < 4) {
      response.password = "Password must be more than 4 characters";
    } else if (signUpForm.password > 16) {
      response.password = "Password cannot be more than 16 characters";
    } else {
      response.password = "valid";
    }

    if (!signUpForm.confirmPassword) {
      response.confirmPassword = "Password is required!";
    } else if (signUpForm.password !== signUpForm.confirmPassword) {
      response.confirmPassword = "Passwords doesn't match! ";
    } else {
      response.confirmPassword = "valid";
    }

    setFormErrors(response);
    // console.log(formErrors);
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form
        action=""
        method="post"
        className="grid grid-flow-row bg-purple-600 w-96 rounded-md xl:scale-110 2xl:scale-125  "
      >
        <h1 className="text-2xl text-center font-medium mt-6  mb-4">
          Create new Account{" "}
        </h1>
        <div className="flex justify-center mb-4">
          <h3>Already have an Account?</h3>
          <Link
            to="/"
            className="text-purple-950 ml-2 underline hover:text-purple-900"
          >
            Sign In
          </Link>
        </div>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={signUpForm.userName}
          className=" mx-4 my-2.5 p-3 rounded-sm"
          onChange={onHandelChange}
        />
        <div className="flex justify-start pl-5 ">
          <span>{formErrors.username}</span>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signUpForm.email}
          className=" mx-4 my-2.5 p-3 rounded-sm"
          onChange={onHandelChange}
        />
        <div className="flex justify-start pl-5 ">
          <span>{formErrors.email}</span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signUpForm.password}
          className="mx-4 my-2.5 p-3 rounded-sm"
          onChange={onHandelChange}
        />
        <div className="flex justify-start pl-5">
          <span>{formErrors.password}</span>
        </div>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={signUpForm.confirmPassword}
          className="mx-4 p-3 my-2.5 rounded-sm"
          onChange={onHandelChange}
        />
        <div className="flex justify-start pl-5">
          <span>{formErrors.confirmPassword}</span>
        </div>
        <a
          href="#"
          className="flex justify-end mr-5 text-lg text-purple-950 mb-3 underline hover:text-purple-900"
        >
          Need help?
        </a>
        <div className="flex justify-center mb-5">
          <button
            className=" rounded bg-purple-500 p-2 hover:bg-purple-400 duration-500 text-xl w-72 "
            onClick={onSubmitSignUp}
          >
            Create Account
          </button>
        </div>
        <div className="flex justify-center mb-2">
          <h3>OR</h3>
        </div>
        <div className="flex justify-center mb-5">
          <Oauth />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
