import PropTypes from 'prop-types';
import GalleryCard from '../GalleryCard/GalleryCard';
import css from './GalleryList.module.css';

const GalleryList = ({ images, onImageClick }) => {

    return (
      <div className={css.galleryListContainer}>
        <ul className={css.galleryList}>
          {images.map(image => (
            <li key={image.id}>
              <GalleryCard image={image} onClick={() => onImageClick(image)} />
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
