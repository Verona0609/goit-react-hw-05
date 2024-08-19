import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className={styles.text}>404 - Not Found</h1>
      <p className={styles.text}>
        The page you are looking for does not exist.
      </p>
      <Link className={styles.text} to="/">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
