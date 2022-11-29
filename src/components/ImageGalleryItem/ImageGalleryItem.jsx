import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../Modal/Modal';

export class GetImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  onClick = (e) => {
 this.setState({ isModalOpen: true });
  };

  onModalClose = (e) => {
    e.stopPropagation();
    
    if (e.target.nodeName !== "IMG") {
   this.setState({ isModalOpen: false });
}
    
  };

  render() {
    const { id, webformatURL, largeImageURL } = this.props;
    return (
      <li key={id} onClick={this.onClick} className="gallery-item">
        <img src={webformatURL} alt="" width="400px" />
        {this.state.isModalOpen && (
          <Modal onClose={this.onModalClose} largeImageURL={largeImageURL} />
        )}
      </li>
    );
  }
}

GetImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};