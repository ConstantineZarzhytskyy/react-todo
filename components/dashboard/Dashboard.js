import {Link } from 'react-router';
import React from 'react';
import {Provider, connect} from "react-redux";
import {getTask} from "../../action/taskAction.js";
import {bindActionCreators} from "redux"

var Dashboard = React.createClass({
  getInitialState: function () {
    this.props.getTasks();
    return {
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
              this.props.tasks.map(function(task,key) {
                return (
                    <li key={key}>
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
    // var tests = this.state.tasks;
    // tests.push({ name: this.state.name, author: this.state.author });
    // this.setState({ tasks: tests });

    console.log(this.props.tasks);
    // this._clearNewTask();
  }
});

const mapStoreToProps = (store) => {
  return {
    tasks: store.tasks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTasks: bindActionCreators(getTask, dispatch)
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Dashboard);

