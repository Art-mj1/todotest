import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState([
    {
      id: 0,
      title: "리액트를 배우자",
    },
  ]);
  const [title, setTitle] = useState("");
  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  //ADD버튼내용반영
  const clickAddButtonHandler = () => {
    const newTodo = {
      id: state.length + 1,
      title,
      isDone: false,
    };
    setState([...state, newTodo]);
  };
  //ADD버튼 내용추가
  const Button = ({ clickAddButtonHandler, children }) => {
    return <button onClick={clickAddButtonHandler}>{children}</button>;
  };
  const todoList = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div className='wrap'>
      <div className='todo-list' style={todoList}>
        <div className='todo-title' style={todoList}>
          <input type='text' value={title} onChange={titleChange} />
        </div>
        <div className='btns'>
          <Button
            type='button'
            clickAddButtonHandler={clickAddButtonHandler}
            className='Add'>
            추가
          </Button>
        </div>
      </div>
      <div className='main'>
        <h1>Todo리스트</h1>
        <div className='todo-style'>
          {state.map((item) => {
            return (
              <div key={item.id} className='component-style'>
                <h4 className='item-title'>{item.title}</h4>
                <p className='item-content'>{item.contents}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
