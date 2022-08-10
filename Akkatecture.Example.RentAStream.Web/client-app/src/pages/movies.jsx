import MovieAppContext from "../context/movie-app-context"
import UserMovies from "../components/user-movies";
import {useContext} from 'react';
import MovieCatalog from '../components/movie-catalog';

function Movies() {
    const {movieCatalog} = useContext(MovieAppContext); 
    return (
        <>
            <MovieCatalog/>
            <UserMovies/>
        </>
    );
}

export default Movies;
