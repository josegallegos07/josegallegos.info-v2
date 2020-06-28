import React from 'react';
import { ExperimentOutlined, RobotOutlined, MailOutlined } from '@ant-design/icons';

const JoseGallegos = {
  name: 'Jose Gallegos',
  img: 'josegallegos',
  profile: [
    {
      icon: <RobotOutlined />,
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
  education: [
    {
      school: 'University of California, Berkeley',
      start: 2007,
      end: 2011,
      degree: 'Bachelors of Arts',
      major: 'Psychology',
    },
  ],
  awards: [
    {
      start: 2013,
      label: (
        <a href="https://github.blog/2014-01-06-github-game-off-ii-winners/#protocol-390" target="_blank" rel="noopener noreferrer">
          Github Game Off II Winner
        </a>
      ),
    },
    {
      start: 2011,
      label: 'Dean’s Honor List',
    },
    {
      start: 2011,
      label: 'Psi Chi, International Honor Society in Psychology Membership',
    },
    {
      start: 2007,
      end: 2011,
      label: 'UC Berkeley: Incentive Awards Program Scholarship',
    },
  ],
  work: [
    {
      title: 'Full-Stack Engineer',
      company: 'Woebot Labs',
      img: 'woebot',
      start: 'May 2020',
      end: 'Present',
      location: 'San Francisco, CA',
    },
    {
      title: 'Full-Stack Engineer',
      company: 'PeopleGrove',
      img: 'peoplegrove',
      start: 'October 2018',
      end: 'January 2020',
      location: 'San Francisco, CA',
      description: 'Worked closely with a small team of product managers, designers, and engineers on a platform designed to help students achieve career and educational success through advising and mentorship relationships',
      details: [
        'Worked closely with a small team of product managers, designers, and engineers on a platform designed to help students achieve career and educational success through advising and mentorship relationships',
        'Regularly worked across the stack on new features, enhancements, and bug fixes',
        'Implemented user stories from technical specification to delivery',
        'Researched, proposed, and implemented new frameworks and libraries as needed',
        'Deeply involved in modernizing the front-end framework from a legacy Angular codebase to React',
      ],
      projects: [
        'Lead engineer on front-end overhaul of admin analytics dashboard',
        'Created configurable UI components around Antd, Bizcharts and Leaflet libraries for use across the app',
        'Improved performance of user connection management tool by optimizing PostgreSQL queries and revamping the front-end',
      ],
      tech: ['JavaScript', 'Node.js', 'Sails.js', 'Express', 'React/Redux', 'Angular', 'PostgreSQL', 'Sass/CSS', 'Flex'],
    },
    {
      title: 'Software Engineer',
      company: 'Posit Science',
      img: 'positscience',
      start: 'January 2012',
      end: 'June 2018',
      location: 'San Francisco, CA',
      description: 'Worked with a cross-functional team of neuroscientists and engineers to develop cognitive training exercises, assessments, and tools for +30 research studies on web, mobile, and native mobile platforms',
      details: [
        'Worked with researchers to develop cognitive training exercises and assessments for >30 research studies',
        'Architected and implemented new features according to study specifications',
        'Translated computerized neuropsychological assessments to web and mobile platforms',
        'Translated paper and pencil assessments to web and mobile platforms',
        'Served as technical support for research studies',
        'Integrated new automated build and workflow processing tasks into the existing infrastructure',
        'Actively wrote and maintained technical documentation for projects, including instructional materials for other developers and engineers',
      ],
      projects: [
        'Lead engineer of a mobile mood-tracking & assessment app (DARPA SUBNETS project)',
        'Lead engineer of a cross-platform computerized training program targeting Spatial Neglect',
        'Lead engineer of a web-based Parkinson\'s disease assessment battery',
        'Designed and developed an R-package as a data pulling and processing tool for in-house researchers, research assistants, and external collaborators',
      ],
      tech: ['CoffeeScript', 'JavaScript', 'ActionScript', 'C++', 'Swift', 'Objective-C', 'R/RStudio', 'Python', 'Ruby/Rake', 'Erlang', 'Backbone.js', 'Bootstrap', 'Sass/CSS', 'Flex'],
    },
    {
      title: 'R-Developer',
      company: 'UCSF Sandler Neurosciences Center',
      img: 'ucsf',
      start: 'October 2015',
      end: 'August 2016',
      location: 'San Francisco, CA',
      description: 'Developed an R-package around a large behavioral dataset',
      details: [
        'Designed and developed an R-package around a large behavioral and neurocognitive dataset for multiple research studies',
        'Implemented a robust system for cleaning & processing raw data into a statistical package-friendly format (R, SPSS, excel)',
        'Implemented a dynamic system for calculating summary statistics, both at a participant and at a group level',
        'Implemented a continuous build and automated tests pipeline with Github and Travis CI',
        'Actively maintained internal and external package documentation',
        'Worked with research assistants to debug, test, and validate package functions',
      ],
      tech: ['R/RStudio'],
    },
    {
      title: 'Undergraduate Research Assistant',
      company: 'Helen Wills Neuroscience Institute at UC Berkeley',
      img: 'berkeley',
      start: 'January 2011',
      end: 'August 2011',
      location: 'Berkeley, CA',
      description: 'Participant recruitment, data collection, and data analysis for a psychopharmacological study',
      details: [
        'Recruited participants for a psychopharmacological study',
        'Ran participants through an exhaustive 4-hour assessment battery',
        'Collected behavioral and neuropsychological assessment data',
        'Provided fMRI scanning support',
        'Scored & analyzed behavioral data',
        'Managed and maintained a subject database',
      ],
    },
    {
      title: 'Undergraduate Research Assistant',
      company: 'Institute of Personality and Social Research at UC Berkeley',
      companyDetails: 'Berkeley Social Interaction Laboratory',
      img: 'berkeley',
      start: 'January 2010',
      end: 'August 2011',
      location: 'Berkeley, CA',
      description: 'Behavioral coding and data analysis for a study on prosocial behavior',
      details: [
        'Systematically coded and rated participant behavior (behavioral coding)',
        'Examined the inter-rater reliability of behavioral coded data',
        'Calculated basic summary statistics',
      ],
    },
    {
      title: 'Mental Health Intern',
      company: 'Napa State Hospital',
      img: 'dsh',
      start: 'September 2010',
      end: 'April 2011',
      location: 'Napa, CA',
      description: 'Interacted with Napa State Hospital inpatients in various prosocial activities',
      details: [
        'Interacted with Napa State Hospital inpatients in various prosocial activities',
      ],
    },
  ],
};

export default JoseGallegos;
