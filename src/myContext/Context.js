import React, {
  useState,
  createContext,
  useEffect
} from 'react'
import {
  v4 as uuidv4
} from 'uuid';


const AppContext = createContext();

const AppProvider = ({
  initailTheme,
  children
}) => {

  //This function sets the default theme
  const getInitailTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedPrefs = window.localStorage.getItem("color-theme")

      if (typeof storedPrefs === "string") {
        return storedPrefs;
      }
      if (window.matchMedia("prefers-color-theme: dark")) {
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
    root.classList.remove(isDark ? "light" : "dark")
    root.classList.add(existing)
    localStorage.setItem("color-theme", existing)

  }

  if (initailTheme) {
    checkTheme(initailTheme)
  }
  useEffect(() => {
    checkTheme(theme)
  }, [theme])


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [aboutText, setAboutText] = useState({
    textArea: "A web developer with 3 years of experience in frontend developer  and a graduate of the University of maiduguri, based in Abuja Nigeria,  I am an enthusiast in learning new technologies relating to web development  always curious about solving problems relating to my field.  You will find me watching football matches and spending time with family when not coding.",
  })

  const [educationDetails, setEducationDetails] = useState([{
      id: uuidv4(),
      institution: "UNIMAID",
      Degree: "ANATOMY",
      startDate: "MAY 2022",
      endDate: "JUN. 2022",
    },
    {
      id: uuidv4(),
      institution: "UMUDIKE",
      Degree: "BIOLOGY",
      startDate: "AUG 2021",
      endDate: "NOV 2021",
    }
  ])
const [experienceDetails, setExperienceDetals] = useState([
 {id:uuidv4(), company:"Openfinance", Role:"Front-end & UI Developer", jobDescription:"Development of corporate websites, newsletters,landings, pure HTML layout, CSS and Javascript"},
 {id:uuidv4(), company:"UNIR, Universidad Internacional de la Rioja", Role:"Front-end designer & Web designer", jobDescription:"Development and testing of corporate mailings, landings, and corporate banners design.",}
])


  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const addNewEdu = (institution, Degree, startDate, endDate) => {
    setEducationDetails([...educationDetails, {
      id: uuidv4(),
      institution,
      Degree,
      startDate,
      endDate
    }])
  }

  const editEducation = (id, editedEducation) => {
    setEducationDetails(educationDetails.map(details => (details.id === id ? editedEducation : details)))
  }

  const handleChange = (event) => {
    const {
      name,
      value
    } = event.target
    setAboutText(aboutText => ({

      [name]: value
    }))
  }
  const handleOnDelete = (id) => {
    setEducationDetails(educationDetails.filter(data => data.id !== id))
  }

  const editExperience =(id, editedExperience) =>{
    setExperienceDetals(experienceDetails.map((details)=>(
      details.id === id ? editedExperience : details
    )))
  }


  return ( 
    <AppContext.Provider value = {
      {
        theme,
        isSidebarOpen,
        aboutText,
        educationDetails,
        experienceDetails,
        openSidebar,
        closeSidebar,
        handleChange,
        addNewEdu,
        editEducation,
        handleOnDelete,
        setTheme,
        setAboutText,
        editExperience,



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