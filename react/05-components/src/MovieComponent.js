import { movies } from './data/movies.js'; // import the movies data
import Movie from './Movie'; // import the Movie component
import './movies.css'; // import the css file

const fetchMovieData = () => { // create a function to fetch the movies data
  return movies; // return the movies data
}

const MovieComponent = () => { // create a functional component
  const movieData = fetchMovieData(); // call the fetchMovieData function and store the returned data in a variable

  return( // return the following JSX
      // create a div with a className of movie-container 
    <div className="movie-container">  
      <h2>Movies</h2>
      {/* create a ul with a className of movie-list */}
      <ul className="movie-list">
        {
          // map over the movieData array and return a Movie component for each movie in the array
          movieData.map((movie)=>(
            // pass the movie prop to the Movie component
            <Movie key={movie.id} movie={movie} />
          ))
        }
      </ul>

    </div>
  )
};

// export the MovieComponent
export default MovieComponent;