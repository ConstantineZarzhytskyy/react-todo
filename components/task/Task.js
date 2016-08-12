import React from 'react';
import {Provider, connect} from "react-redux";
import {increaseCounterToValue, decCounterToValue, resetToDefaultValue} from "../../action/counterAction.js";
import {bindActionCreators} from "redux"

var Task = React.createClass({
  getInitialState: function () {
    return {
      name: 'Write TODO',
      author: 'Admin'
    };
  },
  render: function () {
    var taskId = this.props.params.taskId;
    console.log(taskId);
    return (
        <div>
          <h1>{ this.props.counter }</h1>
          <h3>{ this.state.name }</h3>
          <h5>{ this.state.author }</h5>
        </div>
    );
  }
});

const mapStoreToProps = (store) => {
  return {
    counter: store.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounterToValue: bindActionCreators(increaseCounterToValue, dispatch),
    decCounterToValue: bindActionCreators(decCounterToValue, dispatch),
    resetToDefaultValue: bindActionCreators(resetToDefaultValue, dispatch)
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Task);
