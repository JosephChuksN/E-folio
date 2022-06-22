import { React, useContext, useState } from "react";
import AppContext from "../myContext/Context";

function Education(){
   const {educationData, handleEduDataChange } = useContext(AppContext)
   const [showEditForm, setShowEditForm] = useState(false)
   const handleEditForm = () => {
      setShowEditForm(!showEditForm)
   }
  
   return(

   <div className="text-gray-100 translate-y-20 px-3   pt-36">
      <div className="lg:w-3/4 lg:text-xl">{
      educationData.map((eduData, index) => {
         return(
            <div className="flex  justify-between py-5 px-2 bg-blue-400 rounded shadow-lg hover:shadow-blue-500/50  mb-3">
           <div className="flex gap-5 lg:gap-14">
           <h1 className="">{eduData.institute}</h1>
            <h1>{eduData.degree}</h1>
            <p className="hidden lg:block">{`${eduData.startDate} - ${eduData.endDate}`}</p>
           </div>
            <div className="flex gap-5 text-slate-700 lg:text-2xl items-center ">
            
              <span> <ion-icon name="trash"></ion-icon></span>
               <span onClick={handleEditForm}><ion-icon name="create"></ion-icon></span>
            </div>
            </div>
         )
      })
      
      
      }</div>
       <div className={`lg:w-1/2 lg:p-5 p-2 rounded bg-slate-300/10 ${showEditForm ? "" : "hidden"} transition-all ease-in-out duration-500`}>
          <div><span  onClick={handleEditForm}  className="flex justify-end text-2xl"><ion-icon  name="close"></ion-icon></span></div>
          {educationData.map((eduData, index) =>  {
            return(
           <div key={index} className="flex flex-col gap-5 ">
                <div className="flex flex-col">
             <label htmlFor="">Institute/School</label>
          <input className="bg-slate-700/50 rounded border-slate-400 border p-2"
           type="text"
           name="institute" 
           value={eduData.institute}
           id=""
           onChange={event => handleEduDataChange(index, event)}

           />
          </div>
          <div  className="flex flex-col">
             <label htmlFor="">Major/Degree</label>
          <input  className="bg-slate-700/50 rounded border-slate-400 border p-2"
            type="text" 
            name="degree" 
            value={eduData.degree}
            id=""
            onChange={event => handleEduDataChange(index, event)}
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
               onChange={event => handleEduDataChange(index, event)}
             
             />
             </div>
            
              <div  className="flex flex-col">
                <label htmlFor="" >End Date</label>
             <input  className="bg-slate-700/50 rounded border-slate-400 border p-2" 
               type="date" 
               name="endDate" 
               value={eduData.endDate}
               id=""
               onChange={event => handleEduDataChange(index, event)}
             
             
             />
             </div>
            </div>
           </div>
 )})}
            <div className="flex justify-end"><button className="p-1 mt-5 rounded bg-blue-400 w-20 text-xl">Save</button></div>
       </div>
   </div>
   )
}
export default Education;