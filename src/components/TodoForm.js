import React from 'react';

const TodoForm = ({ addTodo }) => {
  let input;
  return (
    <form className="todo-form" onSubmit={e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      addTodo(input.value);
      input.value = '';
    }}>
      <input type="text" ref={node => input = node} />
      <button type="submit">Add</button>
    </form>
  );
}
 
export default TodoForm;