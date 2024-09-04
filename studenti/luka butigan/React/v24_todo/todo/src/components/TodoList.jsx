import { TodoItem } from './index';
import ListGroup from 'react-bootstrap/ListGroup';

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ListGroup>
  );
}

export default TodoList;
