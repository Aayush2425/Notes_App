import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header_H1 from "./Header_H1";
import Header_H2 from "./Header_H2";
import Header_H3 from "./Header_H3";
import Table from "./Table";
import To_Do from "./To_Do";
import To_DoList from "./To_DoList";
const TextArea = () => {
  const [input, setInput] = useState("");
  const [block, setBlock] = useState([]);
  const [isDropDown, setDropDown] = useState(false);
  const { id } = useParams();
  const feature = useSelector((state) => state.feature);
  useEffect(() => {
    fetch("http://localhost:4000/dashBoard/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        setBlock(res.Block);
      });
  }, []);

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

  const handleAddBlock = (val) => {
    setBlock([...block, val]);
    setInput("");
    console.log(block, input);
  };
  const renderBlock = (block) => {
    switch (block.type) {
      case "h1":
        return (
          <div className="px-5 py-2">
            <div className="text-white text-4xl">{block.content}</div>
          </div>
        );
      case "h2":
        return (
          <div className="px-5 py-2">
            <div className="text-white text-3xl">{block.content}</div>
          </div>
        );
      case "h3":
        return (
          <div className="px-5 py-2">
            <div className="text-white text-2xl">{block.content}</div>
          </div>
        );
      case "table":
        return (
          <div className="px-5 py-2">
            <div className="text-white text-2xl">Helllo</div>
          </div>
        );
      case "to-do":
        return (
          <div className="px-5 py-2">
            <div className="text-white text-2xl">
              <div className="mb-3 px-5">
                {block.content.todos.map((todo) => (
                  <To_Do key={todo.id} todo={todo} />
                ))}
              </div>
            </div>
          </div>
        );
      default:
        break;
    }
  };
  return (
    <div className="w-full px-20 py-5">
      {block.map((blocks, index) => (
        <div key={index}>{renderBlock(blocks)}</div>
      ))}
      {feature.h1 && <Header_H1 onAddH1={handleAddBlock} />}
      {feature.h2 && <Header_H2 onAddH2={handleAddBlock} />}
      {feature.h3 && <Header_H3 onAddH3={handleAddBlock} />}
      {feature.table && <Table onAddTable={handleAddBlock} />}
      {feature.to_do && <To_DoList onAddToDo={handleAddBlock} />}

      <div className="mb-3 px-5">
        <input
          className="w-full bg-gray-900 h-10 text-white text-xl outline-none"
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type '/' for commands"
        />
        {isDropDown && !feature.h1 && <Dropdown />}
      </div>
    </div>
  );
};

export default TextArea;
