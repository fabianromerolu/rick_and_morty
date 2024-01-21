import './App.css';
import Error from './components/Error';
import About from './components/About';
import Deatil from './components/Deatil';
import Cards from './components/Cards/';
import Nav from './components/Nav/';
import useApp from './hooks/useApp';
import { Route, Routes } from 'react-router-dom';
//import characters from './data.js';

function App() {
   const {
      characters,
      onSearch,
      onClose,
   } = useApp();
   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path="*" element={<Error/>}></Route>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} ></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/detail/:id" element={<Deatil/>}></Route>
         </Routes>
         
      </div>
   );
}

export default App;
