import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const url = "https://api.themoviedb.org/3/trending/movie/day";
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
        setMovies(response.data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1 className={styles.name}>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
