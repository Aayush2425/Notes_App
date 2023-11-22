import { useState } from "react";
import { useParams } from "react-router-dom";
import { resetState, toggleH2 } from "../../Redux/Features/FeatureSlice";
import { useDispatch } from "react-redux";
// import { resetState } from "../../Redux/Features/action.js";
const Header_H2 = ({ onAddH2 }) => {
  const dispatch = useDispatch();
  const [h2Value, setH2Value] = useState({ type: "", content: "" });
  const { id } = useParams();

  const handleH2 = (e) => {
    e.preventDefault();

    setH2Value({ type: "h2", content: e.target.value });
    // setInput("");
  };
  const handleAddH2 = () => {
    if (h2Value != "") {
      fetch("http://localhost:4000/dashBoard/" + id, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(h2Value),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
    onAddH2(h2Value);
    console.log(h2Value);
    dispatch(toggleH2());
  };
  return (
    <div className="mb-3 px-5">
      <input
        className="w-full text-3xl bg-gray-900 h-26 text-white outline-none"
        type="text"
        onChange={handleH2}
        onBlurCapture={handleAddH2}
        autoFocus
        placeholder="Heading2"
      />
    </div>
  );
};

export default Header_H2;
