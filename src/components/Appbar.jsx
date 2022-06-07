import {  React, useContext, useState} from "react";
import AppContext from "../myContext/Context";



function Appbar(){
    const {openSidebar} = useContext(AppContext)
 return(
     <div className="flex lg:h-20 h-16 fixed mt-20 lg:mt-0 w-full lg:w-[80%] lg:translate-y-0 bg-black z-20 -translate-y-20 text-gray-100 text-2xl items-center justify-between lg:justify-end border-b border-slate-400">
          <span className="lg:hidden"><h1 className="text-gray-100 text-2xl p-2">OnlineCv</h1></span>
         <div className="pr-5">
         <span className="p-3"><ion-icon  name="sunny"></ion-icon></span>
         <span onClick={openSidebar} className="p-3 text-3xl lg:hidden"><ion-icon name="menu"></ion-icon></span>
         </div>
     </div>
 )


}
export default Appbar;