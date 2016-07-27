var counter = function (state = 0, action = null) {
  switch (action.type) {
    case 'DEFAULT_VALUE':
      return state = 0;
    case 'DECREMENT_TO_VALUE':
      return state - 1;
    case 'INCREASE_TO_VALUE':
      return  state = ++state;
    default:
      return state;
  }
};

module.exports = counter;
