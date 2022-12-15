import { useState } from "react";



const useSidebarControl = ()=>{

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebar = ()=> setIsSidebarOpen(!isSidebarOpen)

    return {isSidebarOpen, handleSidebar}

}

export default useSidebarControl;