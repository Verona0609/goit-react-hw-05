import axios from "axios";
import { useEffect, useState, useRef } from "react";
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
  const [loading, setLoading] = useState(true);
  const linkback = useRef(location.state?.from || "/movies");
  const navigate = useNavigate();

  const getMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjM5NmM4MWIwZWQxMTc2NTRlMmQyZGMyZGUzODJhMiIsIm5iZiI6MTcyMzk4NTYxNi4wNzU2MDUsInN1YiI6IjY2YzFhNGFkNzFlYzg5YmQ4M2QwYmVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xo-_qenK1-e498OGf8GcNLxw-4IRPnmGqChwDbCldz0",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching movie details:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(linkback.current);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movie) return <div>No movie found</div>;

  return (
    <div>
      <button onClick={handleGoBack} className={styles.goback}>
        {" "}
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
