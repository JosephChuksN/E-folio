import { React } from "react";  





const Profile = (props) => {



return(
<div className=" ">

<div className=" text-gray-900 dark:text-gray-50  ">

<div className="translate-y-20   mb-28 ">

<div className="mx-3"><img className="lg:w-40 lg:h-40 w-32 h-32 rounded-full " src={props.user.profileImg} alt="" /></div>
<div className=" flex  flex-col mt-5 pl-3">

     <h1 className="text-xl font-bold break-words">{props.user.fullName}</h1>
     <p className=" dark:text-slate-400 ">{props.user.city}</p>

</div>

<div className="px-3  "><span className="text-gray-900 font-bold inline  break-all dark:text-white text-base">{props.user.jobTitle}</span></div>
                    
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
      <span className="pt-5 flex items-center text-purple-700"><a href="https://nwosu-joseph-portfolio.vercel.app/">{props.user.fullName}<ion-icon name="link"></ion-icon></a></span>
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
     <h1  className="text-2xl mb-3 font-bold">Eperience</h1>
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

</div>

</div>
</div>
 )

}

export default Profile;