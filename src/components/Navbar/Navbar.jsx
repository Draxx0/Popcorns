import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faFire,
  faRankingStar,
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav>
      <div className="top-nav">
        <h1>
          {" "}
          <img src={Logo} alt="" /> Popcorns
        </h1>
      </div>
      <div className="bottom-nav">
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
            <Link to="/rated">
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
      </div>
    </nav>
  );
};

export default Navbar;
