import React, { useState, useRef } from 'react';
import { take, takeRight } from 'lodash';
import PropTypes from 'prop-types';
import WorkExperience from './WorkExperience';
import TextButton from '../../TextButton';
import useDidMountEffect from '../../../hooks/useDidMountEffect';

function WorkSection({ items, maxItems }) {
  const bottomRef = useRef(null);
  const [showingAll, setShowingAll] = useState(false);

  const numItems = maxItems || items.length;
  const topItems = take(items, numItems);
  const bottomItems = takeRight(items, items.length - numItems);

  useDidMountEffect(() => {
    if (!bottomRef || !bottomRef.current) return;
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [showingAll]);

  return (
    <div className="work-section">
      <div className="work-section-items">
        {topItems.map((item, i) => <WorkExperience key={i} {...item} />)}
        <div ref={bottomRef} />
        {showingAll && bottomItems.map((item, i) => <WorkExperience key={i} {...item} />)}
      </div>
      {maxItems && (
        <div className="work-section-more">
          <TextButton
            label={showingAll ? 'See Less' : 'See More'}
            onClick={() => setShowingAll(!showingAll)}
          />
        </div>
      )}
    </div>
  );
}

WorkSection.propTypes = {
  maxItems: PropTypes.number,
};

WorkSection.defaultProps = {
  maxItems: null,
};

export default WorkSection;
