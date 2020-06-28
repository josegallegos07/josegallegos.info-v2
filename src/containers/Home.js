import React from 'react';
import Profile from '../components/Profile';
import SocialMedia from '../components/SocialMedia';
import Resume from '../components/Resume';

import '../styles/Home.scss';

function Home({ name, social, profile, img, location, work, awards, education }) {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-profile">
          <Profile name={name} img={img} location={location} items={profile} />
          <div className="home-social-media-container">
            <SocialMedia items={social} />
          </div>
        </div>
        <div className="home-resume">
          <Resume work={work} awards={awards} education={education} />
        </div>
      </div>
    </div>
  );
}

Home.defaultProps = {
  name: '',
  img: '',
  location: null,
  social: [],
  profile: [],
  work: [],
  education: [],
  awards: [],
};

export default Home;
