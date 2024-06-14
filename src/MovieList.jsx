// import dummy_data from "./dummy-data/now-playing.json"
import { useState } from "react"
import MovieCard from "./MovieCard"
import './MovieList.css'

function MovieList(props) {
    const toggleLikeList = (movieID, isRemove) => {
        if(isRemove){
            props.handleSetlikedMoviesList((prev) =>{
                return props.likedMoviesList.filter((curMovieID) => curMovieID != movieID)
            })
        }else{
            props.handleSetlikedMoviesList((prev) =>{
                return [...props.likedMoviesList, movieID]
            })
        }
    }
    return (
        <div className="movielist">
            {props.movieData &&
                props.movieData.map((movie) => (
                // <div>{e.id}</div>)               
                        <MovieCard
                            key={movie.id}
                            name={movie.title}
                            image={movie.poster_path != null ? 'https://image.tmdb.org/t/p/w1280' + movie.poster_path : 'https://www.pngmart.com/files/22/Carl-Jimmy-Neutron-PNG-File.png'}
                            voteRating={movie.vote_average}
                            overview={movie.overview}
                            release_date = {movie.release_date}
                            backdropImage = {movie.backdrop_path}
                            isLiked={props.likedMoviesList.includes(movie.id)}
                            toggleLikedList={(isRemove) => {toggleLikeList(movie.id, isRemove)}}
                        />
                    ))
                }
        </div>
    )
}

export default MovieList

