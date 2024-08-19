import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjM5NmM4MWIwZWQxMTc2NTRlMmQyZGMyZGUzODJhMiIsIm5iZiI6MTcyMzk4NTYxNi4wNzU2MDUsInN1YiI6IjY2YzFhNGFkNzFlYzg5YmQ4M2QwYmVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xo-_qenK1-e498OGf8GcNLxw-4IRPnmGqChwDbCldz0",
        },
      })
      .then((response) => setCast(response.data.cast))
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.length > 0 ? (
          cast.map((actor) => (
            <li
              className={styles.text}
              key={actor.cast_id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              {/* Перевірка на наявність зображення профілю */}
              {actor.profile_path ? (
                <img
                  className={styles.actorimg}
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                  style={{
                    width: "100px",
                    height: "150px",
                    marginRight: "10px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100px",
                    height: "150px",
                    backgroundColor: "#ccc",
                    marginRight: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  No Image
                </div>
              )}
              <span>
                {actor.name} as {actor.character}
              </span>
            </li>
          ))
        ) : (
          <p className={styles.text}>No cast information available.</p>
        )}
      </ul>
    </div>
  );
};

export default MovieCast;
