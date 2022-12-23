import Header from "../../components/Header/Header";
import MoviesPage from "../MoviesPage/MoviesPage";

const Home = ({ movies }) => {
  return (
    <div className="home">
      <Header />
      <MoviesPage movies={movies} />
    </div>
  );
};

export default Home;
