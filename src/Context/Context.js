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
  const [aboutText, setAboutText] = useState({
    textArea: "A web developer with 3 years of experience in frontend developer  and a graduate of the University of maiduguri, based in Abuja Nigeria,  I am an enthusiast in learning new technologies relating to web development  always curious about solving problems relating to my field.  You will find me watching football matches and spending time with family when not coding.",
  })

  const [educationDetails, setEducationDetails] = useState([{
      id: uuidv4(),
      institution: "UNIMAID",
      Degree: "ANATOMY",
      startDate: "2019-05",
      endDate: "2020-05",
    },
    {
      id: uuidv4(),
      institution: "UMUDIKE",
      Degree: "BIOLOGY",
      startDate: "2021-08",
      endDate: "2021-11",
    }
  ])
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

  const handleOnDelete = (id) => {
    setEducationDetails(educationDetails.filter(data => data.id !== id))
  }

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
        aboutText,
        educationDetails,
        experienceDetails,
        openSidebar,
        closeSidebar,
        addNewEdu,
        editEducation,
        handleOnDelete,
        setAboutText,
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