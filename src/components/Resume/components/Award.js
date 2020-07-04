import React from 'react';
import PropTypes from 'prop-types';

function Award({ label, year }) {
  return (
    <div className="award">
      <div className="award--left">
        <div>{year}</div>
      </div>
      <div className="award--right">
        <div>{label}</div>
      </div>
    </div>
  );
}

Award.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Award;
