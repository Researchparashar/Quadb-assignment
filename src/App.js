
import React,{useEffect,useState} from 'react';
import Moviess from './Moviess';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Details from './Details';

const App =()=> {
  
 
  const [movies,setMovies] = useState([]);
  
  useEffect(()=>{
    getMovies();
  },[]);

 const getMovies = async ()=>{
   const response = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
   const data = await response.json();
   setMovies(data);
 };
if(movies!==null){
 console.log(movies[0]);
}
 

  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path='/'>
     {
       movies.map(movie=>(
        
        

        
        
        <Moviess 
        title={movie.show.name}
        language={movie.show.language}
        image = {movie.show.image.medium}
        />
        
         
       
       ))}
       </Route>
       {/* <div className="content"> */}
        
           
           {
            movies.map(movie=>(
              <Route  path='/details'>
              <Details genre={movie.show.genres[0]} summary={movie.show.summary} />
              </Route>
            ))
           }
             
          
         </Switch>
       {/* </div> */}
       
       
    </div>
    </Router>
  );
}

export default App;
