import MovieCard from "./movie-card";
import MovieAppContext from '../context/movie-app-context';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import MovieLicenseCard from './movie-license-card';

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
                <h3 className="section-header">YOUR MOVIES:</h3>
                {
                    userLicenses.map((movie) => {
                        return (
                                <MovieLicenseCard className="movie-card"  key={movie.code} 
                                           movie={movie} />
                        )
                    })
                }
            </div>
        );
    }
}

export default UserLicenses;
