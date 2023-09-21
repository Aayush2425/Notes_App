import { useState } from "react"
import { Link,Outlet, useNavigate } from "react-router-dom"
const SignUp = () => {
  const [signUpUserName, setSignUpUserName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
  const [isSignedIn, setSignedIn] = useState(false);
  const navigate = useNavigate();
  const onUserNameChange = (e) => {
    setSignUpUserName(e.target.value);
  }

  const onEmailChange = (e) => {
    setSignUpEmail(e.target.value);
  }

  const onPasswordChange = (e) => {
    setSignUpPassword(e.target.value);
  }

  const onConfirmPasswordChange = (e) => {
    setSignUpConfirmPassword(e.target.value);
  }

  const onSubmitSignUp =async (e) => {
    fetch("http://localhost:4000/SignUp",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          {
            name: signUpUserName,
            email: signUpEmail,
            password: signUpPassword
          })
      }).then(async res => res.json())
      .then(async res => {
          navigate("/Notes/"+res.id);
      }) 
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center h-[100vh]">
            <form action="" method="post" className="grid grid-flow-row bg-purple-600 w-96 rounded-md xl:scale-110 2xl:scale-125  ">
              <h1 className="text-2xl text-center font-medium mt-6  mb-4">Create new Account </h1>
              <div className="flex justify-center mb-4">
                    <h3>Already have an Account?</h3>
                    <Link to="/" className="text-purple-950 ml-2 underline hover:text-purple-900">Sign In</Link>
              </div>
              <input type="text" placeholder="Username" className=" mx-4 my-2.5 p-3 rounded-sm" onChange={onUserNameChange}/>
              <input type="email" placeholder="Email" className=" mx-4 my-2.5 p-3 rounded-sm" onChange={onEmailChange}/>
              <input type="password" placeholder="Password"   className="mx-4 my-2.5 p-3 rounded-sm" onChange={onPasswordChange}/>
              <input type="password" placeholder="Confirm password" className="mx-4 p-3 my-2.5 rounded-sm" onChange={onConfirmPasswordChange}/>
        <a href="#" className="flex justify-end mr-5 text-lg text-purple-950 mb-3 underline hover:text-purple-900">Need help?</a>
        <div className="flex justify-center mb-5">
              <button className=" rounded bg-purple-500 p-2 hover:bg-purple-400 duration-500 text-xl w-72 " onClick={onSubmitSignUp}>Create Account</button>
        </div>      
      </form>
            
        </div>
  )
}

export default SignUp