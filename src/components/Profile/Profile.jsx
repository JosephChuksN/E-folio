import { React, useState } from "react";  
import ContactInfo from "./ContactInfo";






const Profile = (props) => {
 const [showContactInfo, setShowContactInfo] = useState(false)


return(
<div className=" ">

<div className=" text-gray-900 dark:text-gray-50  ">

<div className="translate-y-20   mb-28 ">

<div className="mx-3">
     <div className="lg:w-40 lg:h-40 w-32 h-32 rounded-full bg-no-repeat bg-cover flex items-center" style={{backgroundImage: `url(${props.user.profileImg})`}}>
      </div>
</div>
<div className=" flex  flex-col mt-5 pl-3">

     <h1 className="text-xl font-bold break-words mb-1">{`${props.user.firstName} ${props.user.lastName}`}</h1>
     <span className="text-gray-900  inline  break-all dark:text-white mb-0.5 text-base">{props.user.jobTitle}</span>
     

</div>

<div className="px-3 flex gap-2 "><p className=" dark:text-slate-400 ">{props.user.city}</p><hr className="w-0.5 h-0.5 rounded-full bg-black dark:bg-white flex items-center my-auto"/><span onClick={()=>setShowContactInfo(true)} className="text-[#1a73e8] hover:underline cursor-pointer">Contact info</span></div>
                    
</div>

<div className="md:grid grid-cols-2 md:gap-5 border-t mx-2 border-slate-600">

<div className="text-gray-900 dark:text-gray-50  p-3">

     <h1 className="text-2xl mb-3 font-bold">About</h1>
     <span>
     <p className="text-justify tracking-tight">{props.aboutText}</p>
     </span>

</div>
<div  className="text-gray-900 dark:text-gray-50  p-3">
      <h1  className="text-2xl mb-3 font-bold">External Links</h1>
      <span className="flex flex-col p-1 bg-slate-600/30 dark:bg-[#1e293b]  border-slate-50/20 border rounded-md">
                            
      <p className="pt-5 flex items-center gap-2 text-blue-700 dark:text-sky-400">Portfolio <ion-icon name="link"></ion-icon></p>
      <span className="pt-5 flex items-center text-purple-700"><a href=" " target="_blank" rel="noreferrer" >{`onlinecv.org/in/${props.user.firstName.toLowerCase()}${props.user.lastName.toLowerCase()}`}<ion-icon name="link"></ion-icon></a></span>
      </span>

</div>
<div className="p-3">
     <h1  className="text-2xl mb-3 font-bold">Education</h1>

<div>{props.educationData.map(data => (
     

<div key={data.id} className="grid grid-cols-2 gap-3 shadow-md dark:shadow-black/40 lg:w-[70%] items-center border-l-8 rounded-md mb-6 border-[#1a73e8]  pl-3 pb-3 ">
                        
    

     <span className="text-xl ">Institution:</span>
     <span className="">{data.institution}</span>
     <span className="text-xl">Course:</span>
     <span className="">{data.Degree}</span>
     <span className="text-xl ">Date:</span>
     <span className="">{`${data.startDate} - ${data.endDate}`}</span>
                    
</div>
))}</div>

</div>

<div className="p-3">
     <h1  className="text-2xl mb-3 font-bold">Experience</h1>
     {props.experienceData.map((details)=>{
return(
<div key={details.id}>
                   
<div className="p-2 border-2 border-slate-400/20 rounded mb-6">

     <span className="font-light">{`${details.startDate} - ${details.endDate}`}</span>
     <div className="flex flex-col">
     <span className="lg:text-2xl text-xl font-bold  mt-1">{details.company}</span>
     <span className="font-bold ">{details.Role}</span>
     <p className="mt-4 ">{details.jobDescription}</p>

</div>

</div>

</div>
)})}

</div>

<div className="p-3">
<h1  className="text-2xl mb-3 font-bold">Skills</h1>
    <div className=" grid lg:grid-cols-4 grid-cols-3 gap-3 items-center text-center">
    <span className="p-2 bg-[#1a73e8] rounded">JavaScript</span>
    <span className="p-2 bg-[#1a73e8] rounded">ReactJs</span>
    <span className="p-2 bg-[#1a73e8] rounded">LeaderShip</span>
    <span className="p-2 bg-[#1a73e8] rounded">Teamwork</span>
    </div>
</div>

</div>

</div>
{showContactInfo ? <ContactInfo user={props.user} setShow={setShowContactInfo} /> : null }
</div>
 )

}

export default Profile;