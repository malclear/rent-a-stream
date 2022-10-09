import MovieAppContext from '../context/movie-app-context';
import {useContext} from 'react';
import MovieCard from './movie-card';

function MovieCatalog() {
    const {movieCatalog} = useContext(MovieAppContext);

    return (<>
            <h3 className="section-header">CHOOSE A MOVIE! </h3>
            {
                movieCatalog.map( (movie) => ( <MovieCard className="movie-card"  key={movie.code} movie={movie} />)) 
            }
        </>
    );
}

export default MovieCatalog;
