import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites) {
        return <div className='favorites'>
            <h2>Favorite Movies</h2>
            <div className="movies-grid">
                {favorites.map(
                    (movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                )}
            </div>
        </div>
    }

    return <div className="favorites-empty">
        <h2>No Favorite Movies Added Yet</h2>
        <p>As and when, you like a movie and would add that as a Favorite, it will start appearing here.</p>
    </div>
}

export default Favorites