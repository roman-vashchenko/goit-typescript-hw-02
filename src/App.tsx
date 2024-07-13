import { useEffect } from "react";
import { getImagesApi } from "./api/images-api";
import { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { ApiResponse, Image } from "./types";
import Loader from "./components/Loader/Loader";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoader, setLoader] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean | number>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [image, setImage] = useState<null | Image>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoader(true);
        setShowBtn(false);
        const data: ApiResponse = await getImagesApi(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setShowBtn(data.total_pages && data.total_pages !== page);
      } catch (e) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    query && fetchData();
  }, [query, page]);

  const handleSubmit = (query: string): void => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const hendleLoadMore = (): void => {
    setPage(page + 1);
  };

  const handleCloseModal = (): void => {
    setIsOpen(false);
  };

  const handleOpenModal = (img: Image): void => {
    setIsOpen(true);
    setImage(img);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={handleOpenModal} />
      )}
      {isLoader && <Loader />}
      {showBtn && <LoadMoreBtn onClick={hendleLoadMore} />}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={handleCloseModal}
          image={image}
        />
      )}
    </>
  );
}

export default App;
