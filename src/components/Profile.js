import React from 'react';
import PropTypes from 'prop-types';
import ProfileItem from './ProfileItem';

import '../styles/components/Profile.scss';

function Profile({ name, img, items }) {
  return (
    <div className="profile">
      <div className="profile-img-container">
        <img className="profile-img" src={`img/${img}.jpg`} alt={name} />
      </div>
      <div className="profile-name">{name}</div>
      <div className="profile-items">
        {items.map((item, idx) => <ProfileItem key={`item-${idx}`} icon={item.icon} content={item.content} />)}
      </div>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(ProfileItem.propTypes)).isRequired,
};

export default Profile;
