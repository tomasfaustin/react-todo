var React = require('react');
var TodoList = require('TodoList')

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
        id: 1,
        text: '1. Walk the dog'
      }, {
        id: 2,
        text: '2. Clean the yard'
      }, {
        id: 3,
        text: '3. Handle your shit'
      }, {
        id: 4,
        text: '4. Eat some goddamned food'
      }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
