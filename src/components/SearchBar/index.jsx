import { useState } from 'react';
import style from './SearchBar.module.css';

const SearchBar = (props) => {
   const [id, setId] = useState('');

   const handleClick = () => {
      console.log('props', props);
      props.onSearch(id);
   }

   const handleChange = (e) => {
      console.log(e);
      setId(e.target.value)
   };

   return (
      <div className={style.container}> 
         <input className={style.input}
          type='search' 
          placeholder='Escribe el ID aquí...' 
          onChange={handleChange}
          value={id}/>
         <img
            className={style.img}
            src={process.env.PUBLIC_URL + '/laotradebuscar.PNG'} // Ruta relativa al directorio public
            alt="Botón"
            onClick={handleClick}
         />
      </div>
   );
}

export default SearchBar;
//<button onClick={handleClick} className={style.button} >🔎</button>
