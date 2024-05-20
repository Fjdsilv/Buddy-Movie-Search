import { useEffect, useState } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import { toast }  from "react-toastify";
// import data from './assets/data/Data';

const url = "https://www.omdbapi.com/?s=";

// localStorage
const localStorageFavourites = (list) => {
  localStorage.setItem("favourites", JSON.stringify(list));
}
const defaultFavourites = JSON.parse(localStorage.getItem("favourites") || "[]");
// console.log(defaultFavourites);

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("batman");
  const [favourites, setFavorites] = useState(defaultFavourites);
  // console.log(movies)

  const fetchMovies = async (searchValue) => {
    setIsLoading(true)
    try {
      const response = await fetch(`${url}${searchValue}&apikey=b01c36d3`);
      // console.log(response)
      const { Search } = await response.json()
      if (Search) {
        setMovies(Search);
      }

    } catch(error) {
      console.log(error);
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue])

  const addFavoriteMovie = (movie) => {
    const check = favourites.find(favourite => favourite.imdbID === movie.imdbID)
    
    if (check) {
      toast.warn("Film Already Added");
      return
    }
    if (favourites.length === 14) {
      toast.error("Max Limit Films Added");
      return
    }
    else {
      const newfavourites = [ movie , ...favourites ];
      setFavorites(newfavourites)
      localStorageFavourites(newfavourites);
      toast.success("Film Added");
    }

  }

  const deleteMovie = (id) => {
    const newfavourites = favourites.filter((oldFavourite) => {
      const newfavourite = oldFavourite.imdbID !== id;
      return newfavourite;
    })
    setFavorites(newfavourites)
    localStorageFavourites(newfavourites);
    toast.error("Film Deleted")
  }

  if (isLoading) {
    return (
        <>
        <Header 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="d-flex justify-content-center p-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        {/* <Footer /> */}
      </>
    )
  }

  return (
    <>
      <Header 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Favorites 
        favourites={favourites}
        deleteMovie={deleteMovie} 
      />
      <MovieList 
        searchValue={searchValue}
        movies={movies}
        addFavoriteMovie={addFavoriteMovie} 
      />
      {/* <Footer /> */}
    </>
  )
}
export default App

