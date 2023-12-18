import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleBulleted_List } from "../../Redux/Features/FeatureSlice";
import { useParams } from "react-router-dom";

const Bullet_List = ({ onAddBulletList }) => {
  const [bulletList, setBulletList] = useState({
    title: "",
    content: [],
    value: "",
  });
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleTitleChange = (e) => {
    setBulletList((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleBulletList = (e) => {
    setBulletList((prev) => ({ ...prev, value: e.target.value }));
  };

  const addHandleBulletList = () => {
    if (bulletList.value.trim()) {
      setBulletList((prev) => ({
        ...prev,
        content: [...prev.content, prev.value],
        value: "", // Clear the input value after adding to the array
      }));
    }
  };

  const saveBulletListToDatabase = () => {
    if (
      bulletList.content &&
      bulletList.content.length > 0 &&
      bulletList.title.trim()
    ) {
      fetch("http://localhost:4000/dashBoard/" + id, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Bullet List", // Updated type

          content: {
            data: { title: bulletList.title, list: bulletList.content },
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));

      dispatch(toggleBulleted_List());
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      addHandleBulletList();
      saveBulletListToDatabase();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={bulletList.title}
        onChange={handleTitleChange}
        onBlur={saveBulletListToDatabase} // Save on title blur
      />
      <h2>{bulletList.title}</h2>
      {bulletList.content.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <input
        type="text"
        className="w-full text-2xl bg-gray-900 h-16 text-white outline-none"
        placeholder="Bullet List"
        value={bulletList.value}
        onChange={handleBulletList}
        autoFocus
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default Bullet_List;
