import MovieCard from "./movie-card";
import MovieAppContext from '../context/movie-app-context';
import {useContext} from 'react';

function UserMovies(props) {
    const {movieCatalog} = useContext(MovieAppContext);
    
    return (
        <>
            <div>User Movies:</div> 
        </>
    );
}

export default UserMovies;
