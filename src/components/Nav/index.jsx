import style from './Nav.module.css';
import SearchBar from '../SearchBar/';
import { NavLink } from 'react-router-dom';


const Nav = ({onSearch, onLogout}) => {
   return(
    <div className={style.container}>
        <SearchBar onSearch={onSearch} />
        <div>
        <NavLink to={`/about`}><button>About</button></NavLink>
        <NavLink to={`/home`}><button>Home</button></NavLink>
        <NavLink to={`/favorites`}><button>Favorites</button></NavLink>
        <button onClick={onLogout}>Logout</button>
        </div>
    </div> 
   );
}

export default Nav;
