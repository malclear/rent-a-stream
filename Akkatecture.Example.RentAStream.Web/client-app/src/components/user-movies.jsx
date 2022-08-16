import MovieCard from "./movie-card";
import MovieAppContext from '../context/movie-app-context';
import { Link } from 'react-router-dom';
import {useContext} from 'react';

function UserLicenses() {
    const {userLicenses, user} = useContext(MovieAppContext);
    if (!user.isAuthenticated)
        return (<>
            <div className="movie-group-section">
                <div className="section-header">Log in to see your movies!</div>
                <Link to="./login">Log in</Link>
            </div>
        </>);
    else {
        return (
            <div className="movie-group-section">
                <div className="section-header">User Movies:</div>
                {
                    userLicenses.map((movie) => (
                        <div className='movie-card'>
                            <MovieCard key={movie.code} movie={movie}/>
                        </div>))
                }
            </div>
        );
    }
}
export default UserLicenses;
