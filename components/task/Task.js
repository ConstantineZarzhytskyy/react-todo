import React from 'react';
import {connect} from "react-redux";
import {getTask} from "../../action/taskAction.js";
import {bindActionCreators} from "redux"

var Task = React.createClass({
  getInitialState: function () {
    this.props.getTasks();
    return {
        name: 'Write TODO',
        author: 'Admin'
      };
  },

  componentDidMount: function () {
    var taskId = this.props.params.taskId;
    var tasks = this.props.tasks;
    for(var i in tasks) {
      if (tasks[i].id == taskId) {
        this.setState({
          name: tasks[i].name,
          author: tasks[i].author
        })
      }
    }
  },

  render: function () {
    return (
        <div>
          <h3>{ this.state.name }</h3>
          <h5>{ this.state.author }</h5>
        </div>
    );
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

export default connect(mapStoreToProps, mapDispatchToProps)(Task);
