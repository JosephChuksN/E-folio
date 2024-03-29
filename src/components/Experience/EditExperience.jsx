import { React, useState } from  "react";




const EditExperience = ({data, experienceData, setExperienceData, showModal}) => {

   

   const id = data.id

   const [company, setCompany] = useState(data.company)
   const [Role, setRole] = useState(data.Role)
   const [jobDescription, setDescription] = useState(data.jobDescription)
   const [startDate, setStartDate] = useState(data.startDate)
   const [endDate, setEndDate] = useState(data.endDate)

  const editedExperience = {id, company, Role, jobDescription, startDate, endDate}

const editExperience = (id, editedExperience) => {
  setExperienceData(experienceData.map(details => (details.id === id ? editedExperience : details)))
}

const handleSave = (e) => {
 e.preventDefault()
 editExperience(id, editedExperience)
 showModal(false)
}

return(
<>
<form action="">
<div className="flex flex-col gap-3">
     <div className='flex flex-col'>
        <label htmlFor="">Company</label>
         <input className='rounded-md border-gray-900/20 dark:border-slate-50/20  dark:bg-[#0c0f11] text-gray-900 dark:text-gray-50'
            type="text" 
            name="company" 
            id="" 
            value={company}
            onChange={(e)=>setCompany(e.target.value.toUpperCase())}
            required
            minLength="3"
            
            />
     </div>
     <div className='flex flex-col'>
        <label htmlFor="">Role</label>
         <input className='rounded-md border-gray-900/20  dark:border-slate-50/20  dark:bg-[#0c0f11] text-gray-900 dark:text-gray-50'
            type="text" 
            name="" 
            id="role" 
            value={Role}
            onChange={(e)=>setRole(e.target.value)}
            required
            minLength="3"
            
            />
     </div>
     <div className='flex flex-col'>
        <label htmlFor="">Job Description</label>
         <textarea  className=" resize-none outline-none text-justify indent-1   border-gray-900/20  dark:bg-[#0c0f11] dark:border-gray-100/20 text-gray-900 dark:text-gray-50  rounded "
         name="description" 
         id="" 
         value={jobDescription}
         onChange={(e)=>setDescription(e.target.value)}
         cols="30" 
         rows="5" 
         required
         maxLength="120"
         minLength="25"
         
         />
     </div>
     <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
            <label htmlFor="">Start Date</label>
            <input  className='rounded-md w-40 border-gray-900/20 dark:border-slate-50/20  dark:bg-[#0c0f11] text-gray-900 dark:text-gray-50'
            type="date" 
            name="startDate" 
            id="" 
            value={startDate}
            onChange={(e)=>setStartDate(e.target.value.toUpperCase())}
            required
            
            />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="">End Date</label>
            <input  className='rounded-md w-40 border-gray-900/20 dark:border-slate-50/20  dark:bg-[#0c0f11] text-gray-900 dark:text-gray-50'
            type="date" 
            name="endDate" 
            id="" 
            value={endDate}
            onChange={(e)=>setEndDate(e.target.value.toString())}
            required
            
            />
        </div>
     </div>
 </div>
 <div className="flex items-center justify-end px-0 p-6 mt-6 gap-5 rounded-b">
                  <button
                    className="text-gray-400 background-transparent hover:bg-gray-400 hover:text-white  border-2 border-gray-400  uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                   onClick={() =>showModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                  onClick={handleSave}
                    className="bg-blue-700 text-white border-2 border-blue-700 hover:bg-blue-800  active:bg-emerald-800 uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    
                  >
                    Save
                  </button>
                </div>
</form>
</>


)
}
export default EditExperience;