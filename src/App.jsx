import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './MovieList'
import SideBar from "./SideBar.jsx";
const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [toSearch, setToSearch] = useState("");
  const [searchMode, setsearchMode] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [sort, setSort] = useState("popularity.desc");
  const [likedMoviesList, setlikedMoviesList] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + import.meta.env.VITE_APP_API_KEY
    }
  };
  const fetchsearchdata = async () => {
    try {
      const apikey = import.meta.env.VITE_APP_API_KEY;
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`, options)
      if (!response.ok) throw new Error('Failed to fetch movie data');
      const data = await response.json();
      if (currentPage === 1) setMovieData(data?.results);
      else setMovieData(prevData => ([...prevData, ...data?.results]));
    } catch (error) {
      console.error(error);
    }
  }
  const fetchData = async (sort_term) => {
    try {
      console.log(sort_term)
      const apikey = import.meta.env.VITE_APP_API_KEY;
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&page=${currentPage}&sort_by=${sort_term}&api_key=${apikey}`, options)
      if (!response.ok) throw new Error('Failed to fetch movie data');
      const data = await response.json();
      console.log(data)
      if (currentPage === 1) setMovieData(data?.results);
      else setMovieData(prevData => ([...prevData, ...data?.results]));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (searchMode) {
      fetchsearchdata();
    }
    else {
      fetchData(sortBy);
    }
  }, [currentPage, toSearch, sort, sortBy]);
  const pageincreament = () => {
    setcurrentPage(prevPage => prevPage + 1);
  }
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);

  }
  const search = () => {
    setsearchMode(true);
    setToSearch(searchQuery);
  }
  // filter and sort function
  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }
  function filterMovieReleaseDate(e) {

  }
  const fetchSortData = async () => {
    try {
      const apikey = import.meta.env.VITE_APP_API_KEY;
      const response = await fetch(`('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=original_title.desc`, options)
      if (!response.ok) throw new Error('Failed to fetch movie data');
      const data = await response.json();
      if (currentPage === 1) setMovieData(data?.results);
      else setMovieData(prevData => ([...prevData, ...data?.results]));
    } catch (error) {
      console.error(error);
    }
  }
  const handleSetlikedMoviesList = (newVal) => {
    setlikedMoviesList(newVal)
  }
  return (
    <div className="App">
      <div className="movie data">
        <h1> Flixster </h1>
        <aside className='App-header'>
          <div className='button'>
            <button className={"button " + (searchMode ? "button-active" : "")}> now playing </button>
            <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder='Search movies' />
            <button onClick={search}> search</button>           
            <button onClick={pageincreament}> load more</button>
            <span > sort by:</span>
            <select name="ReleaseDate" className="dropdown" onChange={handleSortChange}> 
                <option value="popularity.desc">popularity</option>
                <option value="original_title.desc">Original title</option>
                <option value="revenue.desc">Revenue</option>
                <option value="primary_release_date.desc">Release Date</option>
                <option value="vote_average.desc">Most Views</option>
            </select>

          </div>
        </aside>
        <div className='body-container'>
          <SideBar likedMovies={likedMoviesList} />
          <MovieList likedMoviesList={likedMoviesList} handleSetlikedMoviesList={handleSetlikedMoviesList} movieData={movieData} />
        </div>
      </div>
    </div>
  )
}
export default App
