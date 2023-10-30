import React from 'react'
import MovieCard from './MovieCard'
import styles from "./MoviesList.module.css";

function MovieList({ data }) {
    const { movieApiResponse, error, isError } = data;
    if (isError) { // error by api responder
        return <h1>{error}</h1>
    }
    // console.log(data);
    if (movieApiResponse && movieApiResponse.Response === 'False') { // error by axios
        return <h1>{movieApiResponse.Error || 'No result found'}</h1>
    }
    return (
        <div className={`container ${styles.moviesList}`}>
            {movieApiResponse.Search.map((movie) => <MovieCard key={movie.imdbID} {...movie} ></MovieCard>)}
        </div>
    )
}

export default MovieList