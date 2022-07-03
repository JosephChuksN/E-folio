import { React,  useContext, useState } from 'react'
import EducationLayout from './EducationLayout'
import AddNewEducation from './AddNewEducation'
import AppContext from '../../myContext/Context'


function Education(){
const { educationDetails} = useContext(AppContext)
const [showModal, setShowModal] = useState(false);

    return(
  <>

 <div className='lg:mt-36'>
   
<button
        className="bg-transparent border-2 border-blue-700 hover:bg-blue-800/50 lg:absolute right-80 top-24 translate-y-20 translate-x-72 lg:translate-x-0 lg:translate-y-0 text-white active:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
      New
      </button>
  <div className='mt-20 text-gray-100 lg:w-3/4'>{
    educationDetails.map(data => {
        return(
            <div className='p-3  ' key={data.id}>
                <EducationLayout details={data}  />
            </div>
        )
    })
    }</div>


      {showModal ? (
        <>
          <div
            className="backdrop-blur-sm  justify-center items-center text-gray-100 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full lg:w-3/4 my-6 lg:mx-auto mx-2 bg-[#1e293b]/80 rounded-md max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5  rounded-t">
                  <h3 className="text-3xl font-semibold">
                   Add Education
                  </h3>
                  <button  onClick={() => setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-sky-300/[0.15] hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                </button>
                </div>
                {/*body*/}
                <div className="relative lg:p-6 p-4 flex-auto">
                 <AddNewEducation showModal={setShowModal}/>
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