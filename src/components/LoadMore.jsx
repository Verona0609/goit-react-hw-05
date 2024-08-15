import styles from "./LoadMore.module.css";
const LoadMore = ({ onClick }) => {
  return (
    <div className={styles.containerlm}>
      <button className={styles.buttonloadmore} onClick={onClick}>
        LOAD MORE
      </button>
    </div>
  );
};

export default LoadMore;
