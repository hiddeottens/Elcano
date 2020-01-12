import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import PropTypes from 'prop-types';
import Slider from '../products/product-details/Slider';
import './carousel.css';

const propTypes = {
  image: PropTypes.objectOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  visible: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

function ImageCarousel({ images, image, visible, onToggle }) {
  const index = images.findIndex(x => x.src === image.src);
  return (
    <Modal
      show={visible}
      onHide={onToggle}
      animation
      className="image-carousel"
    >
      <Modal.Body className="image-carousel__body">
        <button className="image-carousel__close" onClick={onToggle}>
          x
        </button>
        <div>
          <Slider
            slidesToShow={1}
            swipeToSlide
            item={{ images }}
            handleImageChange={() => {}}
            initialSlide={index}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

ImageCarousel.propTypes = propTypes;

export default ImageCarousel;
