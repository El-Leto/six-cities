import React from 'react';
import PropTypes from 'prop-types';
import ImageItem from '../image-item/image-item';
import { FIRST_ELEMENT, MAX_IMAGES } from '../../const';

function ImageList({ images }) {

  return (
    <div className="property__gallery">
      {images
        .slice(FIRST_ELEMENT, MAX_IMAGES)
        .map((image) => <ImageItem key={image} image={image} />)}
    </div>
  );
}

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageList;
