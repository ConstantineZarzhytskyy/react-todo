import React from 'react';
import Task from '../task/Task.js';
var tasks = [{
  name: 'Learning ReactJS',
  author: 'Username author'
}, {
  name: 'Write TODO',
  author: 'Admin'
}];


var Dashboard = React.createClass({
  getInitialState: function () {
    return {
      tasks: tasks,
      newTask: {
          name: '',
          author: ''
      }
    }
  },
  render: function() {
    return (
        <div>
          <h1>DASHBOARD</h1>
          <ui>
            {
              this.state.tasks.map(function(task, i) {
                return (
                    <li>
                      <Task task = { task } key = { i }/>
                    </li>
                )
              })
            }
          </ui>

          <form className="NewTaskForm">
            <input type="text" placeholder="Task info"
                   value = { this.state.newTask.name } onChange = { this._changeName } />
            <input type="text" placeholder="Author name"
                   value = { this.state.newTask.author } onChange = { this._changeAuthor } />
            <input type="button" onClick = { this._createNewTask }/>
          </form>
        </div>
    );
  },
  _clearNewTask: function () {
    this.setState({ newTask: {
      name: '',
      author: ''
    }});
  },
  _changeAuthor: function (e) {
    this.setState({ newTask: {
      author: e.target.value
    }});
  },
  _changeName: function (e) {
    this.setState({ newTask: {
      name: e.target.value
    }});
  },
  _createNewTask: function () {
    this.state.tasks.push({
      name: this.state.newTask.name,
      author: this.state.newTask.author
    });

    this._clearNewTask();
  }
});

module.exports = Dashboard;
