import { React, useState } from "react"

function NewExperience(){

    const [inputSpace, setInputSpace] = useState([
        {occupation: " ", company: " ", summary: " " }
    ])

   const addInputs = () => {
      setInputSpace([...inputSpace, {occupation: " ", company: " ", summary: " " }])
      console.log('done')
   }
   const removeInput = () => {
       const values = [...inputSpace]
       values.pop()
       setInputSpace(values)

   }

return(
    <div className="w-full p-3 flex flex-col md:w-1/2 lg:w-3/4 md:mx-auto  ">
          <h1 className="mb-3 text-3xl">Experience</h1>
        <form className="flex flex-col gap-4 p-2 bg-gray-200/50 rounded " action="">{
           
                inputSpace.map((inputs, index) => (
                    <div className="lg:grid lg:grid-cols-2 gap-5" key={index}>
                        <div className="flex flex-col gap-2 text-xl">
                    <label htmlFor="occupation">Occupation/Title</label>
                    <input className="border p-2 border-blue-800/50 rounded" 
                    type="text" 
                    name="occupation" 
                    id="occupation" 
                  
                    />
                </div>
                <div className="flex flex-col gap-2 text-xl">
                    <label htmlFor="company">Company</label>
                    <input className="border p-2 border-blue-800/50 rounded" 
                    type="text" 
                    name="company" 
                    id="company"
                    
                     />
                </div>
                <div className="flex flex-col gap-2 text-xl">
                    <label htmlFor="">Summary</label>
                   <textarea className="border p-2 border-blue-800/50 rounded" 
                    name="summary" 
                    id="summary" 
                    
                   
                   />
                </div>
                    </div>
                 ) )
            }
             
               
        </form>
        <div className="flex gap-7 z-[30]">
        <span onClick={addInputs} className="text-blue-800/50 text-3xl  cursor-pointer "><ion-icon name="add-circle-outline"></ion-icon></span>
        <span onClick={removeInput} className={`text-blue-800/50 text-3xl  ${inputSpace.length <= 1 ? "hidden" : "block" }`}><ion-icon name="remove-circle-outline"></ion-icon></span>
        </div>
        
        <div className=" items-center w-full flex"> <a className="mx-auto h-fit mt-14 w-full  p-2 w-1/4 text-xl text-center rounded bg-blue-800/50 text-gray-50" href=" ">Next</a></div>
    </div>
)




}
export default NewExperience;