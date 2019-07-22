import React from 'react';
import { Provider, Subscribe } from 'unstated';
import TodoContainer from './containers/TodoContainer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <Provider>
        <Subscribe to={[TodoContainer]}>
          {todo => (
            <React.Fragment>
              <TodoForm addTodo={title => todo.addTodo(title)} />
              <TodoList todos={todo.state.todos} toggleTodo={id => todo.toggleTodo(id)} />
            </React.Fragment>
          )}
        </Subscribe>
      </Provider>
    </div>
  );
}

export default App;
