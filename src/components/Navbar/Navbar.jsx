import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faFire,
  faRankingStar,
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <h1 onClick={() => navigate("/")}>
        {" "}
        <img src={Logo} alt="" /> Popcorns
      </h1>

      <ul>
        <li>
          <Link to="/">
            {" "}
            <FontAwesomeIcon icon={faFilm} /> Movies
          </Link>
        </li>
        <li>
          <Link to="/popular">
            {" "}
            <FontAwesomeIcon icon={faFire} /> Popular
          </Link>
        </li>
        <li>
          <Link to="/top-rated">
            {" "}
            <FontAwesomeIcon icon={faRankingStar} /> Top rated
          </Link>
        </li>
        <li>
          <Link to="/upcoming">
            {" "}
            <FontAwesomeIcon icon={faCircleRight} /> Upcoming
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
