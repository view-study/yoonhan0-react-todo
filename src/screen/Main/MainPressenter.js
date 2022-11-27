import React from "react";
import Clock from "../Clock";
import Todo from "../Todo"
function MainPresenter(props) {
  return (
    <div style={{width:'500px', margin:'100px auto', backgroundColor:'orange'}}>
      <div style={{height:'100px', display:"flex", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <div style={{flex:1, textAlign:'center'}}
              onClick={props.onClickTap('todo')}
              >
                <h2>Todo</h2>
        </div>
        <div style={{flex:1, textAlign:'center'}}
              onClick={props.onClickTap('clock')}
        >
          <h2>Clock</h2>
        </div>
      </div>
      {props.screen === "todo" ? <Todo/> : <Clock/> }
    </div>
    
  )
}

export default MainPresenter;
