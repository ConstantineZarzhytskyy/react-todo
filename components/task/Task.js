import React from 'react';

var Task = React.createClass({
  render: function () {
    return (
        <div>
          <h3>{ this.props.task.name }</h3>
          <h5>{ this.props.task.author }</h5>
        </div>
    );
  }
});

module.exports = Task;
