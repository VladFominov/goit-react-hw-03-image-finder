import React from 'react';
import PropTypes from 'prop-types';

import { Searchbar } from './Searchbar.styled';

class SearchbarForm extends React.Component {
  state = {
    imageName: '',
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({ imageName: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      imageName: '',
    });
    if (!this.state.imageName.length) return;
    this.props.onSelectImage(this.state.imageName);
  };

  render() {
    return (
      <Searchbar>
        <form className="form" onSubmit={this.onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            value={this.state.imageName}
            type="text"
            name="imageName"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onInput={this.onChange}
          />
        </form>
      </Searchbar>
    );
  }
}

export default SearchbarForm;

SearchbarForm.propTypes = {
  imageName: PropTypes.string,
};
