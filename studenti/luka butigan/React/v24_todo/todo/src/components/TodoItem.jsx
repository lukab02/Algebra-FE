import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

class TodoItem extends React.Component {
  handleToggleTodoClick() {
    const { todo, toggleTodo } = this.props;
    toggleTodo(todo.id);
  }

  handleRemoveTodo() {
    const { todo, removeTodo } = this.props;

    removeTodo(todo.id);
  }

  render() {
    const { todo } = this.props;
    const textClass = todo.completed
      ? 'todo-item-text todo-item-completed'
      : 'todo-item-text';

    return (
      <>
        <ListGroup.Item className="todo-item">
          <span
            className="todo-item-item"
            onClick={this.handleToggleTodoClick.bind(this)}
          >
            <Form.Check checked={todo.completed}></Form.Check>
            <span className={textClass}>{todo.text}</span>
          </span>
          <span
            className="todo-item-delete-button"
            onClick={this.handleRemoveTodo.bind(this)}
          >
            X
          </span>
        </ListGroup.Item>
      </>
    );
  }
}

export default TodoItem;
