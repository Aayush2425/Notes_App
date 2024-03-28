import { useState } from "react";
import { HiChevronUpDown } from "react-icons/hi2";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useNavigate, Link, useParams } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { LuInbox } from "react-icons/lu";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";
const Layout = ({ Name, id, email }) => {
  const [showButton, setShowButton] = useState(false);
  const [showTooltip, setTooltip] = useState(false);
  const [showProdile, setShowProfile] = useState(false);
  // const { id } = useParams();
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setShowButton(true);
    // console.log(showButton);
  };
  const handleMouseExit = () => {
    setShowButton(false);
    // console.log(showButton);
  };
  const handleTooltip = () => {
    setTooltip((prev) => !prev);
  };
  const handleShowProfile = () => {
    setShowProfile((prev) => !prev);
  };
  return (
    <div className="">
      {/* side bar  */}
      <div
        className=" mt-2 border-r border-gray-200 lg:w-80 bg-[rgba(251,251,250,1)] h-[100vh] md:w-64 sm:w-56"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
      >
        {/* name initial */}
        <div
          className={`lg:mr-3 lg:p-3 sm:mx-1 sm:p-0.5  md:mx-2.5 md:p-2.5 hover:bg-gray-200 rounded-md flex justify-start  hover:cursor-pointer`}
          onClick={handleShowProfile}
        >
          <span className="bg-gray-300  text-gray-500 px-1 text-sm text-center py-.5 rounded-md">
            {Name.toUpperCase().charAt(0)}
          </span>
          <span className=" flex justify-start px-2 py-.5 text-sm font-semibold">
            {Name.toUpperCase() + "`s workspace"}
            <HiChevronUpDown className="text-lg text-gray-500" />
          </span>
          {/* {showButton && (
            <>
              <MdKeyboardDoubleArrowLeft
                className="text-2xl text-gray-400 hover:bg-gray-300 hover:rounded-md"
                onMouseEnter={handleTooltip}
                onMouseLeave={handleTooltip}
              />
              {showTooltip && (
                <div className="fixed z-20 top-12 lg:left-52  md:left:52 sm:left-32 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
                  close sidebar
                </div>
              )}
            </>
          )} */}
        </div>

        {/* whole profile options */}
        {showProdile && (
          <div className="bg-[rgba(251,251,250,1)] shadow-md border rounded-md lg:mx-5 md:mx-2.5 lg:p-2 md:p-1">
            <div className="text-xs px-1">{email}</div>
            <div
              className={`lg:mr-3 lg:p-3 sm:mx-1 sm:p-0.5  md:mx-2.5 md:p-2.5  rounded-md flex justify-start `}
            >
              <span className="bg-gray-300  text-gray-500 px-2 text-md text-center py-1.5 rounded-md ">
                {Name.toUpperCase().charAt(0)}
              </span>

              <div>{/* other workspases if assigned */}</div>
            </div>

            <div className="border"></div>
            <div className="text-gray-400 text-sm hover:bg-gray-300 p-2 m-1 rounded-md cursor-pointer">
              Create work account
            </div>
            <div className="text-gray-400 text-sm hover:bg-gray-300 p-2 m-1 rounded-md cursor-pointer">
              Add another account
            </div>
            <div
              className="text-gray-400 text-sm hover:bg-gray-300 p-2 m-1 rounded-md cursor-pointer"
              onClick={() => {
                localStorage.removeItem("key");
                navigate("/");
              }}
            >
              Log out
            </div>
          </div>
        )}

        <Link to={`/dashboard/${id}`}>
          <div className="text-gray-400 text-lg hover:bg-gray-300 px-4 py-1 rounded-md cursor-pointer flex justify-start">
            <LuLayoutDashboard className="text-2xl pt-1 " />
            Dashboard
          </div>
        </Link>

        <Link to={`/notes/${id}`}>
          <div className="text-gray-400 text-lg hover:bg-gray-300 px-4 py-1 rounded-md cursor-pointer flex justify-start">
            <FaRegNoteSticky className="text-2xl pt-1 " />
            Notes
          </div>
        </Link>
        {/* <div className="text-gray-400 text-lg hover:bg-gray-300 px-4 py-1 rounded-md cursor-pointer flex justify-start">
          <MdSearch className="text-2xl pt-1 " />
          Search
        </div> */}
      </div>
    </div>
  );
};

export default Layout;
