import { useEffect, useState } from "react";
import Add from "../Components/Add";
import FullContent from "../Components/FullContent";
import NoteApp from "../Components/NoteApp";
import Rough from "../Components/rough"
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [fullContentIndex, setFullContentIndex] = useState(null);
  const { id } = useParams();
  const [Name, Username] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/Notes/" + id)
      .then( res =>  res.json())
      .then( res => Username(res.name))
}, []);

  const onHandelAddNote = (content) => {
    setNotes([...notes,content])
  }
  const handleShowFullContent = (index) => {
    setFullContentIndex(index);
  };

  return (
    <>
      <Header Name={Name} />
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