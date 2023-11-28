import { useState } from "react";
import { useParams } from "react-router-dom";
import { toggleTable } from "../../Redux/Features/FeatureSlice";
import { useDispatch } from "react-redux";
const Table = ({ onAddTable }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const tabledetail = {
    type: "table",
    properties: [{ name: "col-1" }, { name: "col-2" }],
    entries: [{ "col-1": "", "col-2": "" }],
  };
  const [table, setTable] = useState(tabledetail);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  // onAddTable(table);
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handlePropertyChange = (index, e) => {
    const newProperties = [...table.properties];
    newProperties[index].name = e.target.value;
    setTable({ ...table, properties: newProperties });
  };
  const handleAddTable = () => {
    if (table != "") {
      fetch("http://localhost:4000/dashBoard/" + id, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(table),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
    onAddTable(table);
    console.log(table);
    dispatch(toggleTable());
  };
  return (
    <div className="mb-3 px-5">
      <div
        className="w-64"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <table className=" rounded-sm mx-5 my-1">
          <thead className="">
            <tr>
              {table.properties.map((property, index) => (
                <th key={property.name} className="text-white">
                  <input
                    type="text"
                    autoFocus={index === 0 ? true : false}
                    value={property.name}
                    onChange={(e) => handlePropertyChange(index, e)}
                    onBlurCapture={handleAddTable}
                    className=" rounded-sm w-32 border-gray-400 p-2 outline-none bg-gray-800"
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.entries.map((entry, index) => (
              <tr key={index}>
                {table.properties.map((property) => (
                  <td key={property.name} className="text-white">
                    <input
                      type="text"
                      className=" rounded-sm w-32 border-gray-400 p-2 outline-none bg-gray-800"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {isHovering && (
          <button className="bg-gray-800 hover:bg-gray-700 text-center backdrop-blur-md text-white text-xl pb-1 rounded-sm w-64 mx-6 transition ease-in-out duration-400">
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default Table;
