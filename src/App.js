import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import MoviesList from "./components/moviesList/MoviesList";

function App() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json());
    setMovies(response.results);
  };

  console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <BrowserRouter>
      <Layout movies={movies}>
        <Routes>
          <Route path="/" element={<MoviesList movies={movies} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
