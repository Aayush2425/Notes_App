import { useEffect, useState } from "react";
import Add from "../Components/Notes_Components/Add";
import FullContent from "../Components/Notes_Components/FullContent";
import NoteApp from "../Components/Notes_Components/NoteApp";
import Loading from "../Components/Notes_Components/Loading";
// import Header from "../Components/Notes_Components/Header";
import Layout from "../Components/Dashboard Components/Layout";
import { useParams } from "react-router-dom";
const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [fullContentIndex, setFullContentIndex] = useState(null);
  // const [previousNotes, setPreviousNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [Name, Username] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/Notes/" + id)
      .then((res) => res.json())
      .then((res) => {
        // console.log("hello = ", res);
        Username(res.name);
        setNotes(res.Notes);
        setLoading(false);
      });
  }, []);

  // console.log(notes);
  const onHandelAddNote = (content) => {
    setNotes([...notes, content]);
  };
  const handleShowFullContent = (index) => {
    setFullContentIndex(index);
  };

  return (
    <>
      {loading && <Loading />}
      <Layout Name={Name} id={id} />
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
            setShowContent={() => setFullContentIndex(null)}
          />
        )}
      </div>
    </>
  );
};

export default Notes;
