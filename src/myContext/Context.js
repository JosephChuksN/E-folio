import React, { useState, createContext } from 'react'


const AppContext = createContext();

const AppProvider = ({ children }) =>{

 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [aboutText, setAboutText] = useState({
      textArea: "A web developer with 3 years of experience in frontend developer  and a graduate of the University of maiduguri, based in Abuja Nigeria,  I am an enthusiast in learning new technologies relating to web development  always curious about solving problems relating to my field.  You will find me watching football matches and spending time with family when not coding."
     ,
    })
    const [educationData, setEducationData] = useState([
      {
        institute: "University of Maiduguri",
        degree: "BSc.",
        startDate: "2020-10-11",
        endDate: "2020-10-13",
      }
    ])
    
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleChange = (event) => {
    const {name, value} = event.target
    setAboutText(aboutText => ({

      [name] : value
    }))
  }

  const handleEducationData = () => {
    educationData.push({
      institute: "",
        degree: "",
        startDate: "",
        endDate: "",
    })
  }
    const handleEduDataChange = (index, event) => {
      const inputValues = [...educationData]
 
inputValues[index][event.target.name] = [event.target.value]
      setEducationData(inputValues)
      
    }
  
  return(
   <AppContext.Provider
   value={{
       isSidebarOpen,
       aboutText,
       educationData,
       openSidebar,
       closeSidebar,
       handleChange,
       handleEducationData,
       handleEduDataChange,
       
   }}
   >


       {children}
   </AppContext.Provider>
);
 

}

export { AppProvider };
  
 export default AppContext;