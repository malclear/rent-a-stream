import MovieAppContext from '../context/movie-app-context';
import {useContext} from 'react';
import MovieCard from './movie-card';

function MovieCatalog() {
    const {movieCatalog} = useContext(MovieAppContext);

    return (<>
            <div className="section-header">Movie Catalog: </div>
            {
                movieCatalog.map( (movie) => ( <MovieCard  key={movie.code} movie={movie} />)) 
            }
        </>
    );
}

export default MovieCatalog;
