import MovieAppContext from '../context/movie-app-context';
import {useContext} from 'react';
import MovieCard from './movie-card';

function MovieCatalog() {
    const {movieCatalog} = useContext(MovieAppContext);

    return (<>
            <div className="sectionHeader">Movie Catalog:
            </div>
            {
                movieCatalog.map((movie) => ( <div><MovieCard  key={movie.code} movie={movie} /></div> )) 
            }
        </>
    );
}

export default MovieCatalog;
