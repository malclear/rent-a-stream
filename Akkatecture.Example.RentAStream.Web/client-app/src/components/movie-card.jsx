import {Card, CardImg, CardBody, CardTitle} from "reactstrap";

function MovieCard({movie}) {
    return (
        // <span className='movie-card'>
        //     <div>image here</div>    
        //     <div>{ movie.title }</div>
        // </span>
        <span className="movie-card">
            <Card>
                <CardImg src={"media/" + movie.posterImage}/>
                <CardTitle>{movie.title}</CardTitle>
                <CardBody>{movie.shortDescription}</CardBody>
            </Card>
        </span>
    );
}

export default MovieCard;
