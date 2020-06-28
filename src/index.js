import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'antd/dist/antd.css';
import './styles/App.scss';
import './styles/Common.scss';

const Root = () => <App />;

ReactDOM.render(<Root />, document.getElementById('root'));
