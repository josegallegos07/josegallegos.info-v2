import React from 'react';
import { RocketOutlined, CoffeeOutlined, TrophyOutlined } from '@ant-design/icons';
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
          <ResumeSection title="Education" icon={<RocketOutlined />}>
            <EducationSection items={education} />
          </ResumeSection>
        )}
        {awards && (
          <ResumeSection title="Honors & Awards" icon={<TrophyOutlined />}>
            <AwardsSection items={awards} />
          </ResumeSection>
        )}
        {work && (
          <ResumeSection title="Work" icon={<CoffeeOutlined />}>
            <WorkSection items={work} maxItems={4} />
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
