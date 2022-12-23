import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./MovieDetails.css";

const MovieDetails = ({ movies }) => {
  const [currentMovie, setCurrentMovie] = useState({});
  const { id } = useParams();

  const findCurrentMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const data = await response.json();
    setCurrentMovie(data);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    findCurrentMovie();
  }, []);
  return (
    <div className="movie-details">
      <img
        src={
          "https://image.tmdb.org/t/p/original/" + currentMovie.backdrop_path
        }
        alt={currentMovie.title}
        className="movie-details-img"
      />

      <div className="movie-infos">
        <div className="movie-stars">
          <span>
            {parseFloat(currentMovie.vote_average).toFixed(2)}{" "}
            <FontAwesomeIcon icon={faStar} />{" "}
          </span>
          ({currentMovie.vote_count} reviews)
        </div>
        <h1>{currentMovie.title}</h1>
        <div className="movie-tags">
          {currentMovie.genres?.map((genre) => (
            <span className="movie-tag" key={genre.id}>
              {genre.name}
            </span>
          ))}
        </div>
        <h3>{currentMovie.release_date}</h3>
        <p className="movie-description">{currentMovie.overview}</p>
        <div className="productions">
          {currentMovie.production_companies?.map((company) => (
            <div className="production" key={company.id}>
              {company.logo_path ? (
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/" + company.logo_path
                  }
                  alt={company.name}
                />
              ) : (
                <span>{company.name}</span>
              )}
            </div>
          ))}
        </div>
        <div className="more-links">
          {currentMovie.homepage && (
            <a
              href={currentMovie.homepage}
              target="_blank"
              rel="noreferrer"
              className="website-link"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
