import Sidebar from './components/Sidebar'
import Appbar from './components/Appbar'
import Profile from './components/Profile'
import About from './components/About'
import Education from './components/Education'
import { AppProvider } from './myContext/Context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <Router>
    <div className='lg:flex  '>
      <AppProvider>
<Sidebar />
    <div className='lg:w-[80%] lg:ml-[307px]'>
     <Appbar />
     
    <main className=' z-10'>
    <Routes>
    <Route exact path='/'  element={<Profile />} />
    <Route exact path='/About' element={<About />} />
    <Route exact path='/Education' element={<Education />} />
    </Routes>
    </main>
   
    </div>
    </AppProvider>
  </div>
  </Router>
  );
}

export default App;
