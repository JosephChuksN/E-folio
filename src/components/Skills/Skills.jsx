import { React } from "react";
import AddSkill from "./AddSkill";
import { FaTimesCircle } from "react-icons/fa";


const Skills = (props) => {
  const {skills, setSkills} = props
const id = skills.id


const handleDelete = ()=> {
  setSkills(skills.filter(data => (data.id !== id)))
  console.log(skills.id)
   }


return(
  <>
  <div className="pt-36">
  
  <h1 className="pl-3 text-5xl mb-20">Skills</h1>
  <div className='mt-24 lg:mt-0 text-gray-100 '>
    <AddSkill 
     skills={skills}
     setSkills={setSkills}
     />
     <div className="mt-10 grid lg:grid-cols-4 grid-cols-3 gap-3 items-center text-center p-3 lg:w-3/5">
     {
          props.skills.map((data) =>(
              <div key={data.id} className="flex  justify-start">
                 <span  className="p-2 bg-[#1a73e8] rounded-md mb-5">{data.skill}</span>
                 <span onClick={handleDelete} className="relative bottom-5 right-1.5 text-xl"><FaTimesCircle /></span>
              </div>
          ))
   

    }
     </div>
   </div>

  </div>
  </>


)

}

export default Skills;