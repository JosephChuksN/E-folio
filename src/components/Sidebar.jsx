import { React, useState} from "react"
import { Link } from "react-router-dom"


  
function Sidebar(){
    const  sideBarItems = [
        {
            id: 1,
            name: "Contact Info.",
            icon: "person-circle-outline",
            link: "/"
        },
        {
            id: 2,
            name: "Experience",
            icon: "briefcase",
            link: "/experience"
        },
        {
            id: 3,
            name: "Education",
            icon: "school",
            link: "/education"
        },
        {
            id: 4,
            name: "Skills",
            icon: "cog",
            link: " "
        },
       
    ]
    const headers = [
        
        {
            id: 1,
            name: "moon"
        }
       
    ]

    const handleShow = ()=>{
        setShowSideBar(show => !show)
        console.log('worked')
    }
    const [showSideBar, setShowSideBar] = useState(false)
 const [showDarkMode, setShowDarkMode] = useState(false)
const   handleShowDarkModeDiv = () =>{
      setShowDarkMode(true)
      console.log("done")
  } 
const handleHideShowDarkModeDiv = () => {
    setShowDarkMode(false)
}
return(
     <nav className="fixed bg-slate-200 lg:h-20 w-full z-20 ">

<div className=" flex justify-between p-5  w-full ">
        
        <h1 className="text-3xl  font-bold text-blue-700 ">MyResume</h1>
        <ul className="text-2xl text-black-600 gap-5 lg:inline-flex  my-auto hidden ">{
          headers.map((lists) => {
              return(
            <li key={lists.id} className=" p-2 rounded-full hover:bg-slate-300"><span onMouseOut={handleHideShowDarkModeDiv}  onMouseOver={handleShowDarkModeDiv} className=""><ion-icon name={lists.name}></ion-icon></span></li>
              )
          })
          
          }</ul>
        <span  className={`text-4xl text-blue-600 absolute right-2 lg:hidden`} onClick={handleShow}><ion-icon name="menu"></ion-icon></span>
        <span className={`absolute text-[0.8rem] bg-gray-900/80 rounded ${showDarkMode ? "block" : "hidden "}  right-20 top-5 p-1 text-gray-100`}>Dark mode</span>
    </div>
         <div className={`lg:static bg-slate-200 lg:z-[-100] lg:mt-[-8px]  lg:w-64  p-4  absolute  h-screen top-0 z-100 w-3/4 md:w-64  ${showSideBar? "left-0" : "left-[-690px]"} transition-all ease-in duration-300 `}>
         
         <div className=" mb-10  lg:hidden">
             <span className="text-3xl font-bold text-red-800 absolute right-2 top-2 " onClick={handleShow}><ion-icon name="close"></ion-icon></span>
         </div>
             <ul className="mt-20">{
              sideBarItems.map((lists)=>{
                  return(
                     <Link key={lists.id} to={lists.link}> <li onClick={handleShow} key={`${lists.id}_{lists.name}`} className="my-10 text-blue-800 border rounded border-blue-800 hover:bg-blue-800/20 text-xl p-3"><span className="mr-4 text-2xl"><ion-icon name={lists.icon} ></ion-icon></span>{lists.name}</li></Link>
                  )
              })      
                 }</ul>

                 <div className="text-center mt-20"><span className="text-[0.8rem] bg-gray-900/80 text-gray-100 lg:hidden p-2 rounded "><ion-icon name="moon"></ion-icon> Dark Mode</span></div>
         </div>

          
     </nav>


)

}

export default Sidebar;