import './App.css';
import Form from './components/Form';
import Error from './components/Error';
import About from './components/About';
import Deatil from './components/Deatil';
import Cards from './components/Cards/';
import Nav from './components/Nav/';
import useApp from './hooks/useApp';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React,{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import characters from './data.js';

function App() {
   const navigate = useNavigate();
   const location = useLocation();
    // Estado local access
   const [access, setAccess] = useState(false);
   const EMAIL = "fabianromerolu@gmail.com";
   const PASSWORD = "Donplabojuan758*";
   const login = (userData) => {
      if(userData.email===EMAIL && userData.password===PASSWORD){
         setAccess(true);
         navigate('/home');
      }
   };
   const logout = () => {
      setAccess(false);
      navigate('/');
    };
  
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);  // Agrega 'navigate' al array de dependencias
   
   const {
      characters,
      onSearch,
      onClose,
   } = useApp();
   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} onLogout={logout}/>}
         <Routes>
            <Route path="*" element={<Error/>}></Route>
            <Route path="/" element={<Form login={login}/>}></Route>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} ></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/detail/:id" element={<Deatil/>}></Route>
         </Routes>
         
      </div>
   );
}

export default App;
