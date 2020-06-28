import React from 'react';
import SocialMedia from '../components/SocialMedia';

import '../styles/Home.scss';

function Home({ social }) {
  return (
    <div className="home">
      <SocialMedia items={social} />
    </div>
  );
}

export default Home;
