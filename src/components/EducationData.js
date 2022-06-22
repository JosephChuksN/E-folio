import { React , useContext } from "react"
import AppContext from "../myContext/Context"


function EducationData () {
    const {educationData} =useContext(AppContext)



    return (
        <div className="p-3">
        <h1 className="text-2xl mb-3 font-bold">Education</h1>
       {educationData.map((eduData, index) => (
            <div key={index} className=" border-b border-slate-400/50 pb-1">
            <div className="flex flex-col  lg:gap-3  gap-1  rounded-md">
           <div className="flex gap-2 items-center ">
  
           <h1>{eduData.institute}</h1>
           </div>
           <h1 className="">{eduData.degree}</h1>
           <span className="flex items-center"><ion-icon name="calendar"></ion-icon>  <p>{`${eduData.startDate} - ${eduData.endDate}`}</p></span>
           
            </div>
        </div>
       ))}
    </div>
    )
}

export default EducationData;