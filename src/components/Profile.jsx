import { React, useContext } from "react";  
import AppContext from "../myContext/Context";

function Profile(){
     const {aboutText} =useContext(AppContext)
    return(
        <div className="text-gray-100 ">
            <div className="h-40 bg-blue-400  text-gray-100  ">
                <div className="translate-y-32 lg:flex mb-44 lg:w-96">
                    <img className="w-40 ml-10 rounded-[70%] " src="https://picsum.photos/536/354" alt="" />
                    <span className="lg:pl-5 lg:mt-10 flex flex-col mt-5 pl-10">
                    <h1 className="text-xl">Nwosu Joseph</h1>
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