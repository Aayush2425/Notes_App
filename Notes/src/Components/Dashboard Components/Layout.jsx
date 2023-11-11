import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
export default function Layout(props) {
  const [profile, setProfile] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const [activelink, setActiveLink] = useState({ home: false, notes: false });
  const navigate = useNavigate();
  const showProfile = () => {
    console.log("clicked");
    setProfile((prevPofile) => !prevPofile);
  };
  const handelHome = () => {
    setActiveLink({ home: true, notes: false });
  };
  const handelNotes = () => {
    setActiveLink({ notes: true, home: false });
  };

  return (
    <div className=" pt-8 grid bg-gray-900 w-full">
      <div className="text-3xl mt-2 col-start-2 h-full text-white font-bold">
        <h1>Notes</h1>
      </div>
      <div className="col-start-10 mt-4 flex justify-around text-white font-bold text-2xl">
        {activelink.home ? (
          <Link
            to={`/dashboard/${props.id}`}
            onClick={handelHome}
            className=" underline "
          >
            home
          </Link>
        ) : (
          <Link
            to={`/dashboard/${props.id}`}
            onClick={handelHome}
            className="hover:underline"
          >
            home
          </Link>
        )}
        {activelink.notes ? (
          <Link
            to={`/notes/${props.id}`}
            onClick={handelNotes}
            className=" underline"
          >
            notes
          </Link>
        ) : (
          <Link
            to={`/notes/${props.id}`}
            onClick={handelNotes}
            className="hover:underline"
          >
            notes
          </Link>
        )}
      </div>
      <div className="text-3xl col-start-11 font-bold">
        <img
          src="/profile.png"
          className=" h-20 w-25 cursor-pointer"
          onClick={showProfile}
          alt=""
        />
      </div>

      {profile && (
        <div className=" right-48 absolute h-56 w-48 rounded-md  bg-blue-500">
          <div className="flex justify-center text-2xl p-2 border-b-2 border-blue-700">
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
        <div className="absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-80 w-[560px] bg-blue-500 rounded-md backdrop-blur-3xl border-blue-700 border-2">
          <div className="flex justify-center p-5">
            <h1 className="text-3xl">Are you sure you want to Log Out ?</h1>
          </div>
          <div className="flex justify-around items-end h-60">
            <button
              className="bg-blue-600 rounded text-2xl m-2 p-2 w-60"
              onClick={() => {
                setLogOut((prevlog) => !prevlog);
              }}
            >
              No
            </button>
            <button
              className="bg-blue-600 rounded text-2xl m-2 p-2 w-60"
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
