import { React, useState} from "react"


  
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

    const handleShow = ()=>{
        setShowSideBar(show => !show)
        console.log('worked')
    }
    const [showSideBar, setShowSideBar] = useState(false)


return(
     <nav className="lg:fixed lg:h-20 w-full lg:z-20  ">
<div className="">
<div className=" flex justify-between p-5  w-full shadow-sm shadow-gray-500/50">
        
        <h1 className="text-2xl font-bold text-blue-600/50 ">MyResume</h1>
        <span className={`text-4xl text-blue-600 absolute right-2 lg:hidden`} onClick={handleShow}><ion-icon name="menu"></ion-icon></span>
    </div>
         <div className={`lg:static lg:z-[-100] lg:mt-[-0.5]  lg:w-64  p-4  absolute bg-gray-50 h-screen top-0 z-10 w-3/4 md:w-64 shadow shadow-gray-900/50 ${showSideBar? "left-0" : "left-[-690px]"} transition-all ease-in duration-300 `}>
         
         <div className=" mb-10  lg:hidden">
             <span className="text-3xl font-bold text-red-800 absolute right-2 top-2 " onClick={handleShow}><ion-icon name="close"></ion-icon></span>
         </div>
             <ul className="mt-10">{
              sideBarItems.map((lists, index)=>{
                  return(
                      <li key={`${lists.icon}_{lists.name}`} className="text-xl my-5 ml-4  p-2 hover:bg-gray-200/50"><span className="mr-4"><ion-icon name={lists.icon} ></ion-icon></span>{lists.name}</li>
                  )
              })      
                 }</ul>
         </div>
</div>
          
     </nav>


)

}

export default Sidebar;