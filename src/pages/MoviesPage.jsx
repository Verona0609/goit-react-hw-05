import axios from "axios";
import { useState } from "react";
import MovieList from "../components/MovieList";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const url = "https://api.themoviedb.org/3/search/movie";
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjM5NmM4MWIwZWQxMTc2NTRlMmQyZGMyZGUzODJhMiIsIm5iZiI6MTcyMzk4NTYxNi4wNzU2MDUsInN1YiI6IjY2YzFhNGFkNzFlYzg5YmQ4M2QwYmVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xo-_qenK1-e498OGf8GcNLxw-4IRPnmGqChwDbCldz0",
    },
    params: {
      query,
    },
  };
 
  const searchMovies = (e) => {
    e.preventDefault();
    if (!query) return;

    axios
      .get(url, options)
      .then((res) => setMovies(res.data.results))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1 className={styles.text}>Search Movies</h1>
      <form className={styles.form} onSubmit={searchMovies}>
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie name"
        />
        <button className={styles.btn} type="submit">
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
