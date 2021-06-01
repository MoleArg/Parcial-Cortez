import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import Genre from './Genre';

const GenreList = () =>{
    const [genre, setGenre] = useState([]);

    useEffect( () =>{
        Axios
        .get("http://localhost:3001/genres")
        .then(aux => setGenre(aux.data))
        .catch(err => console.log(err))
    },[]);

    //console.log(genre);

    return(
        <div className="container">
            <h1>Listado de Generos</h1>
            <p>Cantidad: {genre.length}</p>
            <a className="btn btn-success" href="/" role="button">Volver</a><hr/>
            {genre.map(aux => (<Genre  key={aux.id} genero={aux}/>))}
        </div>
    )
}
export default GenreList;