import { useNavigate } from "react-router-dom";
import "./MoviesList.css";

const MoviesList = ({ movies }) => {
  const navigate = useNavigate();

  return (
    <div className="movies-list">
      <h2 className="movies-list-title">Discover</h2>
      <div className="movies-grid">
        {movies?.map((movie) => (
          <div className="movie" key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
            <img
              src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
              alt={movie.title}
              className="movie-img"
            />
            <div className="movie-info">
              <h3 className="movie-title">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
