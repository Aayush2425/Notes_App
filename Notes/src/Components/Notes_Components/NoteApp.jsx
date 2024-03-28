// import React, { useState } from "react";
// import "./NotesApp.css";
// import Color from "./Color";
// import {
//   AiOutlineDelete,
//   AiOutlineEdit,
//   AiOutlineArrowUp,
// } from "react-icons/ai";
// import { useParams } from "react-router-dom";
// import { motion, useAnimation } from "framer-motion";
// import Background from "../framerComponents/background";

// export default function Notes({ notes, setNotes, showContent }) {
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editContent, setEditContent] = useState("");
//   const [editChoice, setEditChoice] = useState(false);
//   const [selectedColor, setSelectedColor] = useState("");
//   const [showColorOptions, setShowColorOptions] = useState(false);
//   const { id } = useParams();
//   const controls = useAnimation();

//   const handleMouseEnter = () => {
//     controls.start({ scale: 1.1 });
//   };

//   const handleMouseLeave = () => {
//     controls.start({ scale: 1 });
//   };
//   const handleDeleteNote = (index) => {
//     const updatedNotes = notes.filter((_, i) => i !== index);

//     setNotes(updatedNotes);

//     fetch("http://localhost:4000/Notes/" + id, {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ index: index }),
//     })
//       .then((res) => res.json())
//       .then((res) => console.log(res));
//   };

//   const handleEditNote = (index, content) => {
//     setEditChoice((prev) => !prev);
//     setEditingIndex(index);
//     setEditContent(content);
//   };
//   const handleColorButtonClick = () => {
//     setShowColorOptions((prevShowColorOptions) => !prevShowColorOptions);
//   };

//   const handleColorSelect = (color) => {
//     setSelectedColor(color);
//     setShowColorOptions(false);
//   };
//   const handleUpdateNote = (index) => {
//     if (editContent.trim() !== "") {
//       const updatedNotes = notes.map((note, i) =>
//         i === index
//           ? {
//               ...note,
//               content: editContent,
//               color: selectedColor ? selectedColor : note.color,
//             }
//           : note
//       );
//       setNotes(updatedNotes);

//       fetch("http://localhost:4000/Notes/" + id, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           title: notes[index].title,
//           content: editContent,
//           index: index,
//           color: selectedColor ? selectedColor : notes[index].color,
//         }),
//       })
//         .then((res) => res.json())
//         .then((res) => console.log(res));

//       setEditingIndex(null);
//       setEditContent("");
//     }
//   };
//   return (
//     <div className="w-full mt-10 grid grid-flow-col">
//       <div className="flex flex-wrap justify-center p-5">
//         {notes.map((note, index) => (
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -100 }}
//             whileHover={{
//               scale: 1.1,
//               boxShadow: "0 4px 8px rgba(255,255,255, 0.1)",
//             }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className={`${note.color} m-4 rounded-md `}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div
//               key={index}
//               className={`w-[320px] h-[250px] py-2 px-5 box m-2 shadow-md rounded ${note.color}`}
//               style={{ backgroundColor: selectedColor }}
//             >
//               <div className="flex justify-between">
//                 <h1 className="text-2xl font-bold">{note.title}</h1>
//                 <div className="flex">
//                   <AiOutlineEdit
//                     className="mt-2 mr-2 text-xl cursor-pointer"
//                     onClick={() => handleEditNote(index, note.content)}
//                   />
//                   <AiOutlineDelete
//                     className="mr-2 mt-2 text-xl cursor-pointer"
//                     onClick={() => handleDeleteNote(index)}
//                   />
//                 </div>
//               </div>

//               {editChoice && editingIndex === index ? (
//                 <div>
//                   <textarea
//                     value={editContent}
//                     className="p-2 ml-2 mt-2 resize-none"
//                     onChange={(e) => setEditContent(e.target.value)}
//                     rows={5}
//                     cols={30}
//                   />
//                   <button
//                     className="p-2 w-16  bg-green-500 rounded"
//                     onClick={handleColorButtonClick}
//                   >
//                     Color
//                   </button>
//                   <button
//                     onClick={() => handleUpdateNote(index)}
//                     className="bg-sky-500 p-2 rounded mt-2 ml-2"
//                   >
//                     Update
//                   </button>
//                   <div className="w-[380px] scale-[.6] pr-2">
//                     {showColorOptions && (
//                       <Color onSelectColor={handleColorSelect} />
//                     )}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="relative">
//                   <div
//                     style={{
//                       maxHeight: "150px",

