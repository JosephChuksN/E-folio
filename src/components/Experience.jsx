import { React, useState } from "react"

function NewExperience(){

    const [inputSpace, setInputSpace] = useState([
        {id: 1, occupation: " ", company: " ", summary: " " }
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
   
    <div className="w-full lg:translate-x-12 p-3  flex flex-col lg:w-[80%]   md:w-3/4 md:mx-auto lg:ml-[17rem]  relative top-40 ">
          <h1 className="mb-3 text-3xl p-2 rounded bg-blue-700 text-gray-100">Experience</h1>
       <div>
       {
            inputSpace.map((inputs) => (
                <form key={inputs.id} className="flex flex-col gap-4 p-2 bg-slate-200 rounded mb-10 " action="">
           
                   
                        <div className="lg:grid lg:grid-cols-2 gap-5" >
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
                    
                
                 
                   
            </form>
 ) )
           }
       </div>
        <div className="flex gap-7 z-[10]">
        <span onClick={addInputs} className="text-blue-800 text-xl  cursor-pointer "><ion-icon name="add-circle-outline"></ion-icon> Add</span>
        <span onClick={removeInput} className={`text-red-900 text-xl  ${inputSpace.length <= 1 ? "hidden" : "block" }`}><ion-icon name="remove-circle-outline"></ion-icon> Delete</span>
        </div>
        
        <div className=" items-start  flex"> <span className=" h-fit mt-8   p-2 w-1/4 text-xl text-center rounded bg-blue-700 text-gray-50" href=" ">Next</span></div>
    </div>
   
)




}
export default NewExperience;