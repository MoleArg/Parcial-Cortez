import React from 'react';

const Genre = ({genero}) =>{
    const {id,name} = genero;

    return(
        <div className="list-group">
            <a
            href = {`genre/detail/${id}`}
            className = "list-group-item list-group-item-action"
            ariacurrent = "true">
            {name}
            </a>
        </div>
    )
}
export default Genre;