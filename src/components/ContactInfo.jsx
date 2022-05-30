import React from "react";

function Contactinfo(){

    return(
   <div className="w-full md:w-1/2 lg:w-3/4 md:mx-auto p-3 flex flex-col mb-36 relative top-20">
       <h1 className="mb-3 text-3xl">Basic Info.</h1>
       <form className="lg:grid lg:grid-cols-2 flex flex-col gap-4 p-2 bg-gray-200/50 rounded" action="">
         <div className="flex flex-col gap-2 text-xl">
             <label htmlFor="firstname">Firstname</label>
             <input className="border p-2 border-blue-800/50 rounded" id="firstname" type="text" placeholder="Firstname" />
         </div>
         <div className="flex flex-col gap-2 text-xl">
             <label htmlFor="lastname">Lastname</label>
             <input className="border p-2 border-blue-800/50 rounded" id="lastname" type="text" placeholder="Lastname" />
         </div>
         <div className="flex flex-col gap-2 text-xl">
             <label htmlFor="email">Email</label>
             <input className="border p-2 border-blue-800/50 rounded" id="email" type="email" placeholder="email" />
         </div>
         <div className="flex flex-col gap-2 text-xl">
             <label htmlFor="tel">Mobile</label>
             <input className="border p-2 border-blue-800/50 rounded" id="tel" type="tel" placeholder="mobile" />
         </div>
         <div className="flex flex-col gap-2 text-xl">
             <label htmlFor="address">Address Info.</label>
             <textarea className="border p-2 border-blue-800/50 rounded" name="" id="address" placeholder="your address"></textarea>
         </div>
        <div className=" items-center w-full flex"> <a className="mx-auto h-fit mt-14 w-full  p-2 w-1/4 text-xl text-center rounded bg-blue-800/50 text-gray-50" href=" ">Next</a></div>
       </form>
      
   </div>

    )
}
export default Contactinfo;