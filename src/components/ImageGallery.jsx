import ImageCard from "./ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description}
            largeImageURL={image.urls.regular}
            onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
