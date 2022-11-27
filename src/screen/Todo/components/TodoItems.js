import React from 'react'

function TodoItems() {
  return (
    <section id="listBox" style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        <div className="todo-item">
        <div className="remove">x</div>
        <div className="todo-text">리스트 내용</div>
        <div className="check-mark">✓</div>
        </div>
    </section>
  )
}

export default TodoItems