import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
const TextArea = () => {
  const [input, setInput] = useState("");
  const [isDropDown, setDropDown] = useState(false);
  useEffect(() => {
    if (input === "/") {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  }, [input]);
  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  return (
    <div className="w-full px-20 py-5">
      <div className="mb-3 px-5">
        <input
          className="w-full bg-gray-900 h-10 text-white text-xl outline-none"
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type '/' for commands"
        />
        {isDropDown && <Dropdown />}
      </div>
    </div>
  );
};

export default TextArea;
