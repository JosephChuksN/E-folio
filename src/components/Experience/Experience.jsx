import { React, useContext } from "react"
import AppContext from "../../myContext/Context";
import ExperienceEdit from "./ExperienceEdit";

function Experience(){
    const{ experienceDetails } = useContext(AppContext)
  

   

return(
<>
<div className="h-screen pt-36">
    {experienceDetails.map((data)=>{
        return(
<ExperienceEdit details={data}  key={data.id} />
        )
    })}
</div>


</>



)




}
export default Experience;