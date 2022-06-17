import React, { useState, createContext } from 'react'


const AppContext = createContext();

const AppProvider = ({ children }) =>{

 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [aboutText, setAboutText] = useState({
      textArea: `A web developer with 3 years of experience in frontend developer 
    and a graduate of the University of maiduguri, based in Abuja Nigeria, 
    I am an enthusiast in learning new technologies relating to web development 
    always curious about solving problems relating to my field. 
    You will find me watching football matches and spending time with family when not coding.`
     ,
    })
    
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
  return(
   <AppContext.Provider
   value={{
       isSidebarOpen,
       aboutText,
       openSidebar,
       closeSidebar,
       handleChange,
       
   }}
   >


       {children}
   </AppContext.Provider>
);
 

}

export { AppProvider };
  
 export default AppContext;