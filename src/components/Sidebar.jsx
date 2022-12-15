import { React, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useSidebarControl from "../hooks/SidebarControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/e-folio.png"
import {faUser, faAddressCard, faGraduationCap, faBriefcase, faUserGear, faGear, faXmark } from "@fortawesome/free-solid-svg-icons"

function Sidebar() {
const sideBar = useRef(null)
const {isSidebarOpen, handleSidebar} = useSidebarControl()

const handleOutsideClick = (e) =>{
    if(sideBar.current && !sideBar.current.contains(e.target)){
      handleSidebar()
    }
}

useEffect(()=>{
    document.addEventListener("mousedown", handleOutsideClick)
    return ()=>{document.removeEventListener("mousedown", handleOutsideClick)}
})

const activelink = "lg:font-extrabold   text-[#1a73e8]"
  

const sideBarItems = [
{id: 1,  name: "Profile",  icon:faUser,  link: "/", },
         
];
const sideBarItemsSub = [
{id: 1, name: "About", icon:faAddressCard, link: "/About", },
{id: 2, name: "Education", icon:faGraduationCap,  link: "/Education",   },
{id: 3, name: "Experience", icon:faBriefcase, link: "/experience",  },
{id: 4, name: "Skills", icon:faUserGear, link: "/skills",  },
      
];

return (
<div ref={sideBar}
  className={` overflow-y-auto lg:bg-transparent lg:dark:bg-transparent bg-gray-100  dark:bg-[#2d3436] dark:bg-gradient-to-r from-[#0d1114] to-[#0c0f11] transition-all border-slate-50/20 border-r duration-500 ease-in-out z-50 ${
  isSidebarOpen ? "translate-x-0" : "-translate-x-72 "
  } lg:w-[20%] w-72 fixed lg:translate-x-0 lg:border-r border-slate-400 mt-0 `}
  >

<div className=" h-screen  ">
     <div className="h-[80px] w-full pt-3.5">
     <img className=" w-[200px] hidden lg:block " src={Logo} alt="" />
     </div>

     <span
     className="text-gray-900 dark:text-gray-100  text-2xl absolute right-2 top-2.5 lg:hidden "
     onClick={handleSidebar}
     >

      <FontAwesomeIcon icon={faXmark} />

     </span>

    <ul className=" mx-2 flex flex-col space-y-2">
    {sideBarItems.map((lists) => {
     return (
    <NavLink key={lists.id} to={lists.link}
    className={({ isActive }) => (isActive ? activelink : null)}>
     
    <li  onClick={handleSidebar}   key={`${lists.id}_{lists.name}`}  className="flex dark:hover:bg-[#ffffff0f] hover:bg-slate-600/10 rounded-md lg:mx-5   text-xl p-3"  >
    <span className="mr-4 text-xl">

          <FontAwesomeIcon icon={lists.icon} />

    </span>
    {lists.name}
    </li>
    </NavLink>
);
})}
    </ul>

<div className="p-3 text-slate-500">
     <span className="pl-10">Edit</span>
</div>

    <ul className="mx-2 flex flex-col space-y-2">
    {sideBarItemsSub.map((lists) => {
    return (
    <NavLink key={lists.id} to={lists.link}  className={({ isActive }) => (  isActive ? activelink : null) }>
             
    <li  onClick={handleSidebar}  key={`${lists.id}_{lists.name}`} className=" dark:hover:bg-[#ffffff0f] flex hover:bg-slate-600/10 rounded-md  lg:mx-5    focus:text-sky-300 text-xl p-3">
    <span className="mr-4 text-xl ">

    <FontAwesomeIcon icon={lists.icon} />
    </span>
    {lists.name}
    </li>
    </NavLink>
);
})}
    </ul>

<ul className="mx-2 flex flex-col mt-2">
   <NavLink to="/settings" className={({ isActive }) => ( isActive ? activelink : null)}>
   <li  onClick={handleSidebar}  className=" dark:hover:bg-[#ffffff0f]  flex hover:bg-slate-600/10 lg:mx-5  rounded-md   focus:text-sky-300 text-xl p-3">
    <span className="mr-4 text-xl ">

    <FontAwesomeIcon icon={faGear} />
    </span>
   Settings
    </li>
   </NavLink>
</ul>


</div>
</div>
);
}

export default Sidebar;
