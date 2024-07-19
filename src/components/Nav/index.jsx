import style from './Nav.module.css';
import SearchBar from '../SearchBar/';
import { NavLink } from 'react-router-dom';


const Nav = ({onSearch, onLogout}) => {
   return(
    <div className={style.container}>
    <h1 className={style.titulo}>CARTASHUB</h1>
        <SearchBar onSearch={onSearch} />
        <div>
        <NavLink to={`/about`}><button className={style.button}>About</button></NavLink>
        <NavLink to={`/home`}><button className={style.button}>Home</button></NavLink>
        <NavLink to={`/favorites`}><button className={style.button}>Favorites</button></NavLink>
        <button className={style.button} onClick={onLogout}>Logout</button>
        </div>
    </div> 
   );
}

export default Nav;
