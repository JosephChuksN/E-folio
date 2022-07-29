import Sidebar from './components/Sidebar'
import Appbar from './components/Appbar'
import Profile from './components/Profile'
import About from './components/About'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import { ThemeProvider } from './Context/ThemeContext'
import { AppProvider } from './Context/Context';
import Background from './components/Background'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <ThemeProvider>
    <AppProvider>
      <Background>
      
    <Router>
    <div className='lg:flex  '>
      
<Sidebar />
    <div className='lg:w-[80%] lg:ml-[307px]'>
     <Appbar />
     
    <main className=' z-10'>
    <Routes>
    <Route exact path='/'  element={<Profile />} />
    <Route exact path='/About' element={<About />} />
    <Route exact path='/Education' element={<Education />} />
    <Route exact path='/experience' element={<Experience />} />
    </Routes>
    </main>
   
    </div>
    
  </div>
  </Router>
  </Background>
  </AppProvider>
  </ThemeProvider>
  
  );
}

export default App;
