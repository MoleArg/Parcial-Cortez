import React from 'react';

const Movie = ({movie}) =>{

    const {id,title} = movie;
        //console.log(movie);
    return(
        <div>
            <div className="list-group">
                <a href={`detail/${id}`} className="list-group-item list-group-item-action" aria-current="true">
                {title}
                </a>
            </div>
        </div>
    )
}

export default Movie;