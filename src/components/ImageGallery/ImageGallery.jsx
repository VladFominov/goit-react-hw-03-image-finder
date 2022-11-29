import PropTypes from 'prop-types';

import { GetImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { Ul } from './ImageGallery.styled';

export const ImageGalleryList = ({ images }) => {
  return (
    <Ul className="gallery">
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <GetImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            id={id}
          />
        );
      })}
    </Ul>
  );
};


ImageGalleryList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string,
      webformatURL: PropTypes.string,
    })
  ),
};