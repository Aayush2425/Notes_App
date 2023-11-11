import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const [profile, setProfile] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const navigate = useNavigate();
  const showProfile = () => {
    console.log("clicked");
    setProfile((prevPofile) => !prevPofile);
  };
  return (
    <div className=" pt-8 grid w-full">
      <div className="text-3xl col-start-2 text-white font-bold">Notes</div>
      <div className="text-3xl col-start-11 font-bold">
        <img
          src="/profile.png"
          className=" h-20 w-25 cursor-pointer"
          onClick={showProfile}
          alt=""
        />
      </div>

      {profile && (
        <div className=" right-48 absolute h-56 w-48 rounded-md  bg-gray-500">
          <div className="flex justify-center text-2xl p-2 border-b-2 border-gray-700">
            <h1>{props.Name}</h1>
          </div>
          <div className="flex justify-center text-2xl p-2">
            <button
              onClick={() => {
                setLogOut((prevlog) => !prevlog);
              }}
            >
              Log out
            </button>
          </div>
        </div>
      )}

      {logOut && (
        <div className="absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-80 w-[560px] bg-purple-500 rounded-md backdrop-blur-3xl border-purple-700 border-2">
          <div className="flex justify-center p-5">
            <h1 className="text-3xl">Are you sure you want to Log Out ?</h1>
          </div>
          <div className="flex justify-around items-end h-60">
            <button
              className="bg-purple-600 rounded text-2xl m-2 p-2 w-60"
              onClick={() => {
                setLogOut((prevlog) => !prevlog);
              }}
            >
              No
            </button>
            <button
              className="bg-purple-600 rounded text-2xl m-2 p-2 w-60"
              onClick={() => navigate("/")}
            >
              Yes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
