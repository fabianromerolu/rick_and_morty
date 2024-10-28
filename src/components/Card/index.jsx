import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';

const Card = (props) => {
   const { 
      id, 
      name, 
      status, 
      species, 
      gender, 
      origin, 
      image, 
      onClose, 
      addFav, 
      removeFav,
      favorites,
   } = props;

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({ id, name, status, species, gender, origin, image });
      }
   };

   useEffect(() => {
      const isFavorite = favorites.some((fav) => fav.id === id);
      setIsFav(isFavorite);
   }, [favorites, id]); // Incluye id en las dependencias

   return (
      <div className={style.container}>
         <button onClick={() => onClose(id)} className={style.closeButton}>X</button>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
         <Link to={`/detail/${id}`}>
            <h1 className={style.nombrepersonaje}>{name}</h1>
         </Link>
         <div className={style.textContainer}>
            <h2 className={style.status}>{status}</h2>
            <h2 className={style.species}>{species}</h2>
            <h2 className={style.gender}>{gender}</h2>
            <h2 className={style.origin}>{origin}</h2>
         </div>
         <img className={style.image} src={image} alt='foto' />
         <h1 className={style.titulocarta}>CARD ID: {id}</h1>
      </div>
   );
};

const mapStateToProps = (state) => ({
   favorites: state.myFavorites,
});

export default connect(mapStateToProps, { addFav, removeFav })(Card);
































/*export default function Card(props) {
   return (
      <div>
         { <button onClick={}>X</button>
         <h2></h2>
         <h2></h2>
         <h2></h2>
         <h2></h2>
         <h2></h2>
         <img src={} alt='' /> }
      </div>
   );
}*/
