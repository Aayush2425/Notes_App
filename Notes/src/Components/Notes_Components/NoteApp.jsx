import React, { useState } from "react";
import "./NotesApp.css";
import Color from "./Color";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { useParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import Background from "../framerComponents/background";

export default function Notes({ notes, setNotes, showContent }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [editChoice, setEditChoice] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [showColorOptions, setShowColorOptions] = useState(false);
  const { id } = useParams();
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({ scale: 1.1 });
  };

  const handleMouseLeave = () => {
    controls.start({ scale: 1 });
  };
  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);

    setNotes(updatedNotes);

    fetch("http://localhost:4000/Notes/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ index: index }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const handleEditNote = (index, content) => {
    setEditChoice((prev) => !prev);
    setEditingIndex(index);
    setEditContent(content);
  };
  const handleColorButtonClick = () => {
    setShowColorOptions((prevShowColorOptions) => !prevShowColorOptions);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setShowColorOptions(false);
  };
  const handleUpdateNote = (index) => {
    if (editContent.trim() !== "") {
      const updatedNotes = notes.map((note, i) =>
        i === index
          ? { ...note, content: editContent, color: selectedColor }
          : note
      );
      setNotes(updatedNotes);

      fetch("http://localhost:4000/Notes/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: editContent,
          index: index,
          color: selectedColor,
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));

      setEditingIndex(null);
      setEditContent("");
    }
  };

  return (
    <div className="w-full mt-3 grid grid-flow-col">
      <div className="flex flex-wrap justify-center p-5">
        {notes.map((note, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 4px 8px rgba(255,255,255, 0.1)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`${note.color} m-4 rounded-md `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              key={index}
              className={`w-[320px] h-[250px] py-2 px-5 box m-2 shadow-md rounded ${note.color}`}
              style={{ backgroundColor: selectedColor }}
            >
              <div className="flex justify-end">
                <AiOutlineEdit
                  className="mt-2 mr-2 text-xl cursor-pointer"
                  onClick={() => handleEditNote(index, note.content)}
                />
                <AiOutlineDelete
                  className="mr-2 mt-2 text-xl cursor-pointer"
                  onClick={() => handleDeleteNote(index)}
                />
              </div>

              {editChoice && editingIndex === index ? (
                <div>
                  <textarea
                    value={editContent}
                    className="p-2 ml-2 mt-2 resize-none"
                    onChange={(e) => setEditContent(e.target.value)}
                    rows={5}
                    cols={30}
                  />
                  <button
                    className="p-2 w-16  bg-green-500 rounded"
                    onClick={handleColorButtonClick}
                  >
                    Color
                  </button>
                  <button
                    onClick={() => handleUpdateNote(index)}
                    className="bg-sky-500 p-2 rounded mt-2 ml-2"
                  >
                    Update
                  </button>
                  <div className="w-[380px] scale-[.6] pr-2">
                    {showColorOptions && (
                      <Color onSelectColor={handleColorSelect} />
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <div
                    style={{
                      maxHeight: "150px",
                      overflow: "hidden",
                      fontWeight: note.bold ? "bold" : "normal",
                      fontStyle: note.italics ? "italic" : "normal",
                      textDecoration: note.underline ? "underline" : "none",
                    }}
                  >
                    {note.content.split("\n").map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>
                  {note.content.length > 500 && (
                    <div
                      className="absolute right-2  cursor-pointer"
                      onClick={() => showContent(index)}
                    >
                      <AiOutlineArrowUp className="text-2xl mt-4" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
