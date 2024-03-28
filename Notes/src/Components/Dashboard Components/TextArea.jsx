import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header_H1 from "./Header_H1";
import Header_H2 from "./Header_H2";
import Header_H3 from "./Header_H3";
import { FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import Bullet_List from "./Bullet_List";
import Actions from "./Actions";
<<<<<<< HEAD
import Todo from "./ToDo";
=======
>>>>>>> c269e20ea5eca66957d60517d89c3dfaf572b9ea
const TextArea = () => {
  const [input, setInput] = useState("");
  const [block, setBlock] = useState([]);
  const [isDropDown, setDropDown] = useState(false);
  const { id } = useParams();
  const feature = useSelector((state) => state.feature);
  const [hoveredBlocks, setHoveredBlocks] = useState([]);
  const [clickedBlocks, setClickedBlocks] = useState([]);
  const [editContent, setEditContent] = useState({ content: { data: "" } });
  const [editChoice, setEditChoice] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [onBlurCapture, setOnBlurCapture] = useState(false);
  const handleMouseOver = (index) => {
    setHoveredBlocks((prev) => [...prev, index]);
  };

  const handleMouseLeave = (index) => {
    setHoveredBlocks((prev) => prev.filter((i) => i !== index));
  };

  const handleClick = (index) => {
    setClickedBlocks((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };
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
  const renderBlock = (block, index) => {
    switch (block.type) {
      case "h1":
        return (
          <div className="px-5 flex justify-start py-2 my-2 duration-500 ">
            {hoveredBlocks.includes(index) && (
              <div
                className="flex text-gray-600 text-l rounded-md cursor-grab py-6 hover:text-gray-400 duration-500 hover:bg-gray-500 hover:rounded-md -ml-5"
                onClick={() => handleClick(index)}
              >
                <FaEllipsisVertical />
                <FaEllipsisVertical className="-ml-2.5" />
              </div>
            )}
            {editChoice ? (
              <div className="text-white">
                <input
                  type="text"
                  value={block.content.data}
                  onChange={(e) =>
                    setEditContent({ content: { data: e.target.value } })
                  }
                  onBlurCapture={setOnBlurCapture((prev) => !prev)}
                  className=" text-4xl w-full l bg-gray-900 h-16 text-white outline-none"
                />
              </div>
            ) : (
              <div className="text-white">
                <input
                  type="text"
                  value={block.content.data}
                  disabled
                  className=" text-4xl w-full l bg-gray-900 h-16 text-white outline-none"
                />
              </div>
            )}
          </div>
        );
      case "h2":
        return (
          <div className="px-5 flex justify-start py-2 my-2 duration-500 ">
            {hoveredBlocks.includes(index) && (
              <div
                className="flex text-gray-600 text-l rounded-md cursor-grab py-3 hover:text-gray-400 duration-500 hover:bg-gray-500 hover:rounded-md -ml-5"
                onClick={() => handleClick(index)}
              >
                <FaEllipsisVertical />
                <FaEllipsisVertical className="-ml-2.5" />
              </div>
            )}
            <div className="text-white text-3xl">{block.content.data}</div>
          </div>
        );
      case "h3":
        return (
          <div className="px-5 flex justify-start py-2 my-2 duration-500 ">
            {hoveredBlocks.includes(index) && (
              <div
                className="flex text-gray-600 text-l rounded-md cursor-grab py-3 hover:text-gray-400 duration-500 hover:bg-gray-500 hover:rounded-md -ml-5"
                onClick={() => handleClick(index)}
              >
                <FaEllipsisVertical />
                <FaEllipsisVertical className="-ml-2.5" />
              </div>
            )}
            <div className="text-white text-2xl">{block.content.data}</div>
          </div>
        );
      case "table":
        return (
          <div className="px-5 py-2">
            <div className="text-white text-2xl">Helllo</div>
          </div>
        );
      case "to-do":
        return <div>Hello</div>;
      case "Bullet List":
        return (
          <div className="px-5 py-2">
            <h2 className="text-3xl pb-4 text-white">
              {block.content.data.title}
            </h2>

            <hr className="w-20" />
            <ul className="text-white text-xl list-disc px-5 py-4">
              {block.content.data.list.map((list) => (
                <li>{list}</li>
              ))}
            </ul>
          </div>
        );
      default:
        break;
    }
  };
  return (
    <div>
      <div className="w-full px-20 py-5">
        {block.map((blocks, index) => (
          <div
            key={index}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {renderBlock(blocks, index)}

            {clickedBlocks.includes(index) && (
              <Actions
                index={index}
                block={block}
                setBlock={setBlock}
                setEditChoice={setEditChoice}
                editContent={editContent}
                setEditingIndex={setEditingIndex}
                onBlurCapture={onBlurCapture}
              />
            )}
          </div>
        ))}
        {feature.h1 && <Header_H1 onAddH1={handleAddBlock} />}
        {feature.h2 && <Header_H2 onAddH2={handleAddBlock} />}
        {feature.h3 && <Header_H3 onAddH3={handleAddBlock} />}
        {feature.bulleted_list && (
          <Bullet_List onAddBulletList={handleAddBlock} />
        )}
        {feature.to_do && <Todo />}

        <div className="mb-3 px-5">
          <input
            className="w-full  h-10 text-gray-500 text-xl border-none focus:border-none focus:outline-none outline-none"
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type '/' for commands"
          />
          {isDropDown && <Dropdown />}
        </div>
      </div>
    </div>
  );
};

export default TextArea;
