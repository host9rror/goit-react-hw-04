import PropTypes from 'prop-types';
import styles from './GalleryCard.module.css';

const GalleryCard = ({ image, onClick }) => {
  return (
    <div className={styles.galleryCard} onClick={onClick}>
      <div className={styles.galleryCardImageContainer}>
        <img
          src={image.urls.small}
          alt={image.alt_description}
          className={styles.galleryimg}
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
