import { useState } from "react";
import Add from "../Components/Add";
import FullContent from "../Components/FullContent";
import NoteApp from "../Components/NoteApp";
import Rough from "../Components/rough"
import Header from "../Components/Header";
const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [fullContentIndex, setFullContentIndex] = useState(null);
  
  const onHandelAddNote = (content) => {
    setNotes([...notes,content])
  }
  const handleShowFullContent = (index) => {
    setFullContentIndex(index);
  };

  return (
    <>
      <Header/>
    <div>
      <Add onAddNote={onHandelAddNote} />

      <NoteApp
        notes={notes}
        setNotes={setNotes}
        showContent={handleShowFullContent}
      />
      {fullContentIndex !== null && (
        <FullContent
          content={notes[fullContentIndex].content}
          setShowContent={() => setFullContentIndex(null)} />
      )}
    </div>
    </>
    )
}

export default Notes