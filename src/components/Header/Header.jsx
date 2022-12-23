import { useEffect, useState } from "react";
import "./Header.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json());
    setMovie(response.results.slice(0, 1));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="left-overlay"></div>
          <div className="right-overlay"></div>
          <img
            src={
              "https://image.tmdb.org/t/p/original/" + movie[0]?.backdrop_path
            }
            alt={movie[0]?.title}
          />
          <div className="movie-header-infos">
            <h1>{movie[0]?.title}</h1>
            <p>{movie[0]?.overview}</p>
            <span>
              {movie[0]?.vote_average} <FontAwesomeIcon icon={faStar} />
            </span>
            <p>
              Release Date : <strong> {movie[0]?.release_date} </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
