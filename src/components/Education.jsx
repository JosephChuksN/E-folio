import { React, useContext } from "react";
import AppContext from "../myContext/Context";

function Education(){
   const {educationData, handleEduDataChange } = useContext(AppContext)
   return(
   <div className="text-gray-100 translate-y-20 px-3   pt-36">
       <div className="lg:w-1/2 lg:p-5 p-2 rounded bg-slate-300/10">
          <div><span  className="flex justify-end text-2xl"><ion-icon  name="close"></ion-icon></span></div>
          {educationData.map((eduData, index) =>  (
           <div key={index} className="flex flex-col gap-5 ">
                <div className="flex flex-col">
             <label htmlFor="">Institute/School</label>
          <input className="bg-slate-700/50 rounded border-slate-400 border p-2"
           type="text"
           name="institute" 
           value={eduData.institute}
           id=""
           onChange={handleEduDataChange}
           
           />
          </div>
          <div  className="flex flex-col">
             <label htmlFor="">Major/Degree</label>
          <input  className="bg-slate-700/50 rounded border-slate-400 border p-2"
            type="text" 
            name="degree" 
            value={eduData.degree}
            id=""
            onChange={handleEduDataChange}
            />
          </div>

            <div className="flex lg:gap-10 justify-between items-center">
             <div className="flex flex-col">
                <label htmlFor="" >Start Date</label>
             <input  className="bg-slate-700/50 rounded border-slate-400 border p-2" 
               type="date" 
               name="startDate" 
               value={eduData.startDate}
               id=""
               onChange={handleEduDataChange}
             
             />
             </div>
            
              <div  className="flex flex-col">
                <label htmlFor="" >End Date</label>
             <input  className="bg-slate-700/50 rounded border-slate-400 border p-2" 
               type="date" 
               name="endDate" 
               value={eduData.endDate}
               id=""
               onChange={handleEduDataChange}
             
             
             />
             </div>
            </div>
           </div>
          ))}
            <div className="flex justify-end"><button className="p-1 mt-5 rounded bg-blue-400 w-20 text-xl">Save</button></div>
       </div>
   </div>
   )
}
export default Education;