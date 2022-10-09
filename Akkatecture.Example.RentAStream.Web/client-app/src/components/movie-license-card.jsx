import {Card, CardImg, CardBody, CardTitle} from "reactstrap";
import License from './movie-license';

function MovieLicenseCard({movie, license}) {
    let licenseText = '';
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    if(movie.licenseType == 'rental')
    {

        licenseText = 'Rented through ' + (new Date(movie.validUntil)).toLocaleDateString('en-us', options);
        console.log(licenseText);
    }
    else {
        licenseText = 'You own this movie!';
    }
    
    return (
        <span className="movie-license-card">
            <Card>
                <CardImg src={"media/" + movie.posterImage}/>
                <CardTitle>{movie.title}</CardTitle>
                <CardBody>{movie.shortDescription}</CardBody>
                {/*<span className="movie-license">{licenseText}</span>*/}
                {/*<License>{licenseText}</License>*/}
                <span className="movie-license">
            {licenseText}
        </span>
            </Card>
        </span>
    );
}

export default MovieLicenseCard;
