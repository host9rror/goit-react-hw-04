import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const GalleryList = ({ images, onImageClick }) => {

    return (
      <div className={css.galleryListContainer}>
        <ul className={css.galleryList}>
          {images.map(image => (
            <li key={image.id}>
              <ImageCard image={image} onClick={() => onImageClick(image)} />
            </li>
          ))}
        </ul>
      </div>
    );
};

GalleryList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default GalleryList;
