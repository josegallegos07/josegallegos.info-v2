import React from 'react';
import PropTypes from 'prop-types';
import ProfileItem from './ProfileItem';

import '../styles/components/Profile.scss';

function Profile({ name, img, items }) {
  return (
    <div className="profile">
      <img className="profile-img" src={`img/${img}.jpg`} alt={name} />
      <div className="profile-name">{name}</div>
      {items.map((item, idx) => <ProfileItem key={`item-${idx}`} icon={item.icon} content={item.content} />)}
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(ProfileItem.propTypes)).isRequired,
};

export default Profile;
