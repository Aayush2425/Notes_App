import React, { useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { useParams } from "react-router-dom";

export default function Notes({ notes, setNotes, showContent }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editContent, setEditContent] = useState("");
  const { id } = useParams();

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);

    setNotes(updatedNotes);
    fetch("http://localhost:4000/Notes/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const handleEditNote = (index, content) => {
    setEditingIndex(index);
    setEditContent(content);
  };

  const handleUpdateNote = (index) => {
    if (editContent.trim() !== "") {
      const updatedNotes = notes.map((note, i) =>
        i === index ? { ...note, content: editContent } : note
      );
      setNotes(updatedNotes);

      fetch("http://localhost:4000/Notes/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: editContent }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));

      setEditingIndex(null);
      setEditContent("");
    }
  };

  return (
    <div className="w-[1100px] ml-32 mt-3">
      <div className="flex flex-wrap m-3 p-5">
        {notes.map((note, index) => (
          <div
            key={index}
            className={`w-[310px] h-[250px] py-2 px-5 m-2 border border-gray-300 shadow-md rounded ${note.color}`}
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

            {editingIndex === index ? (
              <div>
                <textarea
                  value={editContent}
                  className="p-2 ml-2 mt-2 resize-none"
                  onChange={(e) => setEditContent(e.target.value)}
                  rows={5}
                  cols={30}
                />
                <button
                  onClick={() => handleUpdateNote(index)}
                  className="bg-sky-300 p-2 rounded mt-2 ml-2"
                >
                  Update
                </button>
              </div>
            ) : (
              <div className="relative">
                <div style={{ maxHeight: "150px", overflow: "hidden" }}>
                  {note.content}
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
        ))}
      </div>
    </div>
  );
}
