import React,{useState,useEffect} from 'react';
import axios from "axios";
import Movie from './Movie';

const MovieList = () =>{
    const [movies,setMovies] = useState([]);
    
    useEffect(() =>{
        axios
        .get("http://localhost:3001/movies")
        .then(aux => setMovies(aux.data))
        .catch(err => console.log(err))
        
    },[]);
    
    //console.log("Cantidad de peliculas: " + movies.length)
    //console.log(movies);
    
    return(
    <div className="container">
        <h1>Listado de peliculas</h1>
        <p>Cantidad: {movies.length}</p>
        <a className="btn btn-success" href="/new" role="button">Agregar pelicula</a>&nbsp;
        <a className="btn btn-success" href="/genre" role="button">Generos</a><hr/>
        {movies.map(aux => (<Movie key={aux.id} movie={aux}/>))}    
    </div>)
}

export default MovieList;
//"http://localhost:3001/movies"
// https://moviesapi2021.herokuapp.com/movies      data.movies