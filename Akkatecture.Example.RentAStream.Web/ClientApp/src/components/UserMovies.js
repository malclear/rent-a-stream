import React, { Component } from 'react';

export class UserMovies extends Component {
    static displayName = UserMovies.name;
    
    constructor(props) {
        super(props);
        this.state = {rentedMovies: [], ownedMovies: [], loading: true};
    }
    
    componentDidMount() {
        this.fetchMovieData();
    }

    static renderUserMovies(rentedMovies, ownedMovies){
        // debugger;
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
        let contents = {};
        if(window.$authenticated)
            contents = this.state.loading
                ? <p><em>Loading...</em></p>
                : UserMovies.renderUserMovies(this.state.rentedMovies, this.state.ownedMovies); 
        else 
           contents = <p><em>Register or Login!</em></p>
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
            let response = await fetch(`api/user/${userId}/movies`);
            let data = await response.json();
            data.forEach(movie => {
                if(movie.isOwned)
                    ownedMovies.push(movie);
                else
                    rentedMovies.push(movie);
            });
        }

        debugger;
        let catalogResponse = await fetch('api/catalog');
        let catalogData = await catalogResponse.json();
        let catalog = [];
        catalogData.forEach(movie => {
            catalog.push(movie);
        });
        this.setState( {movieCatalog: catalog, rentedMovies: rentedMovies, ownedMovies: ownedMovies, loading: false});
    }
}
