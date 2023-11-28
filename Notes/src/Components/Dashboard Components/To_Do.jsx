// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { toggleTo_do } from "../../Redux/Features/FeatureSlice";
// import { useDispatch } from "react-redux";
// const To_Do = ({ todo, onToggle, key }) => {
//   console.log(todo);
//   return (
//     <div className="mb-3 px-5">
//       <div className="mb-3 px-5 flex justify-start">
//         <label
//           className="relative flex items-center p-2 rounded-full cursor-pointer"
//           htmlFor="checkbox"
//           data-ripple-dark="true"
//         >
//           <input
//             type="checkbox"
//             checked={todo.completed}
//             onChange={() => onToggle(key)}
//             className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 before:bg-blue-500 hover:before:opacity-10"
//             name=""
//             id=""
//           />
//           <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-3.5 w-3.5"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               stroke="currentColor"
//               strokeWidth="1"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </div>
//         </label>
//         <input
//           className="w-full text-xl bg-gray-900 h-10 text-white outline-none"
//           type="text"
//           value={todo.text}
//           // onBlurCapture={handleAddToDo}
//           autoFocus
//           placeholder="to-do"
//         />
//       </div>
//     </div>
//   );
// };

// export default To_Do;
import React from "react";

const To_do = ({ todo, onToggle }) => {
  return (
    <div>
      <div className="mb-3 px-5 flex justify-start">
        <label
          className="relative flex items-center p-2 rounded-full cursor-pointer"
          htmlFor="checkbox"
          data-ripple-dark="true"
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 before:bg-blue-500 hover:before:opacity-10"
            name=""
            id=""
          />
          <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </label>

        <input
          value={todo.text}
          className="w-full text-xl bg-gray-900 h-10 text-white outline-none"
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        />
      </div>
    </div>
  );
};

export default To_do;
