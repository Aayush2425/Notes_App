import React from "react";
import { GrClose } from "react-icons/gr";

export default function FullContent({ content, title, setShowContent }) {
  return (
    <div className="flex justify-center">
      <div className="border border-gray-400 rounded-md w-[500px] h-[400px] p-6  fixed top-56 bg-white overflow-auto">
        <GrClose className="cursor-pointer" onClick={setShowContent} />
        <div>
          <h1 className="text-2xl font-bold mt-2">{title}</h1>
        </div>
        <div className="mt-4">
          {content.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
