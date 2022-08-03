import {React, useState, useRef } from "react"
import { FaCamera } from "react-icons/fa"
import { Link } from "react-router-dom";



const SettingsDataTable = ({user, setUser}) => {
const  upLoadInput = useRef(null)

const [userTextFields, setUserTextFields] = useState(user)
const handleChange = (e) =>{
  const name = e.target.name
  const value = e.target.value

if(e.target.type!=="file"){
  setUserTextFields(prev=> ({...userTextFields,[name]:value}))
}else{
  if(e.target.files[0]){
    setUserTextFields(prev=>({...userTextFields,"profileImg":URL.createObjectURL(e.target.files[0])}))
  }
}
   
  

}
const handleSave = (e) =>{
   e.preventDefault()
   setUser(userTextFields)
}

return(
<>
<form  className=" " >
  
<div className="mx-auto ">
    <div className=" text-2xl">
    <span onClick={()=> upLoadInput.current.click()} className="absolute  lg:top-32 text-white lg:right-[23.25rem] top-24 right-44  z-20 "><FaCamera /></span>
    <input className="hidden"
    type="file" 
    name="" 
    id=""
    ref={upLoadInput}
    onChange={handleChange}
    accept="image/*"
    
    
    />
    </div>
   
      {/* */}
    <div className="lg:w-52 lg:h-52 w-52 h-52 flex items-center  mx-auto  rounded-lg bg-no-repeat bg-cover   mb-5 " 
      style={{backgroundImage: `url(${userTextFields.profileImg})`}}
     />
    
    </div>
<div className="relative z-0 mb-6 w-full group">
      <input  className="block rounded px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-100 dark:bg-[#1e293b]/80  border-gray-900/20 dark:border-gray-100/20  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      type="text" 
      name="fullName"
      id="fullname"  
      value={userTextFields.fullName}
      onChange={handleChange}
      required
      />
      <label   className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
       htmlFor="fullname">
        Fullname
      </label>
  </div>
  <div className="relative z-0 mb-6 w-full group">
      <input   className="block rounded px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-100 dark:bg-[#1e293b]/80  border-gray-900/20 dark:border-gray-100/20  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      type="text" 
      name="city"
      value={userTextFields.city} 
      onChange={handleChange}
      
      />
      <label   className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
       htmlFor="location">
        Location
      </label>
  </div>
  <div className="relative z-0 mb-6 w-full group">
      <input  className="block rounded px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-100 dark:bg-[#1e293b]/80  border-gray-900/20 dark:border-gray-100/20  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      type="text" 
      name="jobTitle"
      id="headline"  
      value={userTextFields.jobTitle}
      onChange={handleChange}
     
      
      />
      <label   className="absolute  text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
       htmlFor="headline">
        Job Title
      </label>
  </div>

   <div className="flex justify-end gap-5">
   <button  className="hover:bg-gray-400 bg-transparent border-2 border-gray-400  text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
   type="submit"
   ><Link to="/">Not Now</Link></button>
   
   <button onClick={handleSave} className="bg-[#1a73e8] hover:bg-blue-800 active:bg-emerald-800  text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
   type="submit"
   ><Link to="/">save</Link></button>
   </div>
</form>


</>

    )
}

export default SettingsDataTable