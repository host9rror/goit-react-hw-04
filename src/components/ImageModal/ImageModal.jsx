import Modal from "react-modal";
import PropTypes from 'prop-types';
import css from './ImageModal.module.css'

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        className={css.modal}
      >
        {image && (
          <div className={css.modalContent}>
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              className={css.image}
            />
          </div>
        )}
      </Modal>
    );
  };

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
};

export default ImageModal;
