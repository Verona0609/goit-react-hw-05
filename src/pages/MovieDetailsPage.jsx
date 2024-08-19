import axios from "axios";
import { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import styles from "./MovieDetails.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjM5NmM4MWIwZWQxMTc2NTRlMmQyZGMyZGUzODJhMiIsIm5iZiI6MTcyMzk4NTYxNi4wNzU2MDUsInN1YiI6IjY2YzFhNGFkNzFlYzg5YmQ4M2QwYmVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xo-_qenK1-e498OGf8GcNLxw-4IRPnmGqChwDbCldz0",
    },
  };

  useEffect(() => {
    axios
      .get(url, options)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => console.error(error));
  }, [movieId]);

  const handleGoBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from);
    } else {
      navigate("/");
    }
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <button className={styles.goback} onClick={handleGoBack}>
        Go back
      </button>
      <div className={styles.containerdetails}>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.title}>
            <b>Overview: </b> {movie.overview}
          </p>
          <p className={styles.title}>
            <b>Genres: </b> {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>

      <p className={styles.info}>
        <b>Additional information</b>
      </p>
      <Link
        className={styles.cast}
        to="cast"
        state={{ from: location.state?.from }}
      >
        Cast
      </Link>
      <Link
        className={styles.cast}
        to="reviews"
        state={{ from: location.state?.from }}
      >
        Reviews
      </Link>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
