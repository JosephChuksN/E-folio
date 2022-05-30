import Sidebar from './components/Sidebar';
import Contactinfo from './components/ContactInfo';
import NewExperience from './components/newExperience';
import './App.css';

function App() {
  return (
    <div className="">
     <Sidebar />
     <section className='lg:w-3/4 lg:ml-72 z-0 '>
     <Contactinfo />
     <NewExperience />
     </section>
     
    </div>
  );
}

export default App;
