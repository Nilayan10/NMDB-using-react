import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import '../css/Home.css';
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to Load Movies...");
            }
            finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []); // default [] for rendering once, if it needs to render after a change, then add the array

    // const movies = [
    //     { id: 1, title: "Baby John", release_date: "2024" },
    //     { id: 2, title: "Sikandar", release_date: "2025" },
    //     { id: 3, title: "Spiderman- No Way Home", release_date: "2022" }
    // ];

    const handleSearch = async (e) => {
        e.preventDefault()

        if (!searchQuery.trim()) return
        if (loading) return

        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search for movies...")
        } finally {
            setLoading(false)
        }
        //setSearchQuery(""); //to set the search field to predefined query, here just blank, which would hence show just the placeholder text
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>
            {error  && <div className="error-message">{error}</div>}
            {loading ? (
                <div className="loading">Loading...</div>
                )
                : (
                    <div className="movies-grid">
                        {movies.map(
                            (movie) =>
                                movie.title.toLowerCase().startsWith(searchQuery) && (
                                    <MovieCard movie={movie} key={movie.id} />
                                )
                        )}
                    </div>
                )}
        </div>
    );
}

export default Home