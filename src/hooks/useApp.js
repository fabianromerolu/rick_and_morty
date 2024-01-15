import { useState } from "react";
const URL = 'https://rickandmortyapi.com/api/character/';
const useApp = () => {
    const [characters, setCharacters] = useState([]);
   
    const onSearch = async (id) => {
       // EST QUE ESTA COMENTADO ES POR PROMESA, RECUERDA QUE
       // DEBES QUITAR EL ASYNC DE ARRIBA DE ESTA LINEA Y DESCOMENTAR TOOD Y QUITAR LO DE AWAIT
       //setCharacters([...characters]);
       //fetch(URL + id)
       //.then((response) => response.json())
       //.then((data) => {
          //setCharacters([...characters, data]);
       //});
       //.error <= para manejar los errores con promesas
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