//                       overflow: "hidden",
//                       fontWeight: note.bold ? "bold" : "normal",
//                       fontStyle: note.italics ? "italic" : "normal",
//                       textDecoration: note.underline ? "underline" : "none",
//                     }}
//                   >
//                     {note.content.split("\n").map((line, index) => (
//                       <div key={index}>{line}</div>
//                     ))}
//                   </div>
//                   {note.content.length > 500 && (
//                     <div
//                       className="absolute right-2  cursor-pointer"
//                       onClick={() => showContent(index)}
//                     >
//                       <AiOutlineArrowUp className="text-2xl mt-4" />
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import "./NotesApp.css";
import Color from "./Color";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineLock,
  AiOutlineUnlock,
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
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [password, setPassword] = useState("");
  const { id } = useParams();
  // const [createdAt, setCreatedAt] = useState({
  //   day: null,
  //   month: "",
  //   year: null,
  // });
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
          ? {
              ...note,
              content: editContent,
              color: selectedColor ? selectedColor : note.color,
            }
          : note
      );
      setNotes(updatedNotes);
      const date = new Date();
      const d = date.getFullYear() + date.getMonth() + 1 + date.getDate();
      fetch("http://localhost:4000/Notes/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: notes[index].title,
          content: editContent,
          index: index,
          color: selectedColor ? selectedColor : notes[index].color,
          password: password,
          isProtected: password != "" ? true : false,
          updatedAt: new Date().toISOString(),
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));

      setEditingIndex(null);
      setEditContent("");
    }
  };
  // const stringToDate = (date) => {
  //   const newDate = new Date(date);
  //   setCreatedAt({
  //     day: newDate.getDate(),
  //     month: newDate.toLocaleString("default", { month: "long" }),
  //     year: newDate.getFullYear(),
  //   });
  //   console.log(newDate);
  // };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="w-full mt-10 grid grid-flow-col">
      <div className="flex flex-wrap justify-center  p-5">
        {notes.map((note, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 4px 8px rgba(255,255,255, 0.1)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`${note.color} m-4 rounded-md cursor-pointer`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {note.isProtected ? (
              <AiOutlineLock className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl" />
            ) : (
              <div
                className={`w-[320px] h-[250px] py-2 px-5 box m-2 shadow-md rounded ${note.color}`}
                style={{ backgroundColor: selectedColor }}
              >
                <div className="flex justify-between">
                  <h1 className="text-2xl font-bold">
                    {note.title}

                    <span className="text-xs pl-1 font-normal ">
                      {note.createdAt
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")}
                    </span>
                  </h1>

                  <div className="flex">
                    {/* <AiOutlineUnlock
                      className="mt-2 mr-2 text-xl cursor-pointer"
                      onClick={() => setShowPasswordPopup((prev) => !prev)}
                    /> */}
                    <AiOutlineEdit
                      className="mt-2 mr-2 text-xl cursor-pointer"
                      onClick={() => handleEditNote(index, note.content)}
                    />
                    <AiOutlineDelete
                      className="mr-2 mt-2 text-xl cursor-pointer"
                      onClick={() => handleDeleteNote(index)}
                    />
                  </div>
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
                  <div
                    className="relative overflow-hidden"
                    onClick={() => showContent(index)}
                  >
                    <div
                      className="py-2 px-1"
                      style={{
                        maxHeight: "150px",
                        overflowWrap: "break-word",
                        wordWrap: "break-word",
                        wordBreak: "break-word",
                      }}
                    >
                      {note.content.split("\n").map((line, index) => (
                        <div key={index}>{line}</div>
                      ))}
                    </div>
                  </div>
                )}
                {showPasswordPopup && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 p-5 rounded-md">
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="p-2 w-48"
                      value={password}
                      onChange={handlePassword}
                    />
                    <button
                      className="p-2 bg-green-500 rounded-md ml-2"
                      onClick={() => {
                        handleUpdateNote(index);
                        setShowPasswordPopup(false);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
