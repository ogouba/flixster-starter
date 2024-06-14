import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./SideBar.css"

function SideBar(props) {
    const [movieData, setMovieData] = useState([]);

    const getMovie = async (movieid) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + import.meta.env.VITE_APP_API_KEY
            }
        };
        const response = await fetch("https://api.themoviedb.org/3/movie/" + movieid, options);
        if (!response.ok) {
            console.error(response);
            return null;
        }
        return await response.json();
    }

    const updateMovieList = async () => {
        let movieDataTemp = [];
        for (let i = 0; i < props.likedMovies.length; i++) {

            let currentMovie = await getMovie(props.likedMovies[i]);
            console.log(currentMovie)
            movieDataTemp.push(currentMovie)
        }
        
    setMovieData(movieDataTemp);
}

useEffect(() => {
    updateMovieList();
}, [props.likedMovies, props.watchedMovies])

return (
    <div className="sidebar">
        <h3 id="sidebar-text">Favorites!:</h3>
        {movieData.map((movie) => {
            console.log(movie)
            return (
                <MovieCard
                    key={movie.id}
                    name={movie.title}
                    image={movie.poster_path != null ? 'https://image.tmdb.org/t/p/w1280' + movie.poster_path : 'https://www.pngmart.com/files/22/Carl-Jimmy-Neutron-PNG-File.png'}
                    voteRating={movie.vote_average}
                    overview={movie.overview}
                    release_date={movie.release_date}
                    backdropImage={movie.backdrop_path}
                    isLiked={true}
                    isWatched={true}
                    toggleLikedList={(isRemove) => { }}
                    toggleWatchedList={(isRemove) => { }}
                />
            )
        })}
    </div>
)
}
export default SideBar;
