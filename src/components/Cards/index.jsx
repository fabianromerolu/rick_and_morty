import Card from '../Card';
import style from './Cards.module.css';

const Cards = ({characters}) => {
   const { name, status, species, gender, origin, image, onClick } = characters;
   return (
      <div className={style.container}>
         {characters.map(
            (item) =>(
               <Card
               key={item.id}
               id={item.id}
               name={item.name}
               status={item.status}
               species={item.species}
               gender={item.gender}
               origin={item.origin.name}
               image={item.image}
               onClick={onClick}/>
            )
         )}
      </div>
   )
}

export default Cards;
