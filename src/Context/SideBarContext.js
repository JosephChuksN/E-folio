import { React, useState, createContext,} from 'react'
  

const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };


  return ( 
    <SideBarContext.Provider value = {{ isSidebarOpen, openSidebar, closeSidebar,}} >


    {children}
      
    
    </SideBarContext.Provider>
    
  );
}

export {SideBarProvider};
  
export default SideBarContext;