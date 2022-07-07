import React, { useState, createContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


const AppContext = createContext();

const AppProvider = ({initailTheme, children }) =>{

  //This function sets the default theme
  const getInitailTheme = () => {
     if(typeof window !== "undefined" && window.localStorage){
      const storedPrefs = window.localStorage.getItem("color-theme")

    if(typeof storedPrefs === "string"){
      return storedPrefs;
    }
    if(window.matchMedia("prefers-color-theme: dark")){
      return "dark"
    }

     }
  return "light";
  }

  const [theme, setTheme] = useState(getInitailTheme)

  //This function checks and sets the theme to user preference
  const checkTheme = (existing) => {
      const root = window.document.documentElement;
      const isDark = existing === "dark"
      root.classList.remove(isDark? "light" : "dark")
      root.classList.add(existing)
      localStorage.setItem("color-theme", existing)

  }
   
   if(initailTheme){
    checkTheme(initailTheme)
   }
   useEffect(()=>{
    checkTheme(theme)
   }, [theme])


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

  const editEducation = (id, editedEducation) => {
       setEducationDetails(educationDetails.map(details => (details.id === id? editedEducation : details)))
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setAboutText(aboutText => ({

      [name] : value
    }))
  }
 const handleOnDelete = (id) =>{
  setEducationDetails(educationDetails.filter(data => data.id !== id))
 }
  
  
  return(
   <AppContext.Provider
   value={{
       theme,
       setTheme,
       isSidebarOpen,
       aboutText,
       educationDetails,
       openSidebar,
       closeSidebar,
       handleChange,
       addNewEdu,
       editEducation,
       handleOnDelete,
      
      
       
   }}
   >


       {children}
   </AppContext.Provider>
);
 

}

export { AppProvider };
  
 export default AppContext;