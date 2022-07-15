import React from "react";


function ExperienceEdit(){


return(
<>
<div className="p-3 lg:w-3/4  text-gray-50">
<div className="p-1 border-2 dark:bg-[#1e293b] border-slate-400/20 rounded lg:w-3/4">
     <div className="flex justify-between">
         <span className="font-light">OCT 2021 - NOV 2021</span>
         <div className="flex gap-5">
           <span> <ion-icon name="trash"></ion-icon></span>
           <span> <ion-icon name="create"></ion-icon></span>
           <span></span>
         </div>
     </div>
  <div className="flex flex-col">
         <span className="text-2xl mt-1">Openfinance</span>
         <span className="font-bold">Front-end & UI Developer</span>
         <p className="mt-4">Development of corporate websites, newsletters, 
            landings, pure HTML layout, CSS + Javascript
         </p>
   </div>
</div>

</div>
</>



)
}
export default ExperienceEdit;