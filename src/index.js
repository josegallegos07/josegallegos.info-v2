import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'antd/dist/antd.css';

function Root() {
  return <App />;
}

ReactDOM.render(<Root />, document.getElementById('root'));
