import { React, useContext } from "react";
import AppContext from "../myContext/Context";

function About() {
  const { aboutText, handleChange } = useContext(AppContext);
  return (
    <div className="text-gray-100 pt-36 px-3 space-y-7 flex flex-col h-screen ">
      <div className="flex flex-col justify-start lg:w-1/2">
        <h1 className="text-gray-900 dark:text-gray-100 text-xl font-bold">
          A great bio is unique and relatable.
        </h1>
        <span>
          <h2 className="text-gray-900 dark:text-gray-100 ">
            Start with one of the bios below or write your own
          </h2>
        </span>
      </div>
      <textarea
        className=" resize-none outline-none text-justify indent-1 lg:w-1/2 bg-slate-600/30  dark:bg-sky-300/[0.15] text-gray-900 dark:text-gray-50 border-slate-50/20 rounded border"
        name="textArea"
        value={aboutText.textArea}
        id=""
        cols="30"
        rows="10"
        maxLength={450}
        onChange={handleChange}
      />
      <div className="flex gap-5 justify-end lg:w-1/2 ">
        <button className=" text-red-500 background-transparent  uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          Cancel
        </button>
        <button className="bg-[#222222] dark:bg-[#1a73e8] py-2 px-6 hover:bg-blue-900 rounded text-white">
          Save
        </button>
      </div>
    </div>
  );
}
export default About;
