import Color from "./Color";
import { useState } from "react";
const Add = ({onAddNote}) => {
    const [showTextarea, setShowTextarea] = useState(false);
    const [textareaContent, setTextareaContent] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [showColorOptions, setShowColorOptions] = useState(false);
    
    const handelShowTextArea = () => {
    setShowTextarea((prevShowTextarea) => !prevShowTextarea);
    }
    const handelTextAreaContent = (e) => {
        setTextareaContent(e.target.value);
    }
    const handleColorButtonClick = () => {
    setShowColorOptions((prevShowColorOptions) => !prevShowColorOptions);
    };

    const handleColorSelect = (color) => {
    setSelectedColor(color);
    setShowColorOptions(false);  
    };

    const handleAddNote = () => {
    onAddNote({ content: textareaContent, color: selectedColor });
    setTextareaContent("");
    setSelectedColor("");
    setShowTextarea(false);
    };
    return (
        <div>
            <div className="flex justify-start">
                <div
                    className="border border-purple-800 bg-purple-600 rounded-full w-11 h-11 ml-24 mt-12 text-3xl hover:rotate-90 duration-1000 cursor-pointer text-center"
                    onClick={handelShowTextArea}>
                    +
                </div>
            

            {showTextarea && (
                <div className="absolute top-20 left-20 w-96">
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className={`border border-black p-2 ${selectedColor} resize-none `}
                            style={{ backgroundColor: "white" }}
                            value={textareaContent}
                            onChange={handelTextAreaContent}
                        />
                
                <div className="flex ml-[120px]">
                            <button className="p-2 w-16 bg-sky-400 rounded"
                            onClick={handleAddNote}>
                        Add
                    </button>
                            <button className="p-2 w-16 ml-3 bg-green-500 rounded"
                            onClick={handleColorButtonClick}>
                        Color
                    </button>
                </div>
                {showColorOptions && <Color onSelectColor={handleColorSelect} />}
            </div>
                )}
            </div>
      </div>
  )
}

export default Add