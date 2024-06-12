import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './MovieList'


const App = () => {

  const [movieData, setMovieData] = useState({});
  const [currentPage, setcurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + import.meta.env.VITE_APP_API_KEY
    }
  };

  const fetchData = async () => {
    try {
      const apikey = import.meta.env.VITE_APP_API_KEY;
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}`, options)
      if (!response.ok) throw new Error('Failed to fetch movie data');
      const data = await response.json();
      if (currentPage === 1) setMovieData(data);
      // else setMovieData(prevData => ({ ...prevData, ...data }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);


  const pageincreament = () => {
    // setMovieData(prevData => [...prevData, ...newData]);
    // setMovieData((prevData) => [...prevData, ...data['results']]);
    setcurrentPage(prevPage => prevPage + 1);
  }

  // const handleSearchChange = (event) =>{
  //   setSearchQuery(event.target.value);

  // }
  // const handleSubmit 
  // stop the page refreshing
  // fetch the searched information
  // display search resulsta to screen.



  return (
    <div className="App">
      <header className='App-header'>

        <h1> Flixter </h1>
        {/* <input type ="text" value={searchQuery} onChange={handlesearchChange} placeholder='Search'/> */}
        <button> search</button>
        <button>  sort by</button>
        <button onClick={pageincreament}> load more</button>

      </header>
      <MovieList data={movieData} />
    </div>

  )
}

export default App
