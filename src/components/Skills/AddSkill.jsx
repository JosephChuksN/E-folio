import{ React, useState } from "react";
import { v4 as uuidv4 } from 'uuid';



const AddSkill = ({skills, setSkills}) =>{

const [newSkill, setNewSkill] = useState({id:"", skill:""})

const {skill} = newSkill

const addSkill =(skill) =>{
    
    setSkills([...skills, {id:uuidv4(), skill}])
}
const handleChange = (e) =>{
    const {name, value} = e.target
  setNewSkill({...newSkill,[name]:value })
}
  
const handleAddSkill = (e) =>{
    e.preventDefault()
  addSkill(skill)
  
}

    return(
        <form onSubmit={handleAddSkill} >
     <div className="lg:w-3/5 px-3 relative group flex gap-2 lg:gap-5">
    
     <input  className="block rounded px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-100 dark:bg-[#1e293b]/80  border-gray-900/20 dark:border-gray-100/20  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      type="text" 
      name="skill"  
      value={skill}
      required
      onChange={handleChange}
      minLength="4"
      />
      <label   className="absolute text-lg bo text-gray-500 dark:text-gray-400 duration-300 pl-3 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
       htmlFor="fullname">
      Add Skill 
      </label>
      <button type="submit" className="w-24 px-2 py-1 bg-[#1a73e8] hover:bg-blue-800  active:bg-emerald-800 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Add</button>
      
        </div>
        </form>
    )
}
export default AddSkill;