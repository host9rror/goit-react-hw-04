import PropTypes from 'prop-types';
import css from './ImageCard.module.css';

const GalleryCard = ({ image, onClick }) => {
  return (
    <div className={css.galleryCard} onClick={onClick}>
      <div className={css.galleryCardImageContainer}>
        <img
          src={image.urls.small}
          alt={image.alt_description}
          className={css.galleryimg}
        />
      </div>
    </div>
  );
};

GalleryCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryCard;
