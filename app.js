const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory, Redirect } from 'react-router';
import { createStore, applyMiddleware  } from "redux";
import { Provider, connect } from "react-redux";
import Dashboard from './components/dashboard/Dashboard.js';
import Task from './components/task/Task.js';
import rootReducer from './reducer/rootReducer.js';

const store = createStore(rootReducer, {
    tasks: []
});

var Routers = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/'>
                <IndexRoute component={Dashboard}/>
                <Route path='dashboard' component={ Dashboard }/>
                <Route path='task/:taskId' component={ Task }/>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(Routers, document.getElementById('app'));

