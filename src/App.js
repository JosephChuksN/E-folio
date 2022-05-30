import Sidebar from './components/Sidebar';
import Contactinfo from './components/ContactInfo';
import NewExperience from './components/Experience';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="">
    <Sidebar />
     <Routes>
    
     <Route path='/' element={<Contactinfo />}/>
     <Route path='/experience' element={<NewExperience />}/>
     
     </Routes>
     
    </div>
    </Router>
  );
}

export default App;
