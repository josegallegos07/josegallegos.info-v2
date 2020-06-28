import React from 'react';
import PropTypes from 'prop-types';
import SocialMediaLink from './SocialMediaLink';

import '../styles/components/SocialMedia.scss';

function SocialMedia({ items }) {
  return (
    <div className="social-media">
      {items.map((item) => (
        <SocialMediaLink key={item.icon} icon={item.icon} url={item.url} desc={item.desc} />
      ))}
    </div>
  );
}

SocialMedia.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(SocialMediaLink.propTypes)),
};

SocialMedia.defaultProps = {
  items: [],
};

export default SocialMedia;
