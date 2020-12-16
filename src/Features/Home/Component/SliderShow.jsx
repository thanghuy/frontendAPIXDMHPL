import Image1 from '../../../Assets/images/slider/1.jpg';
import Image2 from '../../../Assets/images/slider/2.jpg';
import Image3 from '../../../Assets/images/slider/3.jpg';
import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import PropTypes from 'prop-types';

const items = [
  {
    src: Image1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: Image2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: Image3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
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