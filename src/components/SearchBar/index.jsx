import style from './SearchBar.module.css';

export default function SearchBar(props) {
   const handleClick = () => {
      console.log('props', props);
      props.onSearch();
   }
   return (
      <div className={style.container}>
         <input className={style.input} type='search' />
         <button onClick={handleClick} className={style.button} >Agregar</button>
      </div>
   );
}


