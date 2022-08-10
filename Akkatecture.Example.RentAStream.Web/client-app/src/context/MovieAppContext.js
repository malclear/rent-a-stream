import {createContext, useState} from 'react';

const MovieAppContext = createContext();

export const MovieAppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [userMovies, setUserMovies] = useState([])
    const [catalogEdit, setCatalogEdit] = useState({
        item: {},
        edit: false,
    })
    
    return <MovieAppContext.Provider value={{ }}>
        {children}
    </MovieAppContext.Provider>;
}

export default MovieAppContext;
