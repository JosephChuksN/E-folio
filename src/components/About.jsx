import { React, useContext } from "react"; 
import AppContext from "../myContext/Context";

function About(){
    const {aboutText,   handleChange, } =useContext(AppContext)
    return(
  <div className="text-gray-100 pt-36 px-3 space-y-7 flex flex-col ">
      <div className="flex flex-col justify-start lg:w-1/2">
         <h1 className="text-gray-100 text-xl font-bold">A great bio is unique and relatable.</h1>
          <span><h2>Start with one of the bios below or write your own</h2></span>
      </div>
      <textarea className=" resize-none outline-none indent-1 lg:w-1/2 bg-slate-700/50 border-slate-400 border"
      name="textArea" 
      value={aboutText.textArea}
      id="" 
      cols="30" 
      rows="10" 
      onChange={handleChange}
      
      
      
      
      />
      <div className="grid grid-cols-2 gap-5 lg:w-72 ">
          <button className="p-2 bg-slate-400/50 rounded hover:bg-slate-400 ">Cancel</button>
          <button  className="p-2 bg-blue-400 rounded hover:bg-blue-500">Save</button>
      </div>
  </div>
    )
}
export default About;