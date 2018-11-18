import React from 'react';
import PropTypes from 'prop-types';

import './message.css';

const Message = ({message}) => (
  <div className="message-container">
    <h2>{message}</h2>
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired
};

export default Message;
