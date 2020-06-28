import React from 'react';
import Profile from '../components/Profile';
import SocialMedia from '../components/SocialMedia';

import '../styles/Home.scss';

function Home({ name, social, profile, img, location }) {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-profile-container">
          <Profile name={name} img={img} location={location} items={profile} />
        </div>
        <div className="home-social-media-container">
          <SocialMedia items={social} />
        </div>
      </div>
    </div>
  );
}

Home.defaultProps = {
  name: '',
  social: [],
  profile: [],
  img: '',
  location: null,
};

export default Home;
