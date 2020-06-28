import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/ProfileItem.scss';

function ProfileItem({ content, icon }) {
  return (
    <div className="profile-item">
      <div className="profile-item-icon">{icon}</div>
      <div className="profile-item-content">{content}</div>
    </div>
  );
}

ProfileItem.propTypes = {
  content: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
};

export default ProfileItem;
