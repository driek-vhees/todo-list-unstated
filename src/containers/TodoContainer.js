
import { Container } from 'unstated';
import uuid from 'uuid';

class TodoContainer extends Container {
  state = {
    todos: [],
  };

  toggleTodo(todoId) {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todoId === todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  }

  addTodo(title) {
    const newTodo = { id: uuid(), completed: false, title };
    this.setState(prevState => ({ todos: [...prevState.todos, newTodo] }));
  }
}

export default TodoContainer;
