import ReactModal from "react-modal";
import css from "../ImageModal/ImageModal.module.css";
import { Image } from "../../types";
import { FC } from "react";

ReactModal.setAppElement("#root");

if (ReactModal.defaultStyles && ReactModal.defaultStyles.overlay) {
  ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.7)";
}

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "1200px",
    height: "650px",
    overflow: "hidden",
    padding: "0",
    border: "none",
  },
};

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: null | Image;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  return (
    <div>
      <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <img
          src={image?.urls.regular}
          alt={image?.alt_description}
          className={css.image}
        />
      </ReactModal>
    </div>
  );
};

export default ImageModal;
