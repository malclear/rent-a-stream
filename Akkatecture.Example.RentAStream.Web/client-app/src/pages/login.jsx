import Button from '../shared/button'
import {useState, useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MovieAppContext from '../context/movie-app-context';

function Login() {
    const {authenticateUser, logOutUser} = useContext(MovieAppContext);
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Runs once, after mounting
        logOutUser();
    }, []);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        let success = await authenticateUser(username);
        if (success)
            navigate('/');
        else
            setMessage('That user does not exist!');
    }

    const handleUsernameChange = ({ target: { value } }) => { // 👈  get the value
        if (value === '') {
            setMessage(null);
        } else if (value.trim().length < 4) { // 👈 check for less than 4
            setMessage('Username must be at least 4 characters');
        } else {
            setMessage(null);
        }
        setUsername(value.trim());
    }

    return (
        <><div className="section-header">Login</div>
            <form onSubmit={handleLogin}>
                <div>
                    <div className='input-group'>
                        <input type='text'
                         onChange={handleUsernameChange}
                           value={username}
                           placeholder='Your Username'/>
                        <Button type='submit'>
                            Send
                        </Button>
                    </div>
                </div>

                {message && <div className='message'>{message}</div>}
            </form>
        </>
    );
}

export default Login;
