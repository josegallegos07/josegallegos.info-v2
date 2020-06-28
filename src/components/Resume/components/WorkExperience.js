import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import WorkExperienceItem from './WorkExperienceItem';

function WorkExperience({
  title,
  company,
  companyDetails,
  img,
  start,
  end,
  details,
  projects,
  tech,
}) {
  return (
    <div className="work-experience">
      <div className="work-experience--left">
        <div className="work-experience-logo">
          <img alt={company} src={`img/logo/${img}.png`} />
        </div>
      </div>
      <div className="work-experience--right">
        <div className="work-experience-header">
          <div className="work-experience-title">{title}</div>
        </div>
        <div className="work-experience-company">{company}</div>
        {companyDetails && (
          <div className="work-experience-company-details">{companyDetails}</div>
        )}
        <div className="work-experience-dates">{start} {end && <>- {end}</>}</div>
        {details && (
          <WorkExperienceItem>
            <ul className="work-experience-details">
              {details.map((v, i) => <li key={i}>{v}</li>)}
            </ul>
          </WorkExperienceItem>
        )}
        {projects && (
          <WorkExperienceItem title="Notable Projects">
            <ul className="work-experience-projects">
              {projects.map((v, i) => <li key={i}>{v}</li>)}
            </ul>
          </WorkExperienceItem>
        )}
        {tech && (
          <WorkExperienceItem title="Technologies">
            <ul className="work-experience-tech">
              <li>{tech.join(', ')}</li>
            </ul>
          </WorkExperienceItem>
        )}
        <Divider />
      </div>
    </div>
  );
}

WorkExperience.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  companyDetails: PropTypes.string,
  img: PropTypes.string.isRequired,
  start: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  end: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  details: PropTypes.arrayOf(PropTypes.string),
  projects: PropTypes.arrayOf(PropTypes.string),
  tech: PropTypes.arrayOf(PropTypes.string),
};

WorkExperience.defaultProps = {
  end: null,
  details: null,
  projects: null,
  tech: null,
  companyDetails: null,
};

export default WorkExperience;