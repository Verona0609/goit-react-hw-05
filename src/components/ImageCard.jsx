import styles from "./ImageCard.module.css";
const ImageCard = ({ src, alt, onImageClick, largeImageURL }) => {
  return (
    <div className={styles.item} onClick={() => onImageClick(largeImageURL)}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
