// SIN TERMINAR
import {useEffect} from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';

const MovieDelete = ({match})=>{
    const id = match.params.id;
    const history = useHistory();
    
    useEffect(()=>{
        Axios.delete(`http://localhost:3001/movies/delete/${id}`)
        .then(console.log("Elemento borrado"))
        .catch(err => console.log(err));
    },[id]);
    history.push("/");
    window.location.reload();
    return null;
}

export default MovieDelete;