import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import { Audio } from 'react-loader-spinner';
import { getImages } from '../api-services/api-services';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { LoadMoreBtn } from 'components/Button/Button';

class ImageGallery extends Component {
  state = {
    gallery: [],
    isLoading: false,
    error: null,
    page: 1,
    showModal: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      const prevImageName = prevProps.imageName;
      const newImageName = this.props.imageName;
      if (prevImageName !== newImageName) {
        this.setState({ isLoading: true });
        const newSearchPage = 1;
        const galleryItems = await getImages(newImageName, newSearchPage);
        this.setState({
          gallery: galleryItems,
          page: 2,
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({ error });
      console.log(error);
    }
  }
  handelOpenModal = e => {
    if (e.currentTarget.nodeName === 'LI') {
      this.setState({ showModal: true });
    }
  };

  handelCloseModal = e => {
    this.setState({ showModal: false });
  };
  onLoadMore = async () => {
    this.setState({ isLoading: true });
    const galleryItems = await getImages(this.props.imageName, this.state.page);
    this.setState(state => ({
      gallery: [...state.gallery, ...galleryItems],
      page: this.state.page + 1,
      isLoading: false,
    }));
  };

  render() {
    const { gallery, isLoading, showModal } = this.state;
    return (
      <>
        {/* {showModal &&
          gallery.map(({ id, largeImageURL, tags }) => (
            <Modal onClose={this.handelCloseModal} key={id}>
              {<img src={largeImageURL} alt={tags} />}
            </Modal>
          ))} */}

        {isLoading ? (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
          />
        ) : (
          gallery.length > 0 && (
            <>
              <ul className="ImageGallery">
                <ImageGalleryItem
                  imagesList={gallery}
                  onClick={this.handelOpenModal}
                />
              </ul>
              <LoadMoreBtn
                onLoadMore={this.onLoadMore}
                isSubmitting={isLoading}
              />
            </>
          )
        )}
      </>
    );
  }
}

export default ImageGallery;
