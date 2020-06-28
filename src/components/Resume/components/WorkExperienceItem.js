import React from 'react';
import PropTypes from 'prop-types';

function WorkExperienceItem({ title, children }) {
  return (
    <div className="work-experience-item">
      {title && (
        <div className="work-experience-item-title">{title}</div>
      )}
      {children}
    </div>
  );
}

WorkExperienceItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

WorkExperienceItem.defaultProps = {
  title: null,
};

export default WorkExperienceItem;
