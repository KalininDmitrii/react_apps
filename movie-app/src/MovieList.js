import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const apiKey = 'b61f6ad532e9513d5db3242c25b67111';
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey;

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
        <h1 style={{marginTop:'0px', marginLeft:'10px', color:'white' }}>List of movies</h1>
        {movies.map(movie => (
            <div style={{display:'inline-block',textAlign:'center',width:'250px', height:'300px',
            marginTop:'40px'}}>
                <MovieCard key={movie.id} movie={movie} />
                <p style={{color:'white', marginTop:'0px',
                fontSize:'14px'}}>{movie.title}</p>
            </div>
      ))}
    </div>
  );
};

export default MovieList;