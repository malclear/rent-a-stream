import React, { Component } from 'react';

export class UserMovies extends Component {
    static displayName = UserMovies.name;
    
    constructor(props) {
        super(props);
        this.state = {rentedMovies: [], ownedMovies: [], loading: true};
    }
    
    componentDidMount() {
        this.loadUserMovies();
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
    
    async loadUserMovies() {
        const response = await fetch('user/malcolm/movies');
        const data = await response.json();
        let ownedMovies = [];
        let rentedMovies = [];
        data.forEach(movie => {
            if(movie.isOwned) 
                ownedMovies.push(movie);
            else 
                rentedMovies.push(movie);
        });
        this.setState( {rentedMovies: rentedMovies, ownedMovies: ownedMovies, loading: false}); 
    }
}
