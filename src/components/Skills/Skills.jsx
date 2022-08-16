import { React } from "react";
import AddSkill from "./AddSkill";
import SkillsDataTable from "./SkillsDataLayout";



const Skills = (props) => {
  




return(
  <>
  <div className="pt-36 h-screen">
  
  <h1 className="pl-3 text-5xl mb-20">Skills</h1>
  <div className='mt-24 lg:mt-0 text-gray-100 '>
    <AddSkill 
     skills={props.skills}
     setSkills={props.setSkills}
     />
     <div className="mt-10 grid lg:grid-cols-4 grid-cols-3 gap-3 items-center text-center p-3 lg:w-3/5">{
   props.skills.map(data=>(
    <SkillsDataTable  
    key={data.id}
    skills={data}
    skillInfo={props.skills}
    setSkills={props.setSkills}
    
    />
   ))
   
             
       
}</div>
   </div>

  </div>
  </>


)

}

export default Skills;