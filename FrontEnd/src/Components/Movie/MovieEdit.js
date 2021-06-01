import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';
import moment from 'moment';

const MovieEdit = ({match}) =>{
    const id = match.params.id;
    const history = useHistory();
    const [movie,setMovie] = useState([]);

    useEffect(()=>{
        Axios.get(`http://localhost:3001/movies/detail/${id}`)
        .then(aux => setMovie(aux.data))
        .catch(err => console.log(err));
    },[id]);

    //console.log(movie);
    
    const {
        title,
        rating,
        awards,
        release_date,
        length,
        genre_id
        
    } = movie;
    //console.log(moment(release_date).format("DD-MM-YYYY"));

    const onSubmit = (e) =>{
        e.preventDefault();

        Axios.put(`http://localhost:3001/movies/update/${id}` , movie)
        .then(console.log("Actualizado correctamente"))
        .catch(err => console.log(err));

        history.push("/");
        window.location.reload();
    }

    const onChange = (e) =>{
        setMovie({
            ...movie,
            [e.target.name] : e.target.value
        });
    }
    return(
    <div className="container">
            <h1 className="text-center">Editar pelicula</h1><br/>
            <form onSubmit={onSubmit}>
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Nombre pelicula:</span>
                    <input 
                    type="text"
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Ingrese el nombre"
                    onChange={onChange}
                    value={title}
                    name="title"
                    required
                    />
                </div>
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Rating</span>
                    <input 
                    type="number"
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Ingrese el rating"
                    onChange={onChange}
                    value={rating}
                    name="rating"
                    required
                    />
                </div>
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Awards</span>
                    <input 
                    type="number"
                    className="form-control" 
                    placeholder="Ingrese cantidad de premios"
                    onChange={onChange}
                    value={awards}
                    name="awards"
                    required
                    />
                </div>
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Release date</span>
                    <input 
                    type="date"
                    className="form-control" 
                    onChange={onChange}
                    value={moment(release_date).format("YYYY-MM-DD")}
                    name="release_date"
                    required
                    />
                </div>
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Length</span>
                    <input 
                    type="number"
                    className="form-control" 
                    placeholder="Ingrese la duracion"
                    onChange={onChange}
                    value={length}
                    name="length"
                    required
                    />
                </div>
                <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="genero">Genero</label>
                <select className="form-select" id="genero" onChange={onChange} defaultValue={genre_id} name="genre_id" required>
                    <option selected>Eliga un genero...</option>
                    <option value="1">Comedia</option>
                    <option value="2">Terror</option>
                    <option value="3">Drama</option>
                    <option value="4">Accion</option>
                    <option value="5">Ciencia Ficcion</option>
                    <option value="6">Suspenso</option>
                    <option value="7">Animacion</option>
                    <option value="8">Aventuras</option>
                    <option value="9">Documental</option>
                    <option value="10">Infantiles</option>
                    <option value="11">Fantasia</option>
                    <option value="12">Musica</option>
                </select>
                </div>
            <section>
                <button type="submit" className="btn btn-outline-success">Actualizar</button>
                <a className="btn btn-outline-info" href="/" role="button">Volver</a>
            </section>
            </form>
        </div>
    )
}

export default MovieEdit;
