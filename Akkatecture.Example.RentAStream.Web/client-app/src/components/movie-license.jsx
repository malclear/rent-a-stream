import MovieAppContext from '../context/movie-app-context';
import {useContext} from 'react';

function License(movieLicense) {
    return (
        <span className="movie-license">
            {movieLicense}
        </span>
    );
}

export default License;
