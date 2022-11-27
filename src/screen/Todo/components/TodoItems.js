import React from 'react'

function TodoItems({todo, onClickTodoItem}) {
  // const {todo} = props
  
  return (
    <div className="todo-item" onClick={onClickTodoItem(todo.id)}>
      <div className="remove">x</div>
      <div className="todo-text">{todo.title}</div>
      <div className="check-mark">
        {todo.completed? "✓" : ""}
      </div>
    </div>
  );
}

export default TodoItems