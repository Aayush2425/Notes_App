import { useParams } from "react-router-dom";
import Color from "./Color";
import { useState, useRef } from "react";
import { FaUnderline, FaItalic, FaBold } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import useDrag from "../UseDrag";
const Add = ({ onAddNote }) => {
  const { id } = useParams();
  const [showTextarea, setShowTextarea] = useState(false);
  const [textareaContent, setTextareaContent] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showColorOptions, setShowColorOptions] = useState(false);
  const [formatingOptions, setFormatingOptions] = useState({
    bold: false,
    italics: false,
    underline: false,
  });
  const draggableRef = useRef(null);

  const { position, handleMouseDown } = useDrag({
    ref: draggableRef,
  });

  const handelShowTextArea = () => {
    setShowTextarea((prevShowTextarea) => !prevShowTextarea);
  };

  const handelTextAreaContent = (e) => {
    setTextareaContent(e.target.value);
  };
  const handleColorButtonClick = () => {
    setShowColorOptions((prevShowColorOptions) => !prevShowColorOptions);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setShowColorOptions(false);
  };

  const handelBold = () => {
    let bold = !formatingOptions.bold;
    setFormatingOptions({ ...formatingOptions, bold: bold });
  };

  const handelItalics = () => {
    let italics = !formatingOptions.italics;
    setFormatingOptions({ ...formatingOptions, italics: italics });
  };

  const handelUnderline = () => {
    let underline = !formatingOptions.underline;
    setFormatingOptions({ ...formatingOptions, underline: underline });
  };
  const handleAddNote = () => {
    if (textareaContent != "") {
      fetch("http://localhost:4000/Notes/" + id, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: textareaContent,
          color: selectedColor,
          bold: formatingOptions.bold,
          italics: formatingOptions.italics,
          underline: formatingOptions.underline,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
      onAddNote({ content: textareaContent, color: selectedColor });
      setTextareaContent("");
      setSelectedColor("");
      setShowTextarea(false);
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <div
          className="border border-gray-800 bg-gray-600 rounded-full w-11 h-11  mt-12 mb-12 text-3xl hover:rotate-90 duration-700 cursor-pointer text-center hover:scale-110"
          onClick={handelShowTextArea}
        >
          +
        </div>

        {showTextarea && (
          <div
            className="absolute top-20 left-40 z-10 w-96 "
            ref={draggableRef}
            style={{
              top: position.y,
              left: position.x,
            }}
          >
            <div className="flex justify-end w-[340px] mb-2">
              <FaBold
                className={`m-0.5 text-3xl cursor-pointer p-1 text-white ${
                  formatingOptions.bold ? "bg-gray-500" : "hover:bg-gray-500"
                }  rounded-lg`}
                onClick={handelBold}
              />

              <FaItalic
                className={`m-0.5 text-3xl cursor-pointer p-1 text-white ${
                  formatingOptions.italics ? "bg-gray-500" : "hover:bg-gray-500"
                }  rounded-lg`}
                onClick={handelItalics}
              />
              <FaUnderline
                className={`m-0.5 text-3xl cursor-pointer p-1 text-white ${
                  formatingOptions.underline
                    ? "bg-gray-500"
                    : "hover:bg-gray-500"
                }  rounded-lg`}
                onClick={handelUnderline}
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className={`border ml-16 border-black p-4 ${selectedColor} resize-none`}
              style={{
                backgroundColor: { selectedColor },
                fontWeight: formatingOptions.bold ? "bold" : "normal",
                fontStyle: formatingOptions.italics ? "italic" : "normal",
                textDecoration: formatingOptions.underline
                  ? "underline"
                  : "none",
              }}
              value={textareaContent}
              onChange={handelTextAreaContent}
            />

            <div
              className="flex  justify-center  hover:cursor-move"
              onMouseDown={handleMouseDown}
            >
              <button
                className="p-2 w-16  bg-green-500 rounded"
                onClick={handleColorButtonClick}
              >
                Color
              </button>
              <button
                className="p-2 w-16 ml-3 bg-sky-400 rounded"
                onClick={handleAddNote}
              >
                Add
              </button>
            </div>
            {showColorOptions && <Color onSelectColor={handleColorSelect} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Add;
