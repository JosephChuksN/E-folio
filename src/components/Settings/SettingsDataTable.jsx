import React from "react"



const SettingsDataTable = () => {
    
 return(
<>
<form className="lg:pt-5 pt-10" >
<div className="relative z-0 mb-10 w-full group">
      <input  className="block rounded px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-100 dark:bg-[#1e293b]/80  border-gray-900/20 dark:border-gray-100/20  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      type="text" 
      id="fullname"  
      placeholder=" " />
      <label   className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
       htmlFor="fullname">
        Fullname
      </label>
  </div>
  <div className="relative z-0 mb-10 w-full group">
      <input   className="block rounded px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-100 dark:bg-[#1e293b]/80  border-gray-900/20 dark:border-gray-100/20  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      type="text" 
      id="location"  
      placeholder=" " />
      <label   class="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
       htmlFor="location">
        Location
      </label>
  </div>
  <div className="relative z-0 mb-10 w-full group">
      <input  className="block rounded px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-100 dark:bg-[#1e293b]/80  border-gray-900/20 dark:border-gray-100/20  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      type="text" 
      id="headline"  
      placeholder=" " />
      <label   class="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
       htmlFor="headline">
        Headline
      </label>
  </div>


</form>


</>

    )
}

export default SettingsDataTable