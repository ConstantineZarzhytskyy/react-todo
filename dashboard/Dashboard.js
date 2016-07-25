import React from 'react';

var Dashboard = React.createClass({
  render: function() {
    return (
        <div>
          <h1>DASHBOARD</h1>
          <ui>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
          </ui>
        </div>
    );
  }
});

module.exports = Dashboard;
