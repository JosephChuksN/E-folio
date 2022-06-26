import React, { useState, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';


const AppContext = createContext();

const AppProvider = ({ children }) =>{

 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [aboutText, setAboutText] = useState({
      textArea: "A web developer with 3 years of experience in frontend developer  and a graduate of the University of maiduguri, based in Abuja Nigeria,  I am an enthusiast in learning new technologies relating to web development  always curious about solving problems relating to my field.  You will find me watching football matches and spending time with family when not coding."
     ,
    })
   
    const [educationDetails, setEducationDetails] = useState([
      {
        id: uuidv4(),
        institution: "UNIMAID",
        Degree: "ANATOMY",
        startDate: "2020-10-13",
        endDate: "2020-12-13",
      },
      {
        id: uuidv4(),
        institution: "UMUDIKE",
        Degree: "BIOLOGY",
        startDate: "2021-11-23",
        endDate: "2021-12-23",
      }
    ])
  
  
 
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const addNewEdu = (institution, Degree, startDate, endDate) => {
    setEducationDetails([...educationDetails, {id:uuidv4(), institution, Degree, startDate, endDate}])
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setAboutText(aboutText => ({

      [name] : value
    }))
  }

  
  
  return(
   <AppContext.Provider
   value={{
       isSidebarOpen,
       aboutText,
       educationDetails,
       openSidebar,
       closeSidebar,
       handleChange,
       addNewEdu,
      
      
       
   }}
   >


       {children}
   </AppContext.Provider>
);
 

}

export { AppProvider };
  
 export default AppContext;