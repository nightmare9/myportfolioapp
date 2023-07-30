import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Myprojects from './pages/Myprojects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App" id='app'>
      <BrowserRouter basename='/'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Myprojects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
