import { React, useState, useContext} from 'react'
import EditEducation from './EditEducation';
import AppContext from '../../myContext/Context';


function EducationLayout({details}){
    const [showModal, setShowModal] = useState(false);
    const {handleOnDelete} = useContext(AppContext)

    return(
      <>
          <div className='flex justify-between'>
          <div className='flex lg:gap-10 gap-3'>
            <span>{details.institution}</span>
            <span>{details.Degree}</span>
            <span>{`${details.startDate} - ${details.endDate}`}</span>
          </div>
          <div className='flex gap-5'>
            <span onClick={() => handleOnDelete(details.id)} ><ion-icon name="trash"></ion-icon></span>
            <span onClick={() => setShowModal(true)}><ion-icon name="create"></ion-icon></span>
          </div>
          </div>
      
      {showModal ? (
        <>
          <div
            className="backdrop-blur-sm transition-all ease-in-out duration-500 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full lg:w-3/4 my-6 lg:mx-auto mx-2 shadow-sm shadow-gray-200/50 max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-900 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                   Edit
                  </h3>
                  <button  onClick={() => setShowModal(false)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
                </div>
                {/*body*/}
                <div className="relative  lg:p-6 p-4 flex-auto">
                 <EditEducation 
                 details={details}
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

export default EducationLayout;