import { React, useContext, useState } from 'react'
import AppContext from '../../myContext/Context';

function AddNewEducation({showModal}){

    const {addNewEdu} = useContext(AppContext)
    const [newEducation, setNewEducation] = useState({id: "", institution: "", Degree: "", startDate: "", endDate: ""})

    const {institution, Degree, startDate, endDate} = newEducation;
    const handleInputChange = (e) => {
        const { name, value } = e.target
    
        setNewEducation({...newEducation,[name]:value.toUpperCase()})
    }

    const handleAddEducation = (e) =>{
        e.preventDefault()
        addNewEdu(institution, Degree, startDate, endDate)
        showModal(false)
    }
    

    return(
<form action="" onSubmit={handleAddEducation}  className='flex flex-col gap-5'>
 <div className='flex flex-col'>
    <label htmlFor=""  className='text-xl'>Institution</label>
    <input className='rounded-md bg-gray-300 text-gray-800'
    type="text" 
    name="institution"
    value={institution} 
    onChange={(e) => handleInputChange(e)} 
    required
    
    />
 </div>
 <div  className='flex flex-col'>
    <label htmlFor=""  className='text-xl'>Course</label>
    <input  className='rounded-md bg-gray-300 text-gray-800'
    type="text"
    name="Degree" 
    value={Degree}
    onChange={(e) => handleInputChange(e)} 
    required
    
    />
 </div>
 <div className='flex justify-between items-center'>
 <div  className='flex flex-col'>
    <label htmlFor=""  className='text-xl'>Start Date</label>
    <input  className='rounded-md bg-gray-300 text-gray-800 w-40 lg:w-auto'
    type="date" 
    name="startDate"
    value={startDate}
    onChange={(e) => handleInputChange(e)} 
    required
    
    />
 </div>
 
 <div  className='flex flex-col'>
    <label htmlFor=""  className='text-xl'>End Date</label>
    <input  className='rounded-md bg-gray-300 text-gray-800 w-40 lg:w-auto'
    type="date" 
    name="endDate"
    value={endDate}
    onChange={(e) => handleInputChange(e)} 
    required
    
    />
 </div>
 </div>
 <div className="flex items-center justify-end p-6 mt-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => showModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-700 text-white active:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
 
</form>

    )
}

export default AddNewEducation;