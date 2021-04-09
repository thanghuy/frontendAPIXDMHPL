import Image1 from '../../../Assets/images/slider/1.jpg';
import Image2 from '../../../Assets/images/slider/2.jpg';
import Image3 from '../../../Assets/images/slider/3.jpg';
import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import PropTypes from 'prop-types';

const items = [
  {
    src: Image1,
    altText: '',
    caption: '',
    header: 'Khuyến mãi 1',
    key: '1'
  },
  {
    src: Image2,
    altText: '',
    caption: '',
    header: 'Khuyến mãi 2',
    key: '2'
  },
  {
    src: Image3,
    altText: '',
    caption: '',
    header: 'Khuyến mãi 3',
    key: '3'
  }
];
UncontrolledCarousel.propTypes = {
    items: PropTypes.array.isRequired,
    indicators: PropTypes.bool, // default: true
    controls: PropTypes.bool, // default: true
    autoPlay: PropTypes.bool, // default: true
  };
const SliderShow = (props) => {
    return (
        <UncontrolledCarousel items={items} />
    );
}

export default SliderShow;