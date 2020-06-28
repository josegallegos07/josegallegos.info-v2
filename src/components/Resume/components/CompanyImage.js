import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';

function CompanyImage({ alt, img, url }) {
  const Img = <img alt={alt} src={`img/logo/${img}.png`} />;
  return url ? (
    <Tooltip title={alt} color="black">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {Img}
      </a>
    </Tooltip>
  ) : (
    <>{Img}</>
  );
}

CompanyImage.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string,
};

CompanyImage.defaultProps = {
  url: null,
};

export default CompanyImage;
