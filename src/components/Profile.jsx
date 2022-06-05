import React from "react";
import About from "./About";
import Education from "./Education";

function Profile(){

    return(
        <div className="text-gray-100 ">
            <div className="h-40 bg-blue-400  text-gray-100  ">
                <div className="translate-y-32 lg:flex mb-44">
                    <img className="w-40 ml-10 rounded-full " src="https://picsum.photos/536/354" alt="" />
                    <span className="lg:pl-5 lg:mt-10 flex flex-col mt-5 pl-10">
                    <h1 className="text-xl">Nwosu Joseph</h1>
                    <h1 className="text-slate-400">I'm a web developer</h1>
                    </span>
                </div>

                <div className="md:grid grid-cols-2 md:gap-5 border-t mx-2 border-slate-600">
                    <About />
                    <div  className="text-gray-100  p-3">
                        <h1  className="text-2xl mb-3">Location</h1>
                        <span className="flex flex-col">
                            <p className="text-xl ">Abuja, Nigeria</p>
                            <p className="pt-5 text-blue-400">Portfolio</p>
                           <span className="pt-5 text-purple-400"><a href="https://nwosu-joseph-portfolio.vercel.app/">Nwosu Joseph  <ion-icon name="link"></ion-icon></a></span>
                        </span>
                    </div>
                    <Education />
                </div>
               
            </div>
        </div>
    )

}
export default Profile;