
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
     <Routes>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
     </Routes>

      
    </div>
  );
}

export default App;
