import React, {
  useState,
  createContext,
} from 'react'
import {
  v4 as uuidv4
} from 'uuid';


const AppContext = createContext();

const AppProvider = ({ children }) => {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


 
const [experienceDetails, setExperienceDetals] = useState([
 {id:uuidv4(), company:"Openfinance", Role:"Front-end & UI Developer", jobDescription:"Development of corporate websites, newsletters,landings, pure HTML layout, CSS and Javascript", startDate:"2021-07", endDate:"2021-11"},
 {id:uuidv4(), company:"UNIR, Universidad Internacional de la Rioja", Role:"Front-end designer & Web designer", jobDescription:"Development and testing of corporate mailings, landings, and corporate banners design.", startDate:"2021-07", endDate:"2021-11",}
])


  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

 

  
  const editExperience =(id, editedExperience) =>{
    setExperienceDetals(experienceDetails.map((details)=>(
      details.id === id ? editedExperience : details
    )))
  }
  const deleteExperience = (id)=>{
    setExperienceDetals(experienceDetails.filter(data =>(data.id !== id)))

  }
  const addExperience =(company, Role, jobDescription, startDate, endDate)=>{
    setExperienceDetals([...experienceDetails, {id:uuidv4(), company, Role, jobDescription, startDate, endDate}])
  }


  return ( 
    <AppContext.Provider value = {
      {
        isSidebarOpen,
        experienceDetails,
        openSidebar,
        closeSidebar,
        editExperience,
        deleteExperience,
        addExperience,



      }
    } >


    {
      children
    } </AppContext.Provider>
    
  );


}

export {
  AppProvider
};

export default AppContext;