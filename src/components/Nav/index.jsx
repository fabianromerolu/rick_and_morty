import style from './Nav.module.css';
import SearchBar from '../SearchBar/';


const Nav = ({onSearch}) => {
   return(
    <div className={style.container}>
        <SearchBar onSearch={onSearch} />
    </div> 
   );
}

export default Nav;


//<img src={process.env.PUBLIC_URL + '/titi.PNG'} alt="img" className={style.img} />