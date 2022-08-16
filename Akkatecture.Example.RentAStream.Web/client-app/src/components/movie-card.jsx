
function MovieCard({movie}) {
    return (
        <div key={ movie.code } className='movie-card'>
        {
            movie.title 
        }
        </div>
        );
}

export default MovieCard;
