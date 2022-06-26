import { prettyDOM } from '@testing-library/react';
import { React, useContext, useState } from 'react'
import AppContext from '../../myContext/Context';

function EditEducation({details}){

    const id = details.id;
    const {editEducation} = useContext(AppContext)

    const [educationInputValues, setEducationInputValues] = useState(details)
  const {institution, Degree, startDate, endDate} = details
//    const handleSave = () =>  
    return(
<form action="" className='flex flex-col gap-5'>
 <div className='flex flex-col'>
    <label htmlFor="" className='text-xl'>Institution</label>
    <input className='rounded-md bg-gray-300 text-gray-800'
    type="text" 
    name="institution"
    value={educationInputValues.institution}
    onChange={(e) => setEducationInputValues(e.target.value)}
    
    />
 </div>
 <div  className='flex flex-col'>
    <label htmlFor="" className='text-xl'>Course</label>
    <input  className='rounded-md bg-gray-300 text-gray-800'
    type="text"
    name="Degree" 
    value={educationInputValues.Degree}
    onChange={(e) => setEducationInputValues(e.target.value)}
    
    />
 </div>
 <div className='flex justify-between items-center'>
 <div  className='flex flex-col'>
    <label htmlFor="" className='text-xl'>Start Date</label>
    <input  className='rounded-md bg-gray-300 text-gray-800'
    type="date" 
    name="startDate"
    value={educationInputValues.startDate}
    onChange={(e) => setEducationInputValues(e.target.value)}
  
    />
 </div>
 
 <div  className='flex flex-col'>
    <label htmlFor="" className='text-xl'>End Date</label>
    <input  className='rounded-md bg-gray-300 text-gray-800'
    type="date" 
    name="endDate"
    value={educationInputValues.endDate}
    onChange={(e) => setEducationInputValues(e.target.value)}
    
    />
 </div>
 </div>
 <div className="flex items-center justify-end p-6 mt-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent  uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                   
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