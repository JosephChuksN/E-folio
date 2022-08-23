import {React} from "react";
import {FaEnvelope, FaBirthdayCake, FaUser} from 'react-icons/fa'


// const ContactCard = () =>{
//     return(
//         <div>
//             <span>Contact Info.</span>
//             <div>
//                 <span><FaEnvelope /></span>
//                 <div>
//                     <span>Email</span>
//                     <span>bvhhghcgg@gsg.com</span>
//                 </div>
//             </div>
//         </div>
//     )
// }


const ContactInfo = ({setShow, user}) => {

 
    return(
       <>
       
<div  onClick={() => setShow(false)}  className="bg-black/60 dark:bg-sky-300/[0.15]  text-gray-900 dark:text-gray-50  transition-all ease-in-out duration-500 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">

<div onClick={(e)=> e.stopPropagation()} className="relative w-full lg:w-3/4 mb-36  md:mx-auto mx-2 z-50 shadow-lg shadow-black/60 bg-gray-100 md:mb-96 lg:mb-52 dark:bg-[#0c0f11] rounded-md  max-w-2xl">
              {/*content*/}
<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                {/*header*/}
<div className="flex items-start justify-between p-4  border-b-[1px] border-gray-900/20 dark:border-slate-50/20  rounded-t">

     <h3 className="text-2xl font-semibold">{`${user.firstName} ${user.lastName}`}</h3>
     <button
     onClick={() => setShow(false)}
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
<div className="relative  lg:p-6 p-4 flex flex-col gap-5">
        <span className="text-2xl">Contact Info</span>
        <div className="flex gap-5">
                <span className="pr-2 pt-1 pl-1 text-xl"><FaUser /></span>
                <div className="flex flex-col">
                    <span>Profile link</span>
                    <span className="text-[#1a73e8]"><a href={`${user.firstName}${user.lastName}.onlinecv.org`}>{`onlinecv.org/in/${user.firstName.toLowerCase()}${user.lastName.toLowerCase()}`}</a></span>
                </div>
            </div>
            <div className="flex gap-5">
                <span className="pr-2 pt-1 pl-1 text-xl"><FaEnvelope /></span>
                <div className="flex flex-col">
                    <span>Email</span>
                    <span className="text-[#1a73e8]"><a href="mailto:someone@example.com">{user.email}</a></span>
                </div>
            </div>
            <div className="flex gap-5">
                <span className="pr-2 pt-1 pl-1 text-xl"><FaBirthdayCake /></span>
                <div className="flex flex-col">
                    <span>Birthday</span>
                    <span className="text-slate-400 ">November 9</span>
                </div>
            </div>
        

</div>
                {/*footer*/}
</div>
</div>
</div></>
    )
}

export default ContactInfo;