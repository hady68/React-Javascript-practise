
// this is a functional component
const Movie = ({movie}) => { // destructure the movie prop from the props object

  return(
//   // return the following JSX
 <li className="movie" key={movie.id}>
  
      <img src={movie.poster} alt={movie.title} />
      <p>
        {movie.title} by {movie.director} was released on {movie.year}
      </p>
      <p>Rating: {movie.rating}</p>
    </li>
  )
};

export default Movie;