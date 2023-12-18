import { useState } from "react";
import Commands from "./Commands";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleH1,
  toggleH2,
  toggleH3,
  toggleTable,
  toggleTo_do,
  toggleBulleted_List,
} from "../../Redux/Features/FeatureSlice";
const Dropdown = () => {
  const dispatch = useDispatch();
  //   const { h1, h2, h3, table, to_do } = useSelector((state) => state.feature);
  const handleFeature = (e, index, val) => {
    console.log(index);
    if (index === 0) {
      dispatch(toggleH1());
    } else if (index === 1) {
      dispatch(toggleH2());
    } else if (index === 2) {
      dispatch(toggleH3());
    } else if (index === 3) {
      dispatch(toggleTable());
    } else if (index === 4) {
      dispatch(toggleTo_do());
    } else if (index === 5) {
      dispatch(toggleBulleted_List());
    }
  };
  const dropdown = Commands.map((command, index) => {
    return (
      <div
        className="h-14 text-white p-2 cursor-pointer hover:rounded-sm hover:bg-gray-800"
        key={command.type}
        onClick={(e) => handleFeature(e, index, command.type)}
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
      {dropdown}
    </div>
  );
};

export default Dropdown;
