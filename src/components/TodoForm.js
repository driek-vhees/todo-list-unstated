import React from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
  let input;
  return (
    <form
      className="todo-form"
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        addTodo(input.value);
        input.value = '';
      }}
    >
      <input type="text" ref={node => { input = node; }} />
      <button type="submit">Add</button>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
