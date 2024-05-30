import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
import GalleryList from './GalleryList/GalleryList';
import { fetchPhotosWithQuery } from './images-api';
import LoadMoreBtn from './LoadMoreButton/LoadMoreButton';
import ImageModal from './ImageModal/ImageModal';
import ErrorMessage from './ErrorMessage/ErrorMessage'; 

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userSearched, setUserSearched] = useState(false);
  const [hasMoreImages, setHasMoreImages] = useState(false);
  const [page, setPage] = useState(1); 
  // Виправлено назву змінної isOpen
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (keyword) => {
    try {
      setLoading(true);
      setUserSearched(true);
      setSearchQuery(keyword);
      const { images: fetchedImages, hasMore } = await fetchPhotosWithQuery(keyword);
      setImages(fetchedImages);
      setHasMoreImages(hasMore);
      setPage(1); 
    } catch (error) {
      console.error('Error searching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const { images: moreImages, hasMore } = await fetchPhotosWithQuery(searchQuery, page + 1);
      setImages(prevImages => [...prevImages, ...moreImages]);
      setHasMoreImages(hasMore);
      setPage(page + 1); 
    } catch (error) {
      console.error('Error loading more images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {images.length === 0 && userSearched && <ErrorMessage />} 
      <GalleryList images={images} userSearched={userSearched} onImageClick={handleImageClick} />
      {hasMoreImages && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && (
        <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} image={selectedImage} />
      )}
    </div>
  );
}

export default App;
