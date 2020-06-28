import React from 'react';
import WorkExperience from './WorkExperience';

function WorkSection({ items }) {
  return (
    <div className="work-section">
      {items.map((item, i) => <WorkExperience key={i} {...item} />)}
    </div>
  );
}

export default WorkSection;
