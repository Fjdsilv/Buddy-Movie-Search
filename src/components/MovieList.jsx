import Button from 'react-bootstrap/Button';
import { FaRegHeart } from "react-icons/fa";

const MovieList = ({ movies, addFavoriteMovie, searchValue }) => {
  return (
    <section>
        <div className="container p-4">
            <h2 className="pt-5 pb-4 text-center">📽{`Search "${searchValue}"`}🧐</h2>
            <div className="grid">
            {
                movies.map((movie) => {
                    const { imdbID, Title, Year, Poster } = movie;
                    
                    return (
                        <article key={imdbID}>
                            <div className="pb-1 shadow-sm p-1 mb-1 bg-white movieListDiv">
                                <img 
                                    className='block object-fit-cover'
                                    src={Poster} 
                                    alt={Title} 
                                />    
                            </div>
                            <span
                                className="fw-semibold"
                            >{Year}</span>
                            <p  className="pt-1 fw-semibold text-capitalize">{Title}</p>
                            <Button
                                variant="danger"
                                type="button"
                                onClick={() => addFavoriteMovie(movie)}
                            >
                                <span className="p-2">Add Favourite</span>        
                                <FaRegHeart />    
                            </Button>
                        </article>
                    )
                })
            }
        </div>
        </div>
    </section>
  )
}
export default MovieList