import { useState } from "react";
const URL = 'https://rickandmortyapi.com/api/character/';
const useApp = () => {
    const [characters, setCharacters] = useState([]);
   
    const onSearch = async (id) => {
        try {
            //async await
            const response = await fetch (URL + id);
            const data = await response.json();
            setCharacters([...characters, data]);
        } catch (error){
            console.log('error', error);
        }

    };
 
    const onClose = (id) => {
       const personajesFiltrados = characters.filter((characters)=> characters.id !== id);
       setCharacters(personajesFiltrados);
    };

    return{
        characters,
        onSearch,
        onClose,
    }

}

export default useApp;