import Home from './components/Home';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Generalpublic from './components/Generalpublic';
import LocationFinder from './components/LocationFinder';
import Finsihed from './components/Finsihed';
import LocationShow from './components/LocationShow';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Generalpublic' element={<Generalpublic/>}/>
      <Route path='/Locationfinder' element={<LocationFinder/>}/>
      <Route path='/Finished' element={<Finsihed/>}/>
      <Route path='/LocationShow' element={<LocationShow/>}/>
      </Routes>
    </div>
  );
}

export default App;
