import React from 'react';
import PropTypes from 'prop-types';

function School({ school, degree, major, start, end }) {
  return (
    <div className="school">
      <div className="school--left">
        <div>{start} {end && <>- {end}</>}</div>
      </div>
      <div className="school--right">
        <div>{school}</div>
        <div>{degree} in {major}</div>
      </div>
    </div>
  );
}

School.propTypes = {
  school: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  start: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  end: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

School.defaultProps = {
  end: null,
};

export default School;
