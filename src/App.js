import Sidebar from './components/Sidebar'
import Appbar from './components/Appbar'
import Profile from './components/Profile'
import { AppProvider } from './myContext/Context';
import './App.css';

function App() {

  return (
    
    <div className='lg:flex h-screen '>
      <AppProvider>
<Sidebar />
    <div className='lg:w-[80%] lg:ml-[307px]'>
     <Appbar />
    <main className=' z-10'>
    <Profile />
    </main>
    </div>
    </AppProvider>
  </div>
  
  );
}

export default App;
