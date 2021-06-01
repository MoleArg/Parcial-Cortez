import React,{useState,useEffect} from 'react';
import Axios from 'axios';

const GenreDetail = ({match}) =>{
    const buscado = match.params.id;
    const [genre,setGenre] = useState([]);

    useEffect(()=>{
        Axios.get(`http://localhost:3001/genres/detail/${buscado}`)
        .then(aux => setGenre(aux.data))
        .catch(err => console.log(err))
    },[buscado])

    const {
        name,
        ranking,
        created_at
    } = genre;
    console.log(genre);
    
    return(
        <div className="container">
            <div className = "card" >
                <div className = "card-header"> 
                <h1>Detalle del genero</h1> 
                </div> 
                <ul className = "list-group list-group-flush" >
                <li className = "list-group-item" >Nombre: {name} </li>
                <li className = "list-group-item" >Ranking: {ranking}</li>
                < li className = "list-group-item" > Creado: {created_at}</li>  
                </ul><br/>
            </div>
            <section>
                &nbsp;<a className="btn btn-outline-info" href="/genre" role="button">Volver</a>
            </section> 
        </div>
    )
}

export default GenreDetail;