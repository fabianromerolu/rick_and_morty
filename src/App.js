import './App.css';
import Cards from './components/Cards/';
import Nav from './components/Nav/';
import useApp from './hooks/useApp';
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
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
