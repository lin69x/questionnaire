import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, styles }) => (
  <div style={styles}>
    { children }
  </div>
);

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  styles: PropTypes.object
};

Card.defaultProps = {
  styles: {
    height: 230,
    background: '#fff',
    padding: 16,
    borderRadius: 2,
  },
};

export default Card
