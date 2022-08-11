import { React, useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppContext from "../Context/SideBarContext";

function Appbar() {
  const { openSidebar } = useContext(AppContext);
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex shadow-sm  h-16 fixed mt-20 lg:mt-0 w-full lg:w-[80%] lg:translate-y-0 bg-gray-100 dark:bg-[#2d3436] dark:bg-gradient-to-r from-[#0d1114] to-[#0c0f11] transition-all z-20 -translate-y-20  text-2xl items-center justify-between lg:justify-end border-b border-slate-50/20">
      <span className="lg:hidden">
        <h1 className="text-[#222222] font-bold dark:text-gray-50 text-2xl p-2">
          OnlineCv
        </h1>
      </span>
      <div className="pr-5 flex">
        <div className="p-3">
          {theme === "dark" ? (
            <span
              onClick={handleThemeChange}
              className="text-[#1a73e8] flex justify-center items-center  rounded-full w-10 h-10 hover:bg-slate-600/10  dark:hover:bg-gray-50/20"
            >
              <ion-icon name="sunny"></ion-icon>
            </span>
          ) : (
            <span
              onClick={handleThemeChange}
              className="text-[#1a73e8] flex justify-center items-center rounded-full w-10 h-10 hover:bg-slate-600/10  dark:hover:bg-gray-50/20"
            >
              <ion-icon name="moon"></ion-icon>
            </span>
          )}
        </div>
        <span
          onClick={openSidebar}
          className="p-3 text-2xl flex justify-center items-center lg:hidden text-gray-900 dark:text-gray-50"
        >
          <ion-icon name="menu"></ion-icon>
        </span>
      </div>
    </div>
  );
}
export default Appbar;
