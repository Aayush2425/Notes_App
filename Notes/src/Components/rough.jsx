import { useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineArrowUp,
} from "react-icons/ai";
const Rough = ({ notes, setNotes, showContent }) => {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editcontent, setEditContent] = useState("");

    const handleDeleteNote = (index) => {
        const updateNotes = notes.filter((_,i) => i !== index);
        setNotes(updateNotes);
    }

     const handleEditNote = (index, content) => {
        setEditingIndex(index);
        setEditContent(content);
    }
    
    const handleUpdateNote = (index) => {
        if (editcontent.trim() !== "") {
            const updatedNotes = notes.map((note, i) =>
        i === index ? { ...note, content: editcontent } : note
      );
      setNotes(updatedNotes);
      setEditingIndex(null);
      setEditContent("");
    }
    }
    
    return (
        <div className="w-[1100px] ml-36 mt-3">
            <div className="flex flex-wrap m-3 p-5">
                {notes.map((note, index) => (
                    <div
                        key={index}
                        className={`w-[310px] h-[250px] p-2 m-2 border border-gray-300 shadow-md rounded ${note.color}`}
                    >
                        <div className="flex">
                            <AiOutlineDelete
                                className="ml-2 mt-2 text-xl cursor-pointer"
                                onClick={() => handleDeleteNote(index)}
                            />
                            <AiOutlineEdit
                                className="ml-2 mt-2 text-xl cursor-pointer"
                                onClick={() => handleEditNote(index, note.content)}
                            />
                        </div>

                        {editingIndex === null ? (
                            <div>
                                <textarea
                                    value={editcontent}
                                    className="p-2 ml-2 mt-2"
                                    onChange={(e) => setEditContent(e.target.value)}
                                    rows={5}
                                    cols={30} />
                                <button
                                    onClick={() => handleUpdateNote(index)}
                                    className=" bg-sky-400 p-2 rounded mt-2 ml-2"
                                >
                                    Update
                                </button>
                            </div>
                        ) : (
                                <div className="relative">
                                    <div className=" max-h-40 overflow-hidden">
                                        {note.content}
                                    </div>
                                    {note.content.length > 500 && (
                                        <div
                                            className="absolute right-2 cursor-pointer"
                                            onClick={()=>showContent(index)}
                                        >
                                      <AiOutlineArrowUp className="text-2xl nt-4"/>
                                        </div>
                                    )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        ) 
    }



export default Rough