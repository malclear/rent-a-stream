import React, { Component } from 'react';

export class UserMovies extends Component {
    static displayName = UserMovies.name;
    
    constructor(props) {
        super(props);
        this.state = {rentedMovies: [], ownedMovies: [], loading: true};
    }
    
    componentDidMount() {
        debugger;
        this.fetchMovieData();
    }

    static renderUserMovies(rentedMovies, ownedMovies){
        return (
            <div>
                <h3>Rented Movies</h3>
                <table className='table table-striped' aria-labelledby="rentedLabel">
                   <tbody>
                        {rentedMovies.map(rentedMovie =>
                        <tr key={rentedMovie.id}>
                            <td>{rentedMovie.name}</td>
                       </tr>
                    )}
                    </tbody>
                </table>
                <h3>Owned Movies</h3>
                <table className='table table-striped' aria-labelledby="ownedLabel">
                   <tbody>
                    {ownedMovies.map(ownedMovie =>
                        <tr key={ownedMovie.id}>
                            <td>{ownedMovie.name}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
    
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : UserMovies.renderUserMovies(this.state.rentedMovies, this.state.ownedMovies);
            
        return (
            <div>
                {contents}
            </div>
        );
    }

    async fetchMovieData() {
        let ownedMovies = [];
        let rentedMovies = [];

        if(window.$authenticated){
            let userId = window.$userId;
            debugger;
            let response = await fetch(`user/${userId}/movies`);
            let data = await response.json();
            data.forEach(movie => {
                if(movie.isOwned)
                    ownedMovies.push(movie);
                else
                    rentedMovies.push(movie);
            });
        }

        let moviesResponse = await fetch('movies');
        let moviesData = await moviesResponse.json();
        let movieCatalog = [];
        moviesData.forEach(movie => {
            movieCatalog.push(movie);
        });
        this.setState( {movieCatalog: movieCatalog, rentedMovies: rentedMovies, ownedMovies: ownedMovies, loading: false});
    }
}
