import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
export const Oauth = () => {
  const nav = useNavigate();
  const handelGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await fetch("http://localhost:4000/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
        }),
      })
        .then((res) => res.json())
        .then((res) => nav("/notes/" + res._id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      type="button"
      className="rounded bg-black text-white hover:bg-gray-900 p-2 flex justify-center  duration-500 text-xl w-72 "
      onClick={handelGoogleClick}
    >
      Continue with <FcGoogle className="ml-2 mt-1" />
    </button>
  );
};
