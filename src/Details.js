import React from 'react';
const Details=({genre,summary})=>{
    return(
        <div>
            <h1>Details</h1>
            <h4>{genre}</h4>
            {summary}
        </div>
    )
}
export default Details;