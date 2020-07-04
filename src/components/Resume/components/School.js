import React from 'react';
import PropTypes from 'prop-types';
import CompanyImage from './CompanyImage';

function School({ school, img, degree, major, start, end }) {
  return (
    <div className="school">
      <div className="school--left">
        <div className="school-logo">
          <CompanyImage alt={school} img={img} />
        </div>
      </div>
      <div className="school--right">
        <div className="school-title">{school}</div>
        <div className="school-degree">{degree}, {major}</div>
        <div className="school-dates">{start} {end && <>- {end}</>}</div>
      </div>
    </div>
  );
}

School.propTypes = {
  school: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  start: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  end: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

School.defaultProps = {
  end: null,
};

export default School;
