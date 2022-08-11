import {React } from "react"
import SettingsDataTable from "./SettingsDataTable"




const Settings = (props) => {


return(
    <>
      <>
          <div
            className="lg:pt-14 bg-gray-100 dark:bg-[#2d3436] dark:bg-gradient-to-r from-[#0d1114] to-[#0c0f11] transition-all h-screen pt-14 justify-center items-center text-gray-900 dark:text-gray-100 flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none"
          >
            <div className="relative w-full lg:w-3/4 my-6 lg:mx-auto mx-2 shadow-lg shadow-black/60 bg-gray-100 dark:bg-[#0c0f11]  rounded-md max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg  relative flex flex-col w-full  outline-none focus:outline-none">
                {/*header*/}

                
                <div className="flex items-start justify-between p-5  rounded-t">
                  <h3 className="text-3xl font-semibold ">
                   Settings
                  </h3>
                </div>
              
                {/*body*/}
                <div className="relative lg:p-6 p-4 flex-auto">
                 <SettingsDataTable
                 user={props.user}
                 setUser={props.setUser}

                 />
                </div>
                {/*footer*/}
              
              </div>
            </div>
          </div>
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        </>
  
    </>
)
}

export default Settings;