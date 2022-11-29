import PropTypes from 'prop-types';
import { Overlay, ModalContent } from './Modal.styled.js';

export const Modal = ({ onClose, largeImageURL }) => {
  document.addEventListener('keydown', onClose);
  return (
    <Overlay onClick={onClose}>
      <ModalContent>
        <img src={largeImageURL} alt="" width="800px" height="600px" />
      </ModalContent>
    </Overlay>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
}; 
