import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import requestImage from '../../api';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { UnsplashImage } from './App.types';

function App() {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (!query) return;
        setLoading(true);
        setError(null);
        try {
          const response = await requestImage(query, page);          
          setImages(prevImages => (page === 1 ? response.results : [...prevImages, ...response.results]));         
        } catch (error) {
          setError('Something went wrong!');
        } finally {
        setLoading(false);
        }
    };
    fetchImage();
  }, [query, page]);
  
  const handleSearchSubmit = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (image: UnsplashImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  
  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      <Toaster />
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </>
  )
}

export default App
