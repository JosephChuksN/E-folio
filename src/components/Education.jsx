import React from "react";


function Education(){

    return(
        <div className="p-3">
            <h1 className="text-2xl mb-3">Education</h1>
            <div className="rounded-md shadow shadow-slate-400">
                <div className="flex items-center lg:gap-5 p-3 gap-1 lg:p-5 rounded-md">
               <div className="flex gap-2 items-center ">
               <div className="rounded-full px-2 py-1 text-gray-900 bg-blue-400">U</div>
               <h1>Unimaid</h1>
               </div>
               <span className="flex items-center"><ion-icon name="calendar"></ion-icon> <p>2022-10-20 - 2022-10-20</p></span>
               <h1>Bsc.</h1>
                </div>
            </div>
        </div>
    )
}
export default Education;