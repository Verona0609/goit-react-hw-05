import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li className={styles.movieitem} key={movie.id}>
          <Link className={styles.moviename} to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
