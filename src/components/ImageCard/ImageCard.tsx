import { FC } from "react";
import { Image } from "../../types";

interface ImageCardProps {
  img: Image;
  openModal: (img: Image) => void;
}

const ImageCard: FC<ImageCardProps> = ({ img, openModal }) => {
  return (
    <div>
      <img
        src={img.urls.small}
        alt={img.alt_description}
        width={350}
        height={290}
        onClick={() => {
          openModal(img);
        }}
      />
    </div>
  );
};

export default ImageCard;
