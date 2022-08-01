import {React, useState } from "react"



const SettingsDataTable = ({user, setUser}) => {
    
const [userTextFields, setUserTextFields] = useState(user)

const handleChange = (e) =>{
  const { name, value } = e.target
  var obj= {...userTextFields}

 obj = {obj,[name]:value}
 setUserTextFields(obj)

}
const handleSave = (e) =>{
   e.preventDefault()
   setUser(userTextFields)
}

return(
<>
<form onSubmit={handleSave} className="lg:pt-5 pt-10" >
<div className="relative z-0 mb-10 w-full group">
      <input  className="block rounded px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-100 dark:bg-[#1e293b]/80  border-gray-900/20 dark:border-gray-100/20  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      type="text" 
      id="fullname"  
      value={userTextFields.fullName}
      onChange={handleChange}
      
      />
      <label   className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
       htmlFor="fullname">
        Fullname
      </label>
  </div>
  <div className="relative z-0 mb-10 w-full group">
      <input   className="block rounded px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-100 dark:bg-[#1e293b]/80  border-gray-900/20 dark:border-gray-100/20  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      type="text" 
      id="location" 
      value={userTextFields.city} 
      onChange={handleChange}
      
      />
      <label   className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
       htmlFor="location">
        Location
      </label>
  </div>
  <div className="relative z-0 mb-10 w-full group">
      <input  className="block rounded px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-100 dark:bg-[#1e293b]/80  border-gray-900/20 dark:border-gray-100/20  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      type="text" 
      id="headline"  
      value={userTextFields.jobTitle}
      onChange={handleChange}
      
      />
      <label   className="absolute  text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
       htmlFor="headline">
        Job Title
      </label>
  </div>

   <div className="flex justify-end">
   <button  className="bg-[#222222] dark:bg-[#1a73e8] hover:bg-[#222222]/90   text-white active:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
   type="submit"
   >save</button>
   </div>
</form>


</>

    )
}

export default SettingsDataTable