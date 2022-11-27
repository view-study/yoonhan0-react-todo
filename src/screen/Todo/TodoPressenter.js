import React from 'react'
import './todo.css'
import TodoItems from './components/TodoItems';

function TodoPresenter({todoList, onClickTodoItem}) {
    return (
      <div style={{display:'flex', flexDirection:'column'}}>
        <div style={{height:'50px', width:'100%', backgroundColor:'skyblue', textAlign:'center'}}>
          <h3>To do List</h3>
        </div>

        <section id="listBox" style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          {todoList.map((todo, index) => <TodoItems key={index} todo={todo} onClickTodoItem={onClickTodoItem}/>)}
        </section>
      </div>
    );
  }

export default TodoPresenter