import React, { useState } from "react";
import { Button, Input } from "@mui/material";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      text: inputValue,
      id: Date.now(),
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const todoList = todos.map((todo) => (
    <div key={todo.id}>
      {todo.text}
      <Button className="ms-4" onClick={() => handleDeleteTodo(todo.id)}>
        Delete
      </Button>
    </div>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="text" value={inputValue} onChange={handleInputChange} />
        <Button type="submit">Add To-Do</Button>
      </form>
      {todoList}
    </div>
  );
}

export default TodoApp;
