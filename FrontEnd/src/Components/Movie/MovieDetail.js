import React,{useState,useEffect} from 'react';
import Axios from 'axios';

//match es una propiedad de Router

const MovieDetail = ({match})=>{
    const buscado = match.params.id;
    const [movie,setMovie] = useState([]);
   //console.log(buscado);

    useEffect(()=>{
        Axios.get(`http://localhost:3001/movies/detail/${buscado}`)
        .then(aux =>setMovie(aux.data))
        .catch(err => console.log(err))
    },[buscado]);

    const{
        title,
        rating,
        awards,
        release_date,
        length
    } = movie;
    console.log(movie);
    return(
        <div className="container">
            <div className="card">
                <div className="card-header">
                    {title}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">RATING: {rating}</li>
                    <li className="list-group-item">AWARDS: {awards}</li>
                    <li className="list-group-item">LENGTH: {length}</li>
                    <li className="list-group-item">RELEASE DATE: {release_date}</li>
                </ul>
            </div>
            <section>
                    <a className="btn btn-outline-success" href={`/edit/${buscado}`} role="button">Modificar</a>
                    <a className="btn btn-outline-danger" href={`/delete/${buscado}`} role="button">Eliminar</a>
                    <a className="btn btn-outline-info" href="/" role="button">Listado de peliculas</a>
            </section>
        </div>
    )
}

export default MovieDetail;