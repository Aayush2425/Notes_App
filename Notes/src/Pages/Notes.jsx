// import { useEffect, useState } from "react";
// import Add from "../Components/Notes_Components/Add";
// import FullContent from "../Components/Notes_Components/FullContent";
// import NoteApp from "../Components/Notes_Components/NoteApp";
// import Loading from "../Components/Notes_Components/Loading";
// // import Header from "../Components/Notes_Components/Header";
// import Layout from "../Components/Dashboard Components/Layout";
// import { useParams } from "react-router-dom";
// const Notes = () => {
//   const [notes, setNotes] = useState([]);
//   const [fullContentIndex, setFullContentIndex] = useState(null);
//   // const [previousNotes, setPreviousNotes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();
//   const [Name, Username] = useState("");
//   const [email, setEmail] = useState("");
//   useEffect(() => {
//     fetch("http://localhost:4000/Notes/" + id)
//       .then((res) => res.json())
//       .then((res) => {
//         Username(res.name);
//         setEmail(res.email);
//         setNotes(res.Notes);
//         setLoading(false);
//       });
//   }, []);

//   // console.log(notes);
//   const onHandelAddNote = (content) => {
//     setNotes([...notes, content]);
//   };
//   const handleShowFullContent = (index) => {
//     setFullContentIndex(index);
//   };

//   return (
//     <>
//       {loading && <Loading />}
//       <div className="flex">
//         <Layout Name={Name} email={email} id={id} />

//         <div className="mt-10">
//           <Add onAddNote={onHandelAddNote} />

//           <NoteApp
//             notes={notes}
//             setNotes={setNotes}
//             showContent={handleShowFullContent}
//           />
//           {fullContentIndex !== null && (
//             <FullContent
//               content={notes[fullContentIndex].content}
//               setShowContent={() => setFullContentIndex(null)}
//             />
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Notes;

import { useEffect, useState } from "react";
import Add from "../Components/Notes_Components/Add";
import FullContent from "../Components/Notes_Components/FullContent";
import NoteApp from "../Components/Notes_Components/NoteApp";
import Loading from "../Components/Notes_Components/Loading";
import Layout from "../Components/Dashboard Components/Layout";
import { useParams } from "react-router-dom";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [fullContentIndex, setFullContentIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [Name, Username] = useState("");
  const [email, setEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/Notes/" + id)
      .then((res) => res.json())
      .then((res) => {
        setNotes(res.Notes.reverse());
        Username(res.name);
        setEmail(res.email);
        setLoading(false);
      });
  }, [id]);

  const handleAddNote = (content) => {
    setNotes([content, ...notes]);
  };

  const handleShowFullContent = (index) => {
    setFullContentIndex(index);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  const handleFilter = (filterTerm) => {
    setFilterTerm(filterTerm);
    if (filterTerm === "date created") {
      setNotes(
        notes
          .slice()
          .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
      // console.log(notes);
    } else if (filterTerm === "title") {
      setNotes(
        notes.sort((a, b) => {
          let x = a.title.toLowerCase();
          let y = b.title.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        })
      );
      // console.log("title", notes);
    }
  };
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div className="overflow-hidden">
      {loading && <Loading />}
      <div className="flex">
        <Layout Name={Name} email={email} id={id} />

        <div className="mt-10 overflow-hidden">
          <Add
            onAddNote={handleAddNote}
            onSearch={handleSearch}
            onFilter={handleFilter}
          />
          <NoteApp
            notes={filteredNotes}
            setNotes={setNotes}
            showContent={handleShowFullContent}
          />
          {fullContentIndex !== null && (
            <FullContent
              content={notes[fullContentIndex].content}
              title={notes[fullContentIndex].title}
              color={notes[fullContentIndex].color}
              setShowContent={() => setFullContentIndex(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;
