import React from "react";
import { GrClose } from "react-icons/gr";

export default function FullContent({ content, setShowContent }) {
  return (
    <div className="border border-gray-400 rounded-md w-[500px] h-[400px] p-6 ml-[600px] absolute top-56 bg-white overflow-auto">
      <GrClose className="cursor-pointer fixed" onClick={setShowContent} />
      <div className="mt-6">{content}</div>
    </div>
  );
}
