import "./MovieCard.css"

function MovieCard(props){
    return (
    <div className = "moviecard">
            <img id ="movieimage" src={props.image} /> 
            <h2 className= "movie-title">{props.name}</h2>
            <p className = "movie-rating">rating: {props.voteRating}</p>
    
    </div>
    );
}
export default MovieCard;

