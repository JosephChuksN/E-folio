import { React, useContext } from "react";  
import AppContext from "../myContext/Context";

function Profile(){
     const {aboutText,  educationDetails } =useContext(AppContext)
    return(
        <div className="text-gray-100 ">
            <div className=" text-gray-100  ">
                <div className="translate-y-20   mb-28 ">
                    <div className="mx-3"><img className="lg:w-40 lg:h-40 w-32 h-32 rounded-full " src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" /></div>
                    <span className=" flex flex-col mt-5 pl-3">
                    <h1 className="text-xl font-bold">Nwosu Joseph</h1>
                    <h1 className="text-slate-400">I'm a web developer</h1>
                    </span>
                </div>

                <div className="md:grid grid-cols-2 md:gap-5 border-t mx-2 border-slate-600">
                <div className="text-gray-100  p-3">
                 <h1 className="text-2xl mb-3 font-bold">About</h1>
                 <span>
                <p className="justify-center">{aboutText.textArea}</p>
                 </span>
               </div>
                    <div  className="text-gray-100  p-3">
                        <h1  className="text-2xl mb-3 font-bold">Location</h1>
                        <span className="flex flex-col p-1 bg-[#1e293b] border-slate-50/20 border rounded-md">
                            <p className="text-xl ">Abuja, Nigeria</p>
                            <p className="pt-5 flex items-center gap-2 text-sky-400">Portfolio <ion-icon name="link"></ion-icon></p>
                           <span className="pt-5 flex items-center text-purple-400"><a href="https://nwosu-joseph-portfolio.vercel.app/">Nwosu Joseph  <ion-icon name="link"></ion-icon></a></span>
                        </span>
                    </div>
              <div className="p-3">
                <h1  className="text-2xl mb-3 font-bold">Education</h1>
                <div>{ educationDetails.map(data => (
                    <div className="flex gap-5 justify-between flex-col border-l-8 rounded-md mb-4 border-sky-400  pl-3">
                        <div className="flex gap-3 items-center">
                            <span className="text-xl">Institution:</span>
                            <span className="font-light">{data.institution}</span>
                        </div>
                       <div  className="flex gap-3 items-center">
                        <span className="text-xl">Course:</span>
                        <span className="font-light">{data.Degree}</span>
                       </div>
                      <div  className="flex gap-3 items-center">
                        <span className="text-xl">Date:</span>
                        <span className="font-light">{`${data.startDate} - ${data.endDate}`}</span>
                      </div>
                    </div>
                ))}</div>
              </div>
                </div>
               
            </div>
        </div>
    )

}
export default Profile;