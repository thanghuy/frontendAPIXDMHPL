import { useEffect, useRef } from 'react';
import {  withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const ScrollIntoView = ({ children, location }) => {
  const prevLocation = useRef();
  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return children;
};

ScrollIntoView.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
};

export default withRouter(ScrollIntoView);