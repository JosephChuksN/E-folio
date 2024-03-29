import { React, useState } from "react";
import EditExperience from "./EditExperience";
import { FaEllipsisH, FaTimesCircle, FaPen, FaTrash } from "react-icons/fa"


const ExperienceLayout = ({ details, experienceData, setExperienceData }) => {
   
  const id = details.id
   const [showModal, setShowModal] = useState(false);
   const [showIcon, setShowIcon] = useState(false);
   
   const handleDelete = () =>{
    setExperienceData(experienceData.filter(details => (details.id !== id)))
   }

return(
<>
<div className="p-3 text-gray-900  dark:text-gray-50">
<div className="p-1  border-2 shadow-md  dark:shadow-black/40 dark:bg-[#1e293b] border-slate-400/20 rounded lg:w-3/5 mb-4 hover:shadow-black/70">
     <div className="flex justify-between">
         <span className="">{`${details.startDate} - ${details.endDate}`}</span>
         <div className="flex gap-5 items-center P-1">
           <span onClick={handleDelete}  className={`flex justify-center items-center rounded-full w-7 h-7 hover:bg-slate-600/10  dark:hover:bg-gray-50/20 ${showIcon ? "block" : "hidden"}`}><FaTrash /></span>
           <span onClick={() => setShowModal(true)}   className={`flex justify-center items-center rounded-full w-7 h-7 hover:bg-slate-600/10  dark:hover:bg-gray-50/20 ${showIcon ? "block" : "hidden"}`}><FaPen /></span>
           <span onClick={()=> setShowIcon(!showIcon)}  className="flex justify-center items-center rounded-full w-7 h-7 hover:bg-slate-600/10  dark:hover:bg-gray-50/20 " >{showIcon ? <FaTimesCircle /> : <FaEllipsisH />}</span>
         </div>
     </div>
  <div className="flex flex-col">
         <span className="text-2xl mt-1 truncate">{details.company}</span>
         <span className="font-bold">{details.Role}</span>
         <p className="mt-4 truncate">{details.jobDescription}</p>
   </div>
</div>
</div>
{showModal ? (
        <>
          <div onClick={() => setShowModal(false)} className="bg-black/60 dark:bg-sky-300/[0.15]  transition-all ease-in-out duration-500 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div onClick={(e)=> e.stopPropagation()} className="relative w-full lg:w-3/4 my-6 lg:mx-auto mx-2 z-50 shadow-lg shadow-black/60 bg-gray-100 dark:bg-[#0c0f11] rounded-md  max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5  rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Experience</h3>
                  <button
                    onClick={() => setShowModal(false)}
                    type="button"
                    className="text-gray-900 bg-transparent hover:bg-slate-600/10  dark:hover:bg-gray-50/20 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:text-gray-50"
                    data-modal-toggle="defaultModal"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="relative  lg:p-6 p-4 flex-auto">
                  <EditExperience 
                  data={details} 
                  experienceData={experienceData}
                  setExperienceData={setExperienceData}
                  showModal={setShowModal}
                  
                  />
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        </>
      ) : null}
</>



)
}
export default ExperienceLayout;