import "./Modal.css";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
// create request function for the the youtube video
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_APP_API_KEY,
    },
};
const fetchyoutubevideo = async (movie_id) => {
    try {
        const apikey = import.meta.env.VITE_APP_API_KEY;
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
            options
        );
        const data = await response.json();
        console.log(data);
        for (let i = 0; i < data.results.length; i++) {
            if (data.results[i].site == "YouTube") {
                return data.results[i].key;
            }
        }
    } catch (error) {
        console.error(error);
    }
    return null;
};
// modal function
function Modal(props) {
    const [trailerURL, setTrailerURL] = useState("");
    useEffect(() => {
        fetchyoutubevideo(props.id).then((data) => {
            setTrailerURL(`https://www.youtube.com/embed/${data}`);
        });
    }, [props.key]);
    return (
        <div className="modalOverlay">
            <div
                className="modalContainer"
                style={{
                    background:
                        props.backdropImage == null
                            ? "rgb(115, 10, 64,1)"
                            : "url(https://image.tmdb.org/t/p/w1280" +
                              props.backdropImage +
                              ")",
                }}
            >
                <button className="closeButton" onClick={props.close}>
                    &times;
                </button>
                <div className="modal-content">
                    <iframe
                        width="250"
                        height="300"
                        src={trailerURL}
                        trailerURL
                        title="Amazon 4k - The World’s Largest Tropical Rainforest | Relaxation Film with Calming Music"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>

                    <img
                        className="modal-image"
                        src={props.movie_poster_path}
                    />
                    <div> Movie Title: {props.movie_title}</div>
                    <div> Overview: {props.movie_overview}</div>
                    <div> Release Date: {props.movie_releaseDate}</div>
                </div>
            </div>
        </div>
    );
}
export default Modal;
