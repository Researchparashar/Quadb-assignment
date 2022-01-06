import React from 'react';
import {Link} from 'react-router-dom'
 const Moviess = ({title,language,image})=>{
     return(
         <div className='movie'>
             
            <Link to='/details'> <img  src={image} alt="hello" /></Link>
             <h1>{title}</h1>
             <p>{language}</p>
         </div>
     )
 }
 export default Moviess;