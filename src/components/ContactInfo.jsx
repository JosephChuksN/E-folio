import React from "react";
import { Link } from "react-router-dom"

function Contactinfo(){

    return(
        <section className="lg:w-3/4 mx-auto   ">
   <div className="w-full  md:w-3/4 md:mx-auto p-3 shadow flex flex-col relative top-40 ">
       <h1 className="mb-3 text-3xl p-2 bg-blue-700 text-gray-100 rounded">Basic Info.</h1>

       <form className=" flex flex-col gap-4 p-2 bg-gray-200/50 rounded" action="">
           <div className="lg:grid lg:grid-cols-2 gap-5">
           <div className="flex flex-col gap-2 text-xl">
             <label htmlFor="firstname">Firstname</label>
             <input className="border border-[0.5px] p-2 border-blue-800/50 rounded" id="firstname" type="text" placeholder="Firstname" />
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
           </div>
         
       
       </form>
       <div className=" items-start  flex mt-10"><Link onClick={()=>{return( console.log("working"))}} to="/experience"> <span className="h-fit mt-8   p-2 w-1/4 text-xl text-center rounded bg-blue-700 text-gray-50" href=" ">Next</span></Link></div>
   </div>
   </section>

    )
}
export default Contactinfo;