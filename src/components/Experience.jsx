import { React, useState, useRef } from "react";
import NewExperience from "./newExperience";


function Experience(){
  
    const ExperienceSection = useRef()


    return(
    <div ref={ExperienceSection} className="p-3 lg:w-3/4 lg:mx-auto">
         <h1 className="mb-3 text-3xl">Experience</h1>
        <NewExperience />
        
    </div>

    


    )
}

export default Experience;