import React from "react";


function Education(){

   return(
   <div className="text-gray-100 translate-y-20 px-3   pt-36">
       <div className="flex flex-col gap-5 lg:w-1/2 p-3 rounded bg-slate-300/10">
          <input className="bg-slate-700/50 border-slate-400 border p-1"
           type="text"
           name="" 
           id=""
           
           
           />
           <input  className="bg-slate-700/50 border-slate-400 border p-1"
            type="text" 
            
            
            />

            <div className="flex gap-10 justify-between">
             <div className="flex flex-col">
                <label htmlFor="" >Start Date</label>
             <input  className="bg-slate-700/50 border-slate-400 border p-1" type="date" />
             </div>
            
              <div  className="flex flex-col">
                <label htmlFor="" >End Date</label>
             <input  className="bg-slate-700/50 border-slate-400 border p-1" type="date" />
             </div>
            </div>
       </div>
   </div>
   )
}
export default Education;