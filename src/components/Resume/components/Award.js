import React from 'react';
import PropTypes from 'prop-types';

function Award({ label, start, end }) {
  return (
    <div className="award">
      <div className="award--left">
        <div>{start} {end && <>- {end}</>}</div>
      </div>
      <div className="award--right">
        <div>{label}</div>
      </div>
    </div>
  );
}

Award.propTypes = {
  label: PropTypes.string.isRequired,
  start: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  end: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Award.defaultProps = {
  end: null,
};

export default Award;
