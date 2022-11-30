import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import SearchbarForm from './Searchbar/Searchbar';
import { getImages } from './Services/api';

import { ImageGalleryList } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/Button';


export class App extends React.Component {
  state = {
    page: 1,
    imageName: '',
    isLoading: false,
    error: '',
    images: [],
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.imageName !== this.state.imageName ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true });
        const data = await getImages(this.state.imageName, this.state.page);
        
        this.setState({
          images: [...this.state.images, ...data.hits],
          page: this.state.page,
          
        });
      } catch (error) {
        this.setState({
          error: error.message,
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onSelectImage = imageName => {
    this.setState({ imageName: imageName, images: [], page:1 });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SearchbarForm onSelectImage={this.onSelectImage} />

        {this.state.isLoading && <CircularProgress color="success" />}

        <ImageGalleryList images={this.state.images} />

        {this.state.imageName && <ButtonLoadMore onClick={this.loadMore} />}
       
      </div>
    );
  }
}
