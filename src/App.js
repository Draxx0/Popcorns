import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./views/Home/Home";
import MovieDetails from "./views/MovieDetails/MovieDetails";
import Populate from "./views/Populate/Populate";

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
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
          <Route path="/popular" element={<Populate />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
