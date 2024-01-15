//import {Rick} from "../../data";
import style from './Card.module.css';

const Card = (props) => {
const { id, name, status, species, gender, origin, image, onClose } = props;
   return(
       <div className={style.container}>
         <button onClick={()=>onClose(props.id)} className={style.closeButton}>X</button>
         <h1 className={style.nombrepersonaje}>{name}</h1>
         <div className={style.textContainer}>
            <h2 className={style.status}>{status}</h2>
            <h2 className={style.species}>{species}</h2>
            <h2 className={style.gender}>{gender}</h2>
            <h2 className={style.origin}>{origin}</h2>
         </div>
         <img className={style.image} src={image} alt='foto' />
         <h1 className={style.titulocarta}>CARD ID: {id}</h1>
       </div>
   )
}

export default Card;









































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
