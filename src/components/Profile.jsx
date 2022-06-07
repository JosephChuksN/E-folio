import { React, useContext } from "react";  
import AppContext from "../myContext/Context";

function Profile(){
     const {aboutText} =useContext(AppContext)
    return(
        <div className="text-gray-100 ">
            <div className=" text-gray-100  ">
                <div className="translate-y-20 lg:mt-3  mb-28 ">
                    <div className="mx-3"><img className="lg:w-40 lg:h-40 w-32 h-32 rounded-full " src="https://picsum.photos/536/354" alt="" /></div>
                    <span className=" flex flex-col mt-5 pl-3">
                    <h1 className="text-xl font-bold">Nwosu Joseph</h1>
                    <h1 className="text-slate-400">I'm a web developer</h1>
                    </span>
                </div>

                <div className="md:grid grid-cols-2 md:gap-5 border-t mx-2 border-slate-600">
                <div className="text-gray-100  p-3">
                 <h1 className="text-2xl mb-3">About</h1>
                 <span>
                <p>{aboutText.textArea}</p>
                 </span>
               </div>
                    <div  className="text-gray-100  p-3">
                        <h1  className="text-2xl mb-3">Location</h1>
                        <span className="flex flex-col">
                            <p className="text-xl ">Abuja, Nigeria</p>
                            <p className="pt-5 text-blue-400">Portfolio</p>
                           <span className="pt-5 text-purple-400"><a href="https://nwosu-joseph-portfolio.vercel.app/">Nwosu Joseph  <ion-icon name="link"></ion-icon></a></span>
                        </span>
                    </div>
                    <div className="p-3">
            <h1 className="text-2xl mb-3">Education</h1>
            <div className="rounded-md shadow shadow-slate-400">
                <div className="flex items-center lg:gap-5 p-3 gap-1 lg:p-5 rounded-md">
               <div className="flex gap-2 items-center ">
               <div className="rounded-full px-2 py-1 text-gray-900 bg-blue-400">U</div>
               <h1>Unimaid</h1>
               </div>
               <span className="flex items-center"><ion-icon name="calendar"></ion-icon> <p>2022-10-20 - 2022-10-20</p></span>
               <h1>Bsc.</h1>
                </div>
            </div>
        </div>
                </div>
               
            </div>
        </div>
    )

}
export default Profile;