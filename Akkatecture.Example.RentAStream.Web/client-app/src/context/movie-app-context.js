import {createContext, useState, useEffect} from 'react';

const MovieAppContext = createContext();

export const MovieAppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({
        isAuthenticated: false
    });
    const [userLicenses, setUserLicenses] = useState([]);
    const [movieCatalog, setMovieCatalog] = useState([]);
    const [journal, setJournal] = useState([]);
    
    useEffect(() => {
        fetchCatalogMovies();
    }, []);
    
    const fetchCatalogMovies = async () => {
        const response = await fetch('https://localhost:7135/api/catalog');
        const data = await response.json();
        setMovieCatalog(data);
    }
    
    const authenticateUser = async (username) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"password":"ignoreThis"})};
        const response = await fetch(`https://localhost:7135/api/user/${username}/login`, requestOptions);
        const data = await response.json(); 
        
        if(!response.ok) 
            return false;
        setUser({isAuthenticated: true, ...data});
        const licenseData = await fetch(`https://localhost:7135/api/user/${data.id}/movies`)
            .then(response => response.json());
        setUserLicenses(licenseData);            
        
        return true;
    }
    
    const logOutUser = async () => {
        setUser({
            isAuthenticated: false
        });
        setUserLicenses([]);
    }
    
    const getAccountData = async () => {
        console.log('getting account data for userId: ' + user.userId);
        return {
            userId: user.userId
        };
    }

    return <MovieAppContext.Provider
        value={{
            isLoading,
            userLicenses,
            movieCatalog,
            user,
            journal,
            authenticateUser,
            logOutUser,
            getAccountData
        }}>
        {children}
    </MovieAppContext.Provider>;
}

export default MovieAppContext;
