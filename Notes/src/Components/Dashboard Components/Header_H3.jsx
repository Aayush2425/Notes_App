import { useState } from "react";
import { useParams } from "react-router-dom";
import { resetState, toggleH3 } from "../../Redux/Features/FeatureSlice";
import { useDispatch } from "react-redux";
// import { resetState } from "../../Redux/Features/action.js";
const Header_H3 = ({ onAddH3 }) => {
  const dispatch = useDispatch();
  const [h3Value, setH3Value] = useState({ type: "", content: "" });
  const { id } = useParams();

  const handleH3 = (e) => {
    e.preventDefault();

    setH3Value({ type: "h3", content: e.target.value });
    // setInput("");
  };
  const handleAddH3 = () => {
    if (h3Value != "") {
      fetch("http://localhost:4000/dashBoard/" + id, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(h3Value),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
    onAddH3(h3Value);
    console.log(h3Value);
    dispatch(toggleH3());
  };
  return (
    <div className="mb-3 px-5">
      <input
        className="w-full bg-gray-900 h-36 text-2xl text-white outline-none"
        type="text"
        onChange={handleH3}
        onBlurCapture={handleAddH3}
        autoFocus
        placeholder="Heading3"
      />
    </div>
  );
};

export default Header_H3;
