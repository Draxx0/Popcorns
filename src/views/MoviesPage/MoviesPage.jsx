import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./MoviesPage.css";

const MoviesPage = ({ movies }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="populate">
      <Header />

      <div className="movies-list">
        <h2>Let's discover our selection</h2>
        <div className="movies-grid">
          {movies?.map((movie) => (
            <div
              className="movie"
              key={movie.id}
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
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
    </div>
  );
};

export default MoviesPage;
