import Sidebar from './components/Sidebar';
import Contactinfo from './components/ContactInfo';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="">
     <Sidebar />
     <section className='lg:w-3/4 lg:ml-72 '>
     <Contactinfo />
     <Experience />
     </section>
     
    </div>
  );
}

export default App;
