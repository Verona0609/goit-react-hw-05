import { useEffect } from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");
const ImageModal = ({ modalIsOpen, closeModal, image }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalcontent}>
        <img src={image} alt="Large" className={styles.largeimage} />
      </div>
    </Modal>
  );
};

export default ImageModal;
