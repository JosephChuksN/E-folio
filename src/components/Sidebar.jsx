import { React, useContext } from "react";
import { NavLink } from "react-router-dom";
import SideBarContext from "../Context/SideBarContext";

function Sidebar() {

const activelink = "lg:font-extrabold lg:border-l-4 lg:border-[#1a73e8]  "
  
const { isSidebarOpen, closeSidebar } = useContext(SideBarContext);

const sideBarItems = [
{id: 1,  name: "Profile",  icon: "person-circle-outline",  link: "/", },
         
];
const sideBarItemsSub = [
{id: 1, name: "About", icon: "information-circle-outline", link: "/About", },
{id: 2, name: "Education", icon: "school",  link: "/Education",   },
{id: 3, name: "Experience", icon: "briefcase", link: "/experience",  },
{id: 4, name: "Skills", icon: "cog", link: " ",  },
      
];

return (
<div
  className={` overflow-y-auto transition-all bg-gray-100 dark:bg-gray-900  border-slate-50/20 border-r duration-500 ease-in-out z-50 ${
  isSidebarOpen ? "translate-x-0" : "-translate-x-72 "
  } lg:w-[20%] w-72 fixed lg:translate-x-0 lg:border-r border-slate-400 mt-0 `}
  >

<div className=" h-screen  ">
     <span>
     <h1 className="text-gray-900 font-bold dark:text-gray-100 text-2xl p-2">
           
         OnlineCv

     </h1>
     </span>

     <span
     className="text-gray-900 dark:text-gray-100  text-2xl absolute right-2 top-0.5 lg:hidden "
     onClick={closeSidebar}
     >

          <ion-icon name="close"></ion-icon>

     </span>

    <ul className=" mx-2 flex flex-col space-y-2">
    {sideBarItems.map((lists) => {
     return (
    <NavLink key={lists.id} to={lists.link}
    className={({ isActive }) => (isActive ? activelink : null)}>
     
    <li  onClick={closeSidebar}   key={`${lists.id}_{lists.name}`}  className="flex dark:hover:bg-[#1e293b] hover:bg-slate-600/10 text-gray-900 dark:text-gray-100   text-xl p-3"  >
    <span className="mr-4 text-2xl">

          <ion-icon name={lists.icon}></ion-icon>

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
             
    <li  onClick={closeSidebar}  key={`${lists.id}_{lists.name}`} className=" dark:hover:bg-[#1e293b] flex hover:bg-slate-600/10  text-gray-900 dark:text-gray-100   focus:text-sky-300 text-xl p-3">
    <span className="mr-4 text-2xl ">

          <ion-icon name={lists.icon}></ion-icon>
    </span>
    {lists.name}
    </li>
    </NavLink>
);
})}
    </ul>

<ul className="mx-2 flex flex-col mt-2">
   <NavLink to="/settings" className={({ isActive }) => ( isActive ? activelink : null)}>
   <li  onClick={closeSidebar}  className=" dark:hover:bg-[#1e293b]  flex hover:bg-slate-600/10  text-gray-900 dark:text-gray-100   focus:text-sky-300 text-xl p-3">
    <span className="mr-4 text-2xl ">

          <ion-icon name="settings"></ion-icon>
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
