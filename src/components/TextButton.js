import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/TextButton.scss';

function TextButton({ label, onClick }) {
  return (
    <div tabIndex="0" className="text-button" role="button" onClick={onClick} onKeyPress={onClick}>
      {label}
    </div>
  );
}

TextButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TextButton;
