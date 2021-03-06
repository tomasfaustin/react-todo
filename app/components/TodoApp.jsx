var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
        id: 1,
        text: 'Walk the dog'
      }, {
        id: 2,
        text: 'Clean the yard'
      }, {
        id: 3,
        text: 'Handle your shit'
      }, {
        id: 4,
        text: 'Eat some goddamned food'
      }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
