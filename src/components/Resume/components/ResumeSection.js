import React from 'react';
import PropTypes from 'prop-types';

function ResumeSection({ title, children }) {
  return (
    <div className="resume-section">
      <div className="resume-section-title">{title}</div>
      <div className="resume-section-content">{children}</div>
    </div>
  );
}

ResumeSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ResumeSection;
