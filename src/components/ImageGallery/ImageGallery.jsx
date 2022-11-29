import  { GetImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import {Ul } from './ImageGallery.styled'
export const ImageGalleryList = ({ images }) => {
    return (
      <Ul  className="gallery">
        {images.map(({ id, webformatURL }) => {
            return <GetImageGalleryItem key={id} webformatURL={webformatURL} id={id} />;
        })}
      </Ul >
    );
};
