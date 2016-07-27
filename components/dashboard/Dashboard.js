import React from 'react';
import {Link } from 'react-router';


var tasks = [{
  id: 1,
  name: 'Learning ReactJS',
  author: 'Username author'
}, {
  id: 2,
  name: 'Write TODO',
  author: 'Admin'
}];


var Dashboard = React.createClass({
  getInitialState: function () {
    return {
      tasks: tasks,
      name: '',
      author: ''
    }
  },
  render: function() {
    return (
        <div>
          <h1>DASHBOARD</h1>
          <ui>
            {
              this.state.tasks.map(function(task) {
                return (
                    <li>
                      <h3><Link to = { "task/" + task.id }>{ task.name }</Link></h3>
                      <h5>{ task.author }</h5>
                    </li>
                )
              })
            }
          </ui>

          <form className="NewTaskForm">
            <input type="text" placeholder="Task info"
                   value = { this.state.name } onChange = { this._changeName } />
            <input type="text" placeholder="Author name"
                   value = { this.state.author } onChange = { this._changeAuthor } />
            <input type="button" onClick = { this._createNewTask }/>
          </form>
        </div>
    );
  },
  _clearNewTask: function () {
    this.setState({ name: '', author: '' });
  },
  _changeAuthor: function (e) {
    this.setState({ author: e.target.value });
  },
  _changeName: function (e) {
    this.setState({ name: e.target.value });
  },
  _createNewTask: function () {
    var tests = this.state.tasks;
    tests.push({ name: this.state.name, author: this.state.author });
    this.setState({ tasks: tests });

    this._clearNewTask();
  }
});

module.exports = Dashboard;
