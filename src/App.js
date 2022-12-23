import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Upcoming from "./views/Upcoming/Upcoming";
import MovieDetails from "./views/MovieDetails/MovieDetails";
import MoviesPage from "./views/MoviesPage/MoviesPage";
import TopRated from "./views/TopRated/TopRated";
import Popular from "./views/Popular/Popular";

function App() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2`
    ).then((res) => res.json());
    setMovies(response.results);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <BrowserRouter>
      <Layout movies={movies}>
        <Routes>
          <Route path="/" element={<MoviesPage movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
