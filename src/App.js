import Sidebar from './components/Sidebar'
import Appbar from './components/Appbar'
import Profile from './components/Profile'
import About from './components/About'
import { AppProvider } from './myContext/Context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <Router>
    <div className='lg:flex h-screen '>
      <AppProvider>
<Sidebar />
    <div className='lg:w-[80%] lg:ml-[307px]'>
     <Appbar />
     
    <main className=' z-10'>
    <Routes>
    <Route exact path='/'  element={<Profile />} />
    <Route exact path='/About' element={<About />} />
    </Routes>
    </main>
   
    </div>
    </AppProvider>
  </div>
  </Router>
  );
}

export default App;