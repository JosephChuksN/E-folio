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
                 <span onClick={handleDelete} className="relative bottom-5 right-1.5 text-xl"><FaTimesCircle /></span>
              </div>
        </>
    )
}

export default SkillsDataTable;