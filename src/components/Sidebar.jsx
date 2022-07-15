import { React, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../myContext/Context";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext);

  const sideBarItems = [
    {
      id: 1,
      name: "Profile",
      icon: "person-circle-outline",
      link: "/",
    },
  ];
  const sideBarItemsSub = [
    {
      id: 1,
      name: "About",
      icon: "information-circle-outline",
      link: "/About",
    },
    {
      id: 2,
      name: "Education",
      icon: "school",
      link: "/Education",
    },
    {
      id: 3,
      name: "Experience",
      icon: "briefcase",
      link: "/experience",
    },
    {
      id: 4,
      name: "Skills",
      icon: "cog",
      link: " ",
    },
  ];

  return (
    <div
      className={` transition-all bg-gray-100 dark:bg-gray-900  border-slate-50/20 border-r duration-500 ease-in-out z-40 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-72 "
      } lg:w-[20%] w-72 fixed lg:translate-x-0 lg:border-r border-slate-400 mt-0 `}
    >
      <div className=" h-screen  ">
        <span>
          <h1 className="text-gray-900 dark:text-gray-100 text-2xl p-2">
            OnlineCv
          </h1>
        </span>
        <span
          className="text-gray-900 dark:text-gray-100  text-2xl absolute right-2 top-0.5 lg:hidden "
          onClick={closeSidebar}
        >
          <ion-icon name="close"></ion-icon>
        </span>

        <ul className=" mx-2">
          {sideBarItems.map((lists) => {
            return (
              <Link key={lists.id} to={lists.link}>
                {" "}
                <li
                  onClick={closeSidebar}
                  key={`${lists.id}_{lists.name}`}
                  className=" dark:hover:bg-[#1e293b] hover:bg-slate-600/10 text-gray-900 dark:text-gray-100   text-xl p-3"
                >
                  <span className="mr-4 text-2xl">
                    <ion-icon name={lists.icon}></ion-icon>
                  </span>
                  {lists.name}
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="p-3 text-slate-500">
          <span className="pl-10">Edit</span>
        </div>

        <ul className="mx-2 flex flex-col space-y-2">
          {sideBarItemsSub.map((lists) => {
            return (
              <Link key={lists.id} to={lists.link}>
                <li
                  onClick={closeSidebar}
                  key={`${lists.id}_{lists.name}`}
                  className=" dark:hover:bg-[#1e293b] hover:bg-slate-600/10  text-gray-900 dark:text-gray-100   focus:text-sky-300 text-xl p-3"
                >
                  <span className="mr-4 text-2xl ">
                    <ion-icon name={lists.icon}></ion-icon>
                  </span>
                  {lists.name}
                </li>
              </Link>
            );
          })}
        </ul>

        <div className="p-3 mt-64 text-gray-900 dark:text-gray-100  text-xl dark:hover:bg-[#1e293b] hover:bg-slate-600/10 space-x-4 mx-2 ">
          {" "}
          <span className="  ">
            <ion-icon name="settings"></ion-icon>
          </span>
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
