// import dummy_data from "./dummy-data/now-playing.json"

import MovieCard from "./MovieCard"
import './MovieList.css'

function MovieList(props) {

    return (
        <div className="movielist">

            {props.data.results &&

                props.data.results.map((movie) => (
                // <div>{e.id}</div>)
                
                        <MovieCard
                            key={movie.id}
                            name={movie.title}
                            image={'https://image.tmdb.org/t/p/w1280' + movie.poster_path}
                            voteRating={movie.vote_average}
                        />
                    ))
                }
            {/* } */}
            {/* {props.data?.results.map((movie) => (
                <div>{movie.title}</div>
                    
                    
                    <MovieCard
                        name={movie['title']}
                        image={'https://image.tmdb.org/t/p/w1280' + movie['poster_path']}
                        voteRating={movie['vote_average']}
                    />

                ))} */}
        </div>

    )
}

export default MovieList

