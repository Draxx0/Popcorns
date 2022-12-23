import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const Populate = () => {
  const [populateMovies, setPopulateMovies] = useState([]);
  const navigate = useNavigate();

  const getPopulateMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json());
    setPopulateMovies(response.results);
  };

  console.log(populateMovies);

  useEffect(() => {
    window.scrollTo(0, 0);
    getPopulateMovies();
  }, []);
  return (
    <div className="populate">
      <Header />
      {populateMovies.length === 0 && <h1>Loading...</h1>}
      {populateMovies.length > 0 && (
        <div className="movies-list">
          <h2 className="movies-list-title">
            Find the most popular films of the moment
          </h2>
          <div className="movies-grid">
            {populateMovies?.map((movie) => (
              <div
                className="movie"
                key={movie.id}
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/" +
                    movie.poster_path
                  }
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
      )}
    </div>
  );
};

export default Populate;
