import Header from "../../components/Header/Header";
import MoviesList from "../../components/moviesList/MoviesList";

const Home = ({ movies }) => {
  return (
    <div className="home">
      <Header />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
