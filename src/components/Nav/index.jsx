import style from './Nav.module.css';
import SearchBar from '../SearchBar/';
import { NavLink } from 'react-router-dom';


const Nav = ({onSearch}) => {
   return(
    <div className={style.container}>
        <SearchBar onSearch={onSearch} />
        <NavLink to={`/about`}><button>About</button></NavLink>
        <NavLink to={`/home`}><button>Home</button></NavLink>
    </div> 
   );
}

export default Nav;


//<img src={process.env.PUBLIC_URL + '/titi.PNG'} alt="img" className={style.img} />