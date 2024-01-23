import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from './Deatil.module.css';

const Deatil = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);
     return(
        <div className={style.container}>
         {character.image && <img className={style.image} src={character.image} alt={character.name} />}
        {character.name && <p className={style.nombrepersonaje}>Name: {character.name}</p>}
        {character.status && <p className={style.status}>Status: {character.status}</p>}
        {character.species && <p className={style.species}>Species: {character.species}</p>}
        {character.gender && <p className={style.gender}>Gender: {character.gender}</p>}
        {character.origin && character.origin.name && <p className={style.origin}>Origin: {character.origin.name}</p>}
        
      </div>
     );
} 

export default Deatil