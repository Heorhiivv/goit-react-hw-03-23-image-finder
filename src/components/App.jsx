import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    serachQuery: '',
  };
  onSearchFormSubmit = serachQuery => {
    this.setState({ serachQuery });
  };
  render() {
    const { serachQuery } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSearchFormSubmit} />

        <ImageGallery imageName={serachQuery} />

        {/*
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        /> */}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
