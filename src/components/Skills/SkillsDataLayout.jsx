import React from "react";
import { FaTimesCircle } from "react-icons/fa";


const SkillsDataTable = ({skills, setSkills, skillInfo}) =>{
const id = skills.id
    
const handleDelete = ()=> {
    setSkills(skillInfo.filter(data => (data.id !== id)))
   
     }

    return(
        <>
         <div  className="flex  justify-start">
                 <span  className="p-2 bg-[#1a73e8] rounded-md mb-5">{skills.skill}</span>
                 <span onClick={handleDelete} className="relative bottom-5 w-8 h-8 right-1.5 flex items-center justify-center rounded-full  hover:bg-slate-600/20  dark:hover:bg-gray-50/20 text-xl text-gray-900 dark:text-white"><FaTimesCircle /></span>
              </div>
        </>
    )
}

export default SkillsDataTable;