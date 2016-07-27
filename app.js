const React = require('react');
const ReactDOM = require('react-dom');
import Dashboard from './components/dashboard/Dashboard.js';
import Task from './components/task/Task.js';

ReactDOM.render(
    <Dashboard/>,
    document.getElementById('app')
);
