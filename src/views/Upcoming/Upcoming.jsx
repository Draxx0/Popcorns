import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "../MoviesPage/MoviesPage.css";

const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const navigate = useNavigate();
  const getUpcomingMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json());
    setUpcomingMovies(response.results);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getUpcomingMovies();
  }, []);
  return (
    <>
      <Header />
      <div className="movies-list">
        <h2>Discover upcoming films</h2>
        <div className="movies-grid">
          {upcomingMovies?.map((movie) => (
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
    </>
  );
};

export default Upcoming;
