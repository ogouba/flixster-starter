import './Modal.css';
import React from 'react';
import MovieCard from './MovieCard';

function Modal(props){
    return (
        <div className="modalOverlay" >
            <div className="modalContainer" style={{background: "url(https://image.tmdb.org/t/p/w1280" +props.backdropImage +")"}}>
                <button  className= "closeButton" onClick={props.close}>&times;</button>
                <div className ="modal-content" >
                    <img className="modal-image" src= {props.movie_poster_path}/>
                    <div> Movie Title: {props.movie_title}</div>
                    <div> Overview: {props.movie_overview}</div>
                    <div> Release Date: {props.movie_releaseDate}</div>
                </div>
            </div>
        </div>
    )

}
export default Modal;
