import React, { useState } from "react";
import To_Do from "./To_Do";
import { useParams } from "react-router-dom";

const To_DoList = ({ onAddToDo }) => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [todoHeading, setTodoHeading] = useState("");
  const [todoBlock, setTodoBlock] = useState({ type: "", content: "" });
  const { id } = useParams();
  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAddTask = async (e) => {
    if (e.key === "Enter" && newTask.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: newTask, completed: false },
      ]);
      setTodoBlock({ type: "to-do", content: { todoHeading, todos } });
      console.log(todoBlock);
      setNewTask("");
      await fetch("http://localhost:4000/dashBoard/" + id, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todoBlock),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
    onAddToDo(todoBlock);
    console.log(todoBlock);
  };
  const onTodoHeader = (e) => {
    e.preventDefault();
    setTodoHeading(e.target.value);
  };
  return (
    <div className="mb-3 px-5">
      <div>
        <input
          className="w-full text-3xl bg-gray-900 h-16 text-white outline-none"
          type="text"
          autoFocus
          placeholder="Heading"
          onChange={onTodoHeader}
        />
      </div>
      {todos.length === 0 ? (
        <p className="text-white">
          Your todo list is empty. Add tasks to get started!
        </p>
      ) : (
        todos.map((todo) => (
          <To_Do key={todo.id} todo={todo} onToggle={handleToggle} />
        ))
      )}
      <div className="mb-3 px-5">
        <input
          type="text"
          className="w-full text-xl bg-gray-900 h-10 text-white outline-none"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleAddTask}
        />
      </div>
    </div>
  );
};

export default To_DoList;
