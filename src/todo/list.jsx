import React, { useState } from 'react';
import Modal from './modal';
import Index from './index';

function List() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    //spread operator eto yung ibang way para mag concat
    // let xArr = [1, 2,3,4];
    // let yArr = [5, 6, 7, 8];
    // let zArr = [0, …x, …y];
    // console.log(zArr);


    setTodos(newTodos);
    
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the agenda for today?</h1>
      <Modal onSubmit={addTodo} />
      <Index
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo} />
    </>
  );
}

export default List;