import React from 'react';
import Modal from '../Modal/Modal';
export const ImageGalleryItem = ({ imagesList }) => {
  return imagesList.map(({ id, webformatURL, tags }) => (
    <li key={id} className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  ));
};

// render() {
//   const { showModal } = this.state;
//   const gallery = this.props.imagesList;
//   return (
//     <>
//       {showModal && <Modal onClose={this.handelCloseModal} />}
//       {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
//         return (
//           <li
//             key={id}
//             className="ImageGalleryItem"
//             onClick={this.handleOpenModal}
//           >
//             <img
//               src={webformatURL}
//               alt={tags}
//               className="ImageGalleryItem-image"
//             />
//           </li>
//         );
//       })}
//     </>
//   );
// }
