/* import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import styles from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
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

  useEffect(() => {});

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

export default MoviesPage; */

// src/pages/MoviesPage.jsx
import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return;

    const searchMovies = async (query) => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjM5NmM4MWIwZWQxMTc2NTRlMmQyZGMyZGUzODJhMiIsIm5iZiI6MTcyMzk4NTYxNi4wNzU2MDUsInN1YiI6IjY2YzFhNGFkNzFlYzg5YmQ4M2QwYmVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xo-_qenK1-e498OGf8GcNLxw-4IRPnmGqChwDbCldz0",
          },
          params: {
            query,
            language: "en-US",
          },
        }
      );
      return response.data.results;
    };

    const fetchMovies = async () => {
      try {
        const response = await searchMovies(query);
        setMovies(response);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchQuery = form.elements.query.value.trim();

    if (searchQuery === "") {
      return;
    }

    setSearchParams({ query: searchQuery });
  };

  return (
    <div>
      <h1 className={styles.text}>Search Movies</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="query"
          placeholder="Enter movie name"
          defaultValue={query}
        />
        <button className={styles.btn} type="submit">
          Search
        </button>
      </form>
      {movies.length > 0 ? <MovieList movies={movies} /> : <p></p>}
    </div>
  );
};

export default MoviesPage;
