import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjM5NmM4MWIwZWQxMTc2NTRlMmQyZGMyZGUzODJhMiIsIm5iZiI6MTcyMzk4NTYxNi4wNzU2MDUsInN1YiI6IjY2YzFhNGFkNzFlYzg5YmQ4M2QwYmVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xo-_qenK1-e498OGf8GcNLxw-4IRPnmGqChwDbCldz0",
        },
      })
      .then((response) => setReviews(response.data.results))
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <div>
      <h2 className={styles.text}>Reviews</h2>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <p className={styles.text}>{review.content}</p>
              <p className={styles.text}>Author: {review.author}</p>
            </li>
          ))
        ) : (
          <p className={styles.text}>No reviews available.</p>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
