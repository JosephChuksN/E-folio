import { React, useContext } from "react";
import AppContext from "../myContext/Context";

function Appbar() {
  const { openSidebar, theme, setTheme } = useContext(AppContext);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex shadow-sm  h-16 fixed mt-20 lg:mt-0 w-full lg:w-[80%] lg:translate-y-0 bg-gray-100 dark:bg-gray-900 transition-all z-20 -translate-y-20  text-2xl items-center justify-between lg:justify-end border-b border-slate-50/20">
      <span className="lg:hidden">
        <h1 className="text-sky-400 dark:text-gray-50 text-2xl p-2">
          OnlineCv
        </h1>
      </span>
      <div className="pr-5 flex">
        <div className="p-3">
          {theme === "dark" ? (
            <span
              onClick={handleThemeChange}
              className="text-gray-900 dark:text-gray-50"
            >
              <ion-icon name="sunny"></ion-icon>
            </span>
          ) : (
            <span
              onClick={handleThemeChange}
              className="text-gray-900 dark:text-gray-50"
            >
              <ion-icon name="moon"></ion-icon>
            </span>
          )}
        </div>
        <span
          onClick={openSidebar}
          className="p-3 text-2xl lg:hidden text-gray-900 dark:text-gray-50"
        >
          <ion-icon name="menu"></ion-icon>
        </span>
      </div>
    </div>
  );
}
export default Appbar;
