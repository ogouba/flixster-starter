import "./MovieCard.css";
import { useState } from "react";
import Modal from "./Modal.jsx";

function MovieCard(props) {
    const [modalOpened, setModalOpened] = useState(false);
    const openModal = () => {
        setModalOpened(true);
    };
    const closeModal = () => {
        setModalOpened(false);
    };
    const toggleLike = (event) => {
        event.stopPropagation();
        props.toggleLikedList(props.isLiked);
    };
    const toggleWatched = (event) => {
        event.stopPropagation();
        props.toggleWatchedList(props.isWatched);
    };
    return (
        <>
            <div className="moviecard" onClick={openModal}>
                <img id="movieimage" src={props.image} />
                <h2 className="movie-title">{props.name}</h2>
                <p className="movie-rating">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                    </svg>{" "}
                    {props.voteRating}
                </p>
                <span
                    onClickCapture={toggleLike}
                    caria-label="toggle favorite"
                    className="movieButton"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                        />
                    </svg>
                    {props.isLiked ? "added to favorites" : ""}{" "}
                </span>
                <span onClickCapture ={toggleWatched} caria-label="toggle watched" className="movieButton">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5" />
                        <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5m6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                    </svg>{" "}
                    {props.isWatched ? "added to watched" : ""}
                </span>
            </div>
            <div
                style={{
                    color: "white",
                    display: modalOpened ? "block" : "none",
                }}
            >
                <Modal
                    id={props.id}
                    close={closeModal}
                    movie_title={props.name}
                    movie_releaseDate={props.release_date}
                    movie_poster_path={props.image}
                    movie_overview={props.overview}
                    backdropImage={props.backdropImage}
                />
            </div>
        </>
    );
}
export default MovieCard;
