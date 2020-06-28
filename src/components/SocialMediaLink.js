import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/SocialMediaLink.scss';

function SocialMediaLink({ icon, url, desc, target }) {
  return (
    <a className={`social-media-link social-media-link--${icon}`} href={url} target={target}>
      <img src={`img/social-media/${icon}.svg`} alt={desc} />
    </a>
  );
}

SocialMediaLink.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  target: PropTypes.string,
};

SocialMediaLink.defaultProps = {
  target: '_blank',
};

export default SocialMediaLink;
