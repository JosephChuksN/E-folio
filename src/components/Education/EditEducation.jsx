import { React, useContext, useState } from 'react'
import AppContext from '../../myContext/Context';

function EditEducation({details, showModal}){

    const id = details.id;
    const {editEducation} = useContext(AppContext)

    const [institution, setInstitution] = useState(details.institution)
    const [Degree, setDegree] = useState(details.Degree)
    const [startDate, setStartDate] = useState(details.startDate)
    const [endDate, setEndDate] = useState(details.endDate)

  const editedEducation = {id, institution, Degree, startDate, endDate}
   const handleSave = (e) =>  {
      e.preventDefault()
      editEducation(id, editedEducation)
      showModal(false)
   }
    return(
<form action="" onSubmit={handleSave} className='flex flex-col gap-5'>
 <div className='flex flex-col'>
    <label htmlFor="" className='text-xl'>Institution</label>
    <input className='rounded-md  border-slate-50/20  bg-sky-300/[0.15]'
    type="text" 
    name="institution"
    value={institution}
    onChange={(e) => setInstitution(e.target.value.toUpperCase())}
    required
    
    />
 </div>
 <div  className='flex flex-col'>
    <label htmlFor="" className='text-xl'>Course</label>
    <input  className='rounded-md  border-slate-50/20  bg-sky-300/[0.15]'
    type="text"
    name="degree" 
    value={Degree}
    onChange={(e) => setDegree(e.target.value.toUpperCase())}
    required
    
    />
 </div>
 <div className='flex justify-between items-center'>
 <div  className='flex flex-col'>
    <label htmlFor="" className='text-xl'>Start Date</label>
    <input  className='rounded-md border-slate-50/20 bg-sky-300/[0.15]'
    type="date" 
    name="startDate"
    value={startDate}
    onChange={(e) => setStartDate(e.target.value.toUpperCase())}
    required
  
    />
 </div>
 
 <div  className='flex flex-col'>
    <label htmlFor="" className='text-xl'>End Date</label>
    <input  className='rounded-md   border-slate-50/20  bg-sky-300/[0.15]'
    type="date" 
    name="endDate"
    value={endDate}
    onChange={(e) => setEndDate(e.target.value.toUpperCase())}
    required
    
    />
 </div>
 </div>
 <div className="flex items-center justify-end p-6 mt-6  rounded-b">
                  <button
                    className="text-red-500 background-transparent  uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                   onClick={() =>showModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-700 text-white active:bg-emerald-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    
                  >
                    Save
                  </button>
                </div>
 
</form>

    )
}

export default EditEducation;