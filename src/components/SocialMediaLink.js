import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';

import '../styles/components/SocialMediaLink.scss';

function SocialMediaLink({ icon, url, desc, target }) {
  return (
    <Tooltip title={desc} color="black" placement="bottom">
      <a
        className={`social-media-link social-media-link--${icon}`}
        href={url}
        target={target}
        rel="noopener noreferrer"
      >
        <img src={`img/social-media/${icon}.svg`} alt={desc} />
      </a>
    </Tooltip>
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
