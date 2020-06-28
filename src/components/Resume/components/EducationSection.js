import React from 'react';
import PropTypes from 'prop-types';
import School from './School';

function EducationSection({ items }) {
  return (
    <div className="education-section">
      {items.map((item, i) => <School key={i} {...item} />)}
    </div>
  );
}

EducationSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(School.propTypes)),
};

EducationSection.defaultProps = {
  items: [],
};

export default EducationSection;
