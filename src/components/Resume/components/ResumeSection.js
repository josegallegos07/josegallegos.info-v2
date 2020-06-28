import React from 'react';
import PropTypes from 'prop-types';

function ResumeSection({ title, icon, children }) {
  return (
    <div className="resume-section">
      <div className="resume-section-title">{icon} {title}</div>
      <div className="resume-section-content">{children}</div>
    </div>
  );
}

ResumeSection.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default ResumeSection;
