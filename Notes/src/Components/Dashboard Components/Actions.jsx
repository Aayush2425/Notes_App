import { useState } from "react";
import { useParams } from "react-router-dom";

const Actions = ({
  index,
  block,
  setBlock,
  setEditChoice,
  editContent,
  setEditingIndex,
  onBlurCapture,
}) => {
  const { id } = useParams();
  const Commands = [
    { type: "Update", name: "Update" },
    { type: "Delete", name: "Delete" },
    { type: "Color", name: "Color" },
    { type: "Add Below", name: "Add Below" },
    { type: "Add Above", name: "Add Above" },
  ];
  // const [editingIndex, setEditingIndex] = useState(null);
  const handleAction = (type) => {
    // You can perform actions based on the command type
    // For now, let's just log the type to the console
    console.log(`Performing action: ${type + " " + index}`);

    if (type === "Delete") {
      const updatedBlock = block.filter((_, i) => i !== index);
      setBlock(updatedBlock);
      fetch("http://localhost:4000/dashboard/" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ index: index }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    } else if (type === "Update") {
      setEditChoice((prev) => !prev);
      setEditingIndex(index);
      console.log(onBlurCapture);
      if (onBlurCapture == true) {
        console.log("HELLO");
        setBlock((prev) => {
          const updatedBlock = prev.map((block, i) =>
            i === index ? { ...block, content: "Updated" } : block
          );
          return updatedBlock;
        });
        fetch("http://localhost:4000/dashboard/" + id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: editContent,
            index: index,
          }),
        })
          .then((res) => res.json())
          .then((res) => console.log(res));
      }
    }
  };
  const action = Commands.map((command, index) => {
    return (
      <div
        className="h-14 text-white p-2 cursor-pointer hover:rounded-sm hover:bg-gray-800"
        key={command.type}
        onClick={() => handleAction(command.type)}
      >
        <div>
          {command.name}
          <p className=" text-[.75rem] leading-3 opacity-30">
            {command.detail}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="w-56 h-[300px] overflow-auto text-white rounded-md bg-gray-700 p-2">
      {action}
    </div>
  );
};

export default Actions;
