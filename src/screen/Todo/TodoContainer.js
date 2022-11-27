import React, { useState, useEffect } from 'react'
import TodoPressenter from './TodoPressenter'

function TodoContainer() {
    const [todoList, setTodoList] = useState([])    // 빈 배열로 todoList 초기화 / se(T)odoList

    useEffect(() => { 
      // console.log("Todo 들어옴");
      getTodoList();    // 해당 페이지 들어오면 실행
    
      return () => {
        console.log("Todo 나감");   // 해당 페이지 나가면 실행
      }
    }, [])
    
    const getTodoList = async () => { // api List 출력하기
        const api = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await api.json()
        setTodoList(data)   // todoList를 다루기 위해서 setTodoList 사용
    }
    
    const handleClickTodoItem = (id) => () => {
        
        let newList = todoList.map(e => {
            if(e.id === id) {
                if(e.completed) {
                    e.completed = false
                }
                else {
                    e.completed = true
                }
            }
            return e
        });
        setTodoList(newList);
        //checklist[0].completed ? checklist[0].completed = false : checklist[0].completed = true
        // console.log(checklist[0].completed);
    }
    return <TodoPressenter todoList={todoList} onClickTodoItem={handleClickTodoItem}/>;
}

export default TodoContainer