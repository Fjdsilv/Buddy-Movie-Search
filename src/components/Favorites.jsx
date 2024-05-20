import Button from 'react-bootstrap/Button';
import { MdDeleteForever } from "react-icons/md";

const Favorites = ({ favourites, deleteMovie }) => {
    if (favourites.length === 0) {
        return (
            <section>
                <div className="container">
                    <h2 className="pt-5 pb-4 text-center">📽My Favourite Films😎</h2>
                    <p className="text-center fs-5">~ No Films In Your List Yet! ~</p>
                </div>
            </section>
        )
    }

  return (
    <section>
        <div className="container">
            <h2 className="pt-5 pb-4 text-center">📽My Favourite Films😎</h2>
            <article className="d-flex flex-wrap gap-4 justify-content-center">
                {
                    favourites.map((favorite) => {
                        const { imdbID, Title, Poster } = favorite;

                        return (
                            <div key={imdbID}>
                                <div className="pb-1 shadow-sm p-1 mb-1 bg-white favouriteDiv">
                                    <img 
                                        src={Poster} 
                                        alt={Title} 
                                    />
                                    </div>
                                <Button
                                    variant="warning"
                                    type="button"
                                    onClick={() => deleteMovie(imdbID)}
                                >
                                    <span className="p-2">Remove</span>
                                    <MdDeleteForever />
                                </Button>
                            </div>
                        );
                    })
                }
            </article>
        </div>
    </section>
  )
}
export default Favorites

