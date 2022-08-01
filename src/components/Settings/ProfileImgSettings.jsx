import {React, useRef } from "react";
import { FaCamera } from "react-icons/fa"

const ProfileImgSettings = (props) =>{
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
    <img className="lg:w-32 lg:h-32 max-w-32 max-h-32 block rounded-full " 
    src={props.user.profileImg} 
    alt=""
    ref={upLoadedImg}
     />
    
    </div>
)
    
}

export default ProfileImgSettings;