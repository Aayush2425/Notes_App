import { useParams } from "react-router-dom";
import Color from "./Color";
import { useState, useRef } from "react";
import { FaUnderline, FaItalic, FaBold } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import useDrag from "../UseDrag";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
const Add = ({ onAddNote, onSearch, onFilter }) => {
  const { id } = useParams();
  const [showTextarea, setShowTextarea] = useState(false);
  const [title, setTitle] = useState("");
  const [textareaContent, setTextareaContent] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showColorOptions, setShowColorOptions] = useState(false);
  const [recording, setRecording] = useState(false);
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  // const {
  //   transcript,
  //   resetTranscript,
  //   listening,
  //   browserSupportsSpeechRecognition,
  // } = useSpeechRecognition();
  const [formatingOptions, setFormatingOptions] = useState({
    bold: false,
    italics: false,
    underline: false,
  });
  const draggableRef = useRef(null);

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const { position, handleMouseDown } = useDrag({
    ref: draggableRef,
  });
  const handleRecording = () => {
    setRecording((prev) => !prev);
    if (!recording) {
      recognition.start();

      console.log("Dtarted");
    } else {
      recognition.onresult = (event) => {
        console.log("Speech recognition event:", event);
        const transcript = event.results[0][0].transcript;
        console.log("Transcript:", transcript);
      };
      recognition.stop();
    }
    // if (!recording) {
    //   SpeechRecognition.startListening({ continuous: true });
    // } else {
    //   SpeechRecognition.stopListening();
    //   setSearch(transcript);
    //   resetTranscript();
    // }
  };
  const handelShowTextArea = () => {
    setShowTextarea((prevShowTextarea) => !prevShowTextarea);
  };
  const handelTitle = (e) => {
    setTitle(e.target.value);
  };
  const handelTextAreaContent = (e) => {
    setTextareaContent(e.target.value);
  };
  const handleColorButtonClick = () => {
    setShowColorOptions((prevShowColorOptions) => !prevShowColorOptions);
  };
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setShowColorOptions(false);
  };
  const searchNotes = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const handelBold = () => {
    let bold = !formatingOptions.bold;
    setFormatingOptions({ ...formatingOptions, bold: bold });
  };

  const handelItalics = () => {
    let italics = !formatingOptions.italics;
    setFormatingOptions({ ...formatingOptions, italics: italics });
  };

  const handelUnderline = () => {
    let underline = !formatingOptions.underline;
    setFormatingOptions({ ...formatingOptions, underline: underline });
  };
  const handleAddNote = () => {
    if (textareaContent != "") {
      fetch("http://localhost:4000/Notes/" + id, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          content: textareaContent,
          color: selectedColor,
          bold: formatingOptions.bold,
          italics: formatingOptions.italics,
          underline: formatingOptions.underline,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("Success");
        });
      onAddNote({
        title: title,
        content: textareaContent,
        color: selectedColor,
        bold: formatingOptions.bold,
        italics: formatingOptions.italics,
        underline: formatingOptions.underline,
        createdAt: new Date().toISOString(),
      });
      setTextareaContent("");
      setSelectedColor("");
      setShowTextarea(false);
    }
  };
  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn't support speech recognition.</span>;
  // }
  return (
    <div className="">
      <div className="fixed left-[38%]">
        <div className="flex justify-between">
          <div>
            <button
              type="button"
              className="px-6 py-2.5  text-base font-medium text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  rounded-lg text-center me-2 ml-5 sm:px-5 sm:py-2"
              onClick={handelShowTextArea}
            >
              Add Note
            </button>
          </div>
          <div className=" lg:right-[5%] md:right-[2.5%]">
            <form className="flex items-center max-w-lg mx-auto">
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="voice-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-20 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search notes"
                  maxLength={20}
                  onChange={searchNotes}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 end-0 flex items-center pe-3"
                  onClick={handleRecording}
                >
                  {recording ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      className="w-7 h-10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      <rect width="100%" height="100%" fill="#fff" />

                      <g transform="translate(20, 30)">
                        <rect
                          x="0"
                          y="0"
                          width="10"
                          height="40"
                          rx="5"
                          ry="5"
                          fill="#000"
                        >
                          <animate
                            attributeName="height"
                            dur="1s"
                            repeatCount="indefinite"
                            values="40;50;30;45;35;40"
                          />
                          <animate
                            attributeName="y"
                            dur="1s"
                            repeatCount="indefinite"
                            values="0;-5;0;2.5;0;0"
                          />
                        </rect>
                        <rect
                          x="20"
                          y="0"
                          width="10"
                          height="40"
                          rx="5"
                          ry="5"
                          fill="#000"
                        >
                          <animate
                            attributeName="height"
                            dur="1s"
                            repeatCount="indefinite"
                            values="40;35;45;40;50;40"
                          />
                          <animate
                            attributeName="y"
                            dur="1s"
                            repeatCount="indefinite"
                            values="0;5;0;-2.5;0;0"
                          />
                        </rect>
                        <rect
                          x="40"
                          y="0"
                          width="10"
                          height="40"
                          rx="5"
                          ry="5"
                          fill="#000"
                        >
                          <animate
                            attributeName="height"
                            dur="1s"
                            repeatCount="indefinite"
                            values="40;45;30;50;35;40"
                          />
                          <animate
                            attributeName="y"
                            dur="1s"
                            repeatCount="indefinite"
                            values="0;-2.5;0;5;0;0"
                          />
                        </rect>
                        <rect
                          x="60"
                          y="0"
                          width="10"
                          height="40"
                          rx="5"
                          ry="5"
                          fill="#000"
                        >
                          <animate
                            attributeName="height"
                            dur="1s"
                            repeatCount="indefinite"
                            values="40;40;50;30;45;40"
                          />
                          <animate
                            attributeName="y"
                            dur="1s"
                            repeatCount="indefinite"
                            values="0;2.5;0;-5;0;0"
                          />
                        </rect>
                        <rect
                          x="80"
                          y="0"
                          width="10"
                          height="40"
                          rx="5"
                          ry="5"
                          fill="#000"
                        >
                          <animate
                            attributeName="height"
                            dur="1s"
                            repeatCount="indefinite"
                            values="40;35;45;40;50;40"
                          />
                          <animate
                            attributeName="y"
                            dur="1s"
                            repeatCount="indefinite"
                            values="0;5;0;-2.5;0;0"
                          />
                        </rect>
                      </g>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80"
                onClick={onSearch(search)}
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                Search
              </button>
            </form>
          </div>
          <div>
            <button
              type="
            button"
              className="px-6 py-2.5  text-base font-medium text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  rounded-lg text-center me-2 ml-5 sm:px-5 sm:py-2"
              onClick={() => setShowFilter((prev) => !prev)}
            >
              <svg
                class="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                />
              </svg>
            </button>

            {showFilter ? (
              <div className="z-10 m-4 -right-48 -top-5 absolute border bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconButton"
                >
                  <li>
                    <p
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => {
                        onFilter("title");
                      }}
                    >
                      Title
                    </p>
                  </li>
                  <li
                    onClick={() => {
                      onFilter("date created");
                    }}
                  >
                    <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Date Created
                    </p>
                  </li>
                  {/* <li
                    onClick={() => {
                      onFilter("date updated");
                    }}
                  >
                    <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Date Modified
                    </p>
                  </li> */}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex">
        {showTextarea && (
          <div
            className="absolute top-20 left-40 z-10 w-96 "
            ref={draggableRef}
            style={{
              top: position.y,
              left: position.x,
            }}
          >
            <div className="flex justify-end w-[340px] mb-2">
              <FaBold
                className={`m-0.5 text-3xl cursor-pointer p-1 ${
                  formatingOptions.bold ? "bg-gray-500" : "hover:bg-gray-500"
                }  rounded-lg`}
                onClick={handelBold}
              />

              <FaItalic
                className={`m-0.5 text-3xl cursor-pointer p-1 ${
                  formatingOptions.italics ? "bg-gray-500" : "hover:bg-gray-500"
                }  rounded-lg`}
                onClick={handelItalics}
              />
              <FaUnderline
                className={`m-0.5 text-3xl cursor-pointer p-1  ${
                  formatingOptions.underline
                    ? "bg-gray-500"
                    : "hover:bg-gray-500"
                }  rounded-lg`}
                onClick={handelUnderline}
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="1"
              className={`border ml-16 border-black p-4 ${selectedColor} resize-none`}
              maxLength={25}
              placeholder="Title"
              onChange={handelTitle}
            ></textarea>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className={`border ml-16 border-black p-4 ${selectedColor} resize-none`}
              style={{
                backgroundColor: { selectedColor },
                fontWeight: formatingOptions.bold ? "bold" : "normal",
                fontStyle: formatingOptions.italics ? "italic" : "normal",
                textDecoration: formatingOptions.underline
                  ? "underline"
                  : "none",
              }}
              placeholder="Write your note here"
              value={textareaContent}
              onChange={handelTextAreaContent}
            />

            <div
              className="flex justify-center hover:cursor-move"
              onMouseDown={handleMouseDown}
            >
              <button
                className="p-2 w-16  bg-green-500 rounded"
                onClick={handleColorButtonClick}
              >
                Color
              </button>
              <button
                className="p-2 w-16 ml-3 bg-sky-400 rounded"
                onClick={handleAddNote}
              >
                Add
              </button>
            </div>
            {showColorOptions && <Color onSelectColor={handleColorSelect} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Add;
