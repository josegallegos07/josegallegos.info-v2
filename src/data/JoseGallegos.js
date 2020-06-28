import React from 'react';
import { ExperimentOutlined, CoffeeOutlined, MailOutlined } from '@ant-design/icons';

const JoseGallegos = {
  name: 'Jose Gallegos',
  img: 'josegallegos',
  profile: [
    {
      icon: <CoffeeOutlined />,
      content: (
        <div>San Francisco, CA</div>
      ),
    },
    {
      icon: <ExperimentOutlined />,
      content: (
        <div>Software Engineer @ <a href="https://woebot.io" target="_blank" rel="noopener noreferrer">Woebot Labs</a></div>
      ),
    },
    {
      icon: <MailOutlined />,
      content: (
        <div><a href="mailto:josegallegos07+sup@gmail.com">josegallegos07@gmail.com</a></div>
      ),
    },
  ],
  social: [
    {
      icon: 'github',
      desc: 'code I\'ve written',
      url: 'https://github.com/josegallegos07',
    },
    {
      icon: 'linkedin',
      desc: 'places I\'ve worked at',
      url: 'https://www.linkedin.com/in/joseluisgallegos',
    },
    {
      icon: 'lastfm',
      desc: 'music I\'ve listened to',
      url: 'http://www.last.fm/user/josegallegos07',
    },
  ],
};

export default JoseGallegos;
