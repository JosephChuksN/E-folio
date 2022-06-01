import { React, useState } from "react";


function Education(){

    


    const [inputSpace, setInputSpace] = useState([
        {id: 1, institute: " ", major: " ", degree: " " }
    ])

    
   const addInputs = () => {
      setInputSpace([...inputSpace, {institute: " ", major: " ", degree: " " }])
      console.log('done')
   }
   const removeInput = () => {
       const values = [...inputSpace]
       values.pop()
       setInputSpace(values)

   }

return(
   
    <div className="w-full lg:translate-x-12 p-3  flex flex-col lg:w-1/2  md:w-3/4 md:mx-auto shadow relative top-40 ">
          <h1 className="mb-3 text-3xl p-2 rounded bg-blue-700 text-gray-100">Education</h1>
       <div>
       {
            inputSpace.map((inputs) => (
                <form key={inputs.id} className="flex flex-col gap-4 p-2 bg-slate-200 rounded mb-10 " action="">
           
                   
                        <div className="lg:grid lg:grid-cols-2 gap-5" >
                            <div className="flex flex-col gap-2 text-xl">
                        <label htmlFor="Institute">Institute / School</label>
                        <input className="border p-2 border-blue-800/50 rounded" 
                        type="text" 
                        name="Institute" 
                        id="Institute" 
                      
                        />
                    </div>
                    <div className="flex flex-col gap-2 text-xl">
                        <label htmlFor="company">Major / Department</label>
                        <input className="border p-2 border-blue-800/50 rounded" 
                        type="text" 
                        name="major" 
                        id="major"
                        
                         />
                    </div>
                    <div className="flex flex-col gap-2 text-xl">
                        <label htmlFor="">Degree</label>
                        <input className="border p-2 border-blue-800/50 rounded" 
                        type="text" 
                        name="degree" 
                        id="degree"
                        
                         /> 
                       
                       
                      
                    </div>
                    
                        </div>  
            </form>
 ) )
           }
           <div className="flex flex-col gap-2 text-xl mb-2">
                        <label htmlFor="skills">Qualifications/Skills</label>
                       <textarea className="border p-2 border-blue-800/50 rounded" 
                        name="skills" 
                        id="skills" 
                        
                       
                       />
                    </div>
       </div>
       
        <div className="flex gap-7 z-[10]">
        <span onClick={addInputs} className="text-blue-800 text-xl  cursor-pointer "><ion-icon name="add-circle-outline"></ion-icon> Add</span>
        <span onClick={removeInput} className={`text-red-900 text-xl  ${inputSpace.length <= 1 ? "hidden" : "block" }`}><ion-icon name="remove-circle-outline"></ion-icon> Delete</span>
        </div>
        
        <div className=" items-start  flex"> <span className=" h-fit mt-8   p-2 w-1/4 text-xl text-center rounded bg-blue-700 text-gray-50" href=" ">Next</span></div>
    </div>
   
)




}
export default Education;