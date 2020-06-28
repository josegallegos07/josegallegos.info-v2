import React from 'react';
import ResumeSection from './components/ResumeSection';
import EducationSection from './components/EducationSection';
import AwardsSection from './components/AwardsSection';
import WorkSection from './components/WorkSection';

import '../../styles/components/Resume.scss';

function Resume({ education, awards, work }) {
  return (
    <div className="resume">
      <div className="resume-container">
        {education && (
          <ResumeSection title="Education">
            <EducationSection items={education} />
          </ResumeSection>
        )}
        {awards && (
          <ResumeSection title="Honors & Awards">
            <AwardsSection items={awards} />
          </ResumeSection>
        )}
        {work && (
          <ResumeSection title="Work">
            <WorkSection items={work} />
          </ResumeSection>
        )}
      </div>
    </div>
  );
}

Resume.defaultProps = {
  education: [],
  awards: [],
  work: [],
};

export default Resume;
