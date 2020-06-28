import React from 'react';
import PropTypes from 'prop-types';
import Award from './Award';

function AwardsSection({ items }) {
  return (
    <div className="awards-section">
      {items.map((item, i) => <Award key={i} {...item} />)}
    </div>
  );
}

AwardsSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(Award.propTypes),
  ),
};

AwardsSection.defaultProps = {
  items: [],
};

export default AwardsSection;
