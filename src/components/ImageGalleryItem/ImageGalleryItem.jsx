

export const GetImageGalleryItem = ({ id, webformatURL, }) => {
 
  return (
    <li key={id} className="gallery-item">
      <img src={webformatURL} alt="" width="400px"/>
    </li>
  );

};

 
