import React from 'react'
import './todo.css'
import TodoItems from './components/TodoItems';

function TodoPresenter() {
    return (
      <div style={{display:'flex', flexDirection:'column'}}>
        <div style={{height:'50px', width:'100%', backgroundColor:'skyblue', textAlign:'center'}}>
          <h3>To do List</h3>
        </div>

        <TodoItems />
        <TodoItems />
      </div>
    );
  }

export default TodoPresenter