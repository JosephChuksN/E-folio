import { React, useState } from 'react'
import EducationLayout from './EducationLayout'
import AddNewEducation from './AddNewEducation'



function Education(props){

const [showModal, setShowModal] = useState(false);

 return(
<>

<div className='lg:mt-[7.5rem]  '>
<div className='lg:pt-6 pt-36'>
   <h1 className="pl-3 text-5xl lg:mb-18 mb-20 ">Education</h1>
  <button
        className="bg-[#1a73e8] hover:bg-blue-800  active:bg-emerald-800  absolute lg:right-80 lg:top-56 top-60 right-2  text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
      New
  </button>
</div>
<div className='mt-24 lg:mt-0 text-gray-100 lg:w-3/4'>{
    props.educationData.map(data => {
        return(
        <div className='p-3  ' key={data.id}>
                <EducationLayout
                 details={data} 
                 educationData={props.educationData}
                 setEducationData={props.setEducationData} />
            </div>
       )
       })
       }</div>


      {showModal ? (
        <>
<div className="bg-black/60  justify-center items-center text-gray-900 dark:text-gray-100 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
<div className="relative w-full lg:w-3/4 my-6 lg:mx-auto mx-2 shadow-lg shadow-black/60 bg-gray-100 dark:bg-[#1e293b]/80  rounded-md max-w-3xl">
              {/*content*/}
<div className="border-0 rounded-lg  relative flex flex-col w-full  outline-none focus:outline-none">
                {/*header*/}
<div className="flex items-start justify-between p-5  rounded-t">
        <h3 className="text-3xl font-semibold">
                   Add Education
         </h3>

   <button  onClick={() => setShowModal(false)} type="button" className="text-gray-900 bg-transparent hover:bg-slate-600/10  dark:hover:bg-gray-50/20 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:text-gray-50" data-modal-toggle="defaultModal">
   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
   </button>

</div>
                {/*body*/}
<div className="relative lg:p-6 p-4 flex-auto">
                 <AddNewEducation 
                   educationData={props.educationData}
                   setEducationData={props.setEducationData}
                   showModal={setShowModal}/>
</div>
                {/*footer*/}
              
</div>
</div>
</div>
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
</>
) : null}
</div>
</>
)
}

export default Education