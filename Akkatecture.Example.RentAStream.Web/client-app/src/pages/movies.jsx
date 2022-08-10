import PropTypes from 'prop-types';
import MovieCatalog from "../components/movie-catalog";
import UserMovies from "../components/user-movies";

Movies.propTypes = {
    
};

function Movies(props) {
    return (
        <>
            <MovieCatalog/>
            <UserMovies/>
        </>
    );
}

export default Movies;
