var tasks = [{
    id: 1,
    name: 'Learning ReactJS',
    author: 'Username author'
}, {
    id: 2,
    name: 'Write TODO',
    author: 'Admin'
}];

var taskReducer = function (state = [], action = null) {
    switch (action.type) {
        case 'GET_TASK':
            return tasks;
        default:
            return [];
    }
};

module.exports = taskReducer;
