import React, {useState} from "react";

const MovieCard = ({ movie }) => {
    const [showCard, setShowCard] = useState(false);
  
    const handleMouseEnter = () => {
      setShowCard(true);
    };
  
    const handleMouseLeave = () => {
      setShowCard(false);
    };
  
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'inline-block', margin: '10px' }}
      >
        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
        {showCard && (
          <div style={{ position: 'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)',
          background: 'linear-gradient(90deg,#e52e71,#ff8a00)', padding: '10px', border:'1px solid white'}}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <h2>Rating:{movie.vote_average}</h2>
          </div>
        )}
      </div>
    );
  };

  export default MovieCard;