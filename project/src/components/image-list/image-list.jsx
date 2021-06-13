import React from 'react';
import PropTypes from 'prop-types';
import ImageItem from '../image-item/image-item';

function ImageList({ images }) {

  return (
    <div className="property__gallery">
      {images.map((image) => <ImageItem key={image} image={image} />)}
    </div>
  );
}

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageList;
