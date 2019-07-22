import React from 'react';
import PropTypes from 'prop-types'
import TodoDetails from './TodoDetails';

const TodoList = ({ todos, toggleTodo }) => (
  <div className="todo-list">
    <ul>
      {todos.map(todo => (
        <TodoDetails key={todo.id} todo={todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}
 
export default TodoList;