import {createContext, useState} from 'react';

const MovieAppContext = createContext();

export const MovieAppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [userMovies, setUserMovies] = useState([])
    const [movieCatalog, setMovieCatalog] = useState(getMovies()) 
    const [catalogEdit, setCatalogEdit] = useState({
        item: {},
        edit: false,
    })
    
    return <MovieAppContext.Provider 
        value={{
            isLoading,
            movieCatalog,         
            userMovies
        }}>
        {children}
    </MovieAppContext.Provider>;

    function getMovies() {
        return [
            {code:"o_brother", title:"O' Brother Where Art Thou?"},
            {code:"cars", title:"Cars"},
            {code:"sling_blade", title:"Sling Blade"},
            {code:"big_lebowski", title:"The Big Lebowski"},
            {code:"apoc", title:"Apocalypse Now"}
        ];
    }
}

export default MovieAppContext;
