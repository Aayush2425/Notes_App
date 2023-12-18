import { useState } from "react";
import { useParams } from "react-router-dom";
import { toggleH1 } from "../../Redux/Features/FeatureSlice";
import { useDispatch } from "react-redux";
// import { resetState } from "../../Redux/Features/action.js";
const Header_H1 = ({ onAddH1 }) => {
  const dispatch = useDispatch();
  const [h1Value, setH1Value] = useState({ type: "", content: "" });
  const { id } = useParams();

  const handleH1 = (e) => {
    e.preventDefault();

    setH1Value({ type: "h1", content: { data: e.target.value } });
  };
  const handleAddH1 = () => {
    if (h1Value != "") {
      fetch("http://localhost:4000/dashBoard/" + id, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(h1Value),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
    onAddH1(h1Value);
    console.log(h1Value);
    dispatch(toggleH1());
  };
  return (
    <div className="mb-3 px-5">
      <input
        className="w-full text-4xl bg-gray-900 h-16 text-white outline-none"
        type="text"
        onChange={handleH1}
        onBlurCapture={handleAddH1}
        autoFocus
        placeholder="Heading1"
      />
    </div>
  );
};

export default Header_H1;
