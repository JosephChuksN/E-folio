import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Appbar from './components/Appbar'
import Profile from './components/Profile'
import About from './components/About'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Settings from './components/Settings/Settings'
import { ThemeProvider } from './Context/ThemeContext'
import { SideBarProvider } from './Context/SideBarContext';
import Background from './components/Background'
import { AboutTxt, educationData, experienceData } from './TestData'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';



const App= () => {

  const [aboutText, setAboutText] = useState(AboutTxt)
  const [educationInfo, setEducationInfo] = useState(educationData)
  const [experienceInfo, setExperienceInfo] = useState(experienceData)



  return (
    <ThemeProvider>
    <SideBarProvider>
      <Background>
      
    <Router>
    <div className='lg:flex  '>
      
    <Sidebar />
    
    <div className='lg:w-[80%] lg:ml-[307px]'>
     <Appbar />
     
    <main className=' z-10'>
    <Routes>

    <Route 
     exact path='/'  
     element={
     <Profile 
     aboutText={aboutText} 
     educationData={educationInfo}
     experienceData={experienceInfo}
     
    />} />

    <Route 
     exact path='/About' 
     element={
     <About 
     aboutText={aboutText} 
     setAboutText={setAboutText} 

    />} />

    <Route 
     exact path='/Education' 
     element={
     <Education 
     educationData={educationInfo}
     setEducationData={setEducationInfo}

     />} />

    <Route 
     exact path='/experience' 
     element={
     <Experience 
     experienceData={experienceInfo}
     setExperienceData={setExperienceInfo}

     />} />

    <Route exact path='/settings' element={<Settings />} />
    </Routes>
    </main>
   
    </div>
    
  </div>
  </Router>
  </Background>
  </SideBarProvider>
  </ThemeProvider>
  
  );
}

export default App;
