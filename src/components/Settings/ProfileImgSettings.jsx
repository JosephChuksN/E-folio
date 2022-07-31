import {React, useRef } from "react";
import { FaCamera } from "react-icons/fa"

const ProfileImgSettings = () =>{
const  upLoadInput = useRef(null)
const upLoadedImg = useRef(null)

const handleUpload = (e) =>{
    const [file] = e.target.files;
    if(file){
        const reader = new FileReader()
        const { current } = upLoadedImg
        upLoadedImg.file = file
        reader.onload = (e) =>{
            current.src = e.target.result
        }
        reader.readAsDataURL(file);
    }
    
}

return(

    <div className="mx-auto">
    <div className="absolute  lg:top-40 lg:right-[23.25rem] top-40 right-44 text-2xl z-20">
    <span onClick={()=> upLoadInput.current.click()}><FaCamera /></span>
    <input className="hidden"
    type="file" 
    name="" 
    id=""
    ref={upLoadInput}
    onChange={handleUpload}
    accept="image/*"
    multiple={false}
    />
    </div>
   
      {/* */}
    <img className="lg:max-w-44 lg:max-h-44 max-w-32 max-h-32 w-auto h-auto block rounded-full " 
    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" 
    alt=""
    ref={upLoadedImg}
     />
    
    </div>
)
    
}

export default ProfileImgSettings;