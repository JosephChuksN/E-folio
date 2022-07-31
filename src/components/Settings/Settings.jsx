import {React } from "react"
import SettingsDataTable from "./SettingsDataTable"
import ProfileImgSettings from "./ProfileImgSettings"




const Settings = () => {


return(
    <>
      <>
          <div
            className=" justify-center items-center text-gray-900 dark:text-gray-100 flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none"
          >
            <div className="relative w-full lg:w-3/4 my-6 lg:mx-auto mx-2 shadow-lg shadow-black/60 bg-gray-100 dark:bg-[#1e293b]/80  rounded-md max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg  relative flex flex-col w-full  outline-none focus:outline-none">
                {/*header*/}

                
                <div className="flex items-start justify-between p-5  rounded-t">
                  <h3 className="text-3xl font-semibold lg:pb-0 pb-10">
                   Settings
                  </h3>
                </div>
                <ProfileImgSettings />
                {/*body*/}
                <div className="relative lg:p-6 p-4 flex-auto">
                 <SettingsDataTable />
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