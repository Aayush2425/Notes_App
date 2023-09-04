import { Link,Outlet } from "react-router-dom"
const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
            <form action="" method="post" className="grid grid-flow-row bg-purple-600 w-96 rounded-md xl:scale-125 2xl:scale-150 ">
              <h1 className="text-2xl text-center font-medium mt-6  mb-4">Create new Account </h1>
              <div className="flex justify-center mb-4">
                    <h3>Already have an Account?</h3>
                    <Link to="/" className="text-purple-950 ml-2 underline">Sign In</Link>
              </div>
              <input type="text" placeholder="Username" className=" mx-4 my-2.5 p-3 rounded-sm"/>
              <input type="email" placeholder="Email" className=" mx-4 my-2.5 p-3 rounded-sm" />
              <input type="password" placeholder="Password" id=""  className="mx-4 my-2.5 p-3 rounded-sm"/>
              <input type="password" placeholder="Confirm password" id="" className="mx-4 p-3 my-2.5 rounded-sm" />
              <a href="#" className="flex justify-end mr-5 text-lg text-purple-950 mb-3 underline">Need help?</a>
              
            </form>
            
        </div>
  )
}

export default SignUp