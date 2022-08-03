import { React, useState} from "react";
import { Link } from "react-router-dom"


function About({aboutText, setAboutText}) {
  const [textBoxValue, setTextBoxValue] = useState(aboutText)


  

  const handleSave = () =>{
       setAboutText(textBoxValue)
  }

  return (
    <div className="text-gray-100 pt-36 px-3 space-y-7 flex flex-col h-screen ">
      <h1 className="pl-3 text-5xl text-gray-900 dark:text-gray-100 lg:mb-10 mb-20 ">About</h1>
        <h1 className="text-gray-900 dark:text-gray-100 text-xl font-bold">
          A great bio is unique and relatable.
        </h1>
      <textarea
        className=" resize-none outline-none text-justify indent-1 lg:w-1/2 bg-gray-100  border-gray-900/20 dark:bg-gray-900 dark:border-gray-100/20 text-gray-900 dark:text-gray-50  rounded "
        name="textBoxValue"
        value={textBoxValue}
        id=""
        cols="30"
        rows="10"
        maxLength={450}
        onChange={(e)=>{setTextBoxValue(e.target.value)}}
       
      />
      <div className="flex gap-5 justify-end lg:w-1/2 ">
        <button className=" text-gray-400 background-transparent hover:bg-gray-400 hover:text-white border-2 border-gray-400 rounded  uppercase px-6 py-2  outline-none focus:outline-none mr-1  ease-linear transition-all duration-150">
          <Link to="/">Cancel</Link>
        </button>
        <button onClick={handleSave} className=" bg-[#1a73e8] py-2 uppercase px-6 hover:bg-blue-900 rounded active:bg-emerald-800 text-white">
         <Link to="/">Save</Link> 
        </button>
      </div>
    </div>
  );
}
export default About;
