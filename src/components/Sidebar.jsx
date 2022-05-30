import React from "react";


function Sidebar(){
    const  sideBarItems = [
        {
            name: "Contact Info.",
            icon: "contact"
        },
        {
            name: "Experience",
            icon: "briefcase"
        },
        {
            name: "Education",
            icon: "school"
        },
        {
            name: "Skills",
            icon: "cog"
        },
       
    ]
return(
     <div className="lg:w-64 lg:fixed p-2 w-3/4 shadow shadow-gray-900/50 h-screen">
         <div className="p-4 lg:mt-20">
         <div className="flex justify-between mb-10">
             <img className="w-1/4 rounded-full h-auto" src="https://picsum.photos/536/354" alt="" />
             <span className="text-2xl lg:hidden"><ion-icon name="close"></ion-icon></span>
         </div>

             <ul className="">{
              sideBarItems.map((lists, index)=>{
                  return(
                      <li key={`${lists.icon}_{lists.name}`} className="text-xl my-5 ml-4  p-2 hover:bg-gray-200/50"><span className="mr-4"><ion-icon name={lists.icon}></ion-icon></span>{lists.name}</li>
                  )
              })      
                 }</ul>
         </div>
     </div>


)

}

export default Sidebar;