import { React, useState } from "react";
import { FaEllipsisH, FaTimesCircle, FaPen, FaTrash } from "react-icons/fa"
import EditEducation from "./EditEducation";


function EducationLayout({ details, educationData, setEducationData }) {
const [showModal, setShowModal] = useState(false);
const [showIcon, setShowIcon] = useState(false);

const id = details.id

const handleDelete = () =>{
  setEducationData(educationData.filter(data =>(data.id !== id)))
}


return (
<>
<div  className="flex justify-between text-gray-900 dark:text-gray-50   p-3 bg-gray-100 blend-darken shadow-md shadow-black/40 dark:bg-[#1e293b] border-2 border-slate-400/10 rounded-md hover:shadow-black/70 ">
<div  className="flex lg:gap-1 lg:justify-between w-3/4 gap-5 p-1 text-xl">
     <span>{details.institution}</span>
     <span>{details.Degree}</span>
     <span className="lg:block hidden">{`${details.startDate} - ${details.endDate}`}</span>
</div>

<div className="flex lg:gap-5 gap-3 items-center   p-1 delay-300 transition-all ease-in-out duration-500">
     <span
     onClick={handleDelete}
     className={`flex justify-center items-center rounded-full w-7 h-7 hover:bg-gray-50/20  ${
     showIcon ? "" : "hidden"
     }`}
     >

       <FaTrash />

     </span>

     <span
     onClick={() => setShowModal(true)}
     className={`flex justify-center items-center rounded-full w-7 h-7 hover:bg-gray-50/20  ${
     showIcon ? "" : "hidden"
     } `}
     >

       <FaPen />

     </span>

     <span
     onClick={() => setShowIcon(!showIcon)}
     className={`flex justify-center items-center hover:bg-gray-50/20 rounded-full w-7 h-7 `}
     >

       {showIcon ? <FaTimesCircle /> : <FaEllipsisH /> }
           
     </span>
</div>

</div>

{showModal ? (
<>
<div onClick={() => setShowModal(false)} className="bg-black/60 dark:bg-sky-300/[0.15]  text-gray-900 dark:text-gray-50  transition-all ease-in-out duration-500 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">

<div onClick={(e)=>e.stopPropagation()} className="relative w-full lg:w-3/4 my-6 lg:mx-auto mx-2 z-50 shadow-lg shadow-black/60 bg-gray-100 dark:bg-[#0c0f11]  rounded-md  max-w-3xl">
              {/*content*/}
<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                {/*header*/}
<div className="flex items-start justify-between p-5  rounded-t">

     <h3 className="text-3xl font-semibold">Edit Education</h3>
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

     <EditEducation 
     details={details} 
     educationData={educationData}
     setEducationData={setEducationData}
     showModal={setShowModal} />

</div>
                {/*footer*/}
</div>
</div>
</div>
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
</>
) : null}
</>
  );
}

export default EducationLayout;
