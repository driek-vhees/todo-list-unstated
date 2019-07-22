import React from 'react';
import TodoDetails from './TodoDetails';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div className="todo-list">
      <ul>
        { todos.map(todo => <TodoDetails
            key={todo.id}
            onClick={() => {toggleTodo(todo.id)}} todo={todo} />)
          }
      </ul>
    </div>
  );
}
 
export default TodoList;