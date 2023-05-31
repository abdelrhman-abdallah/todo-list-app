import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { v4 as uuid } from "uuid";

const todosInit = JSON.parse(window.localStorage.getItem("Todos")) || "[]";

function ToDoApp(props) {
  const [todos, setTodos] = useState(todosInit);

  useEffect(() => {
    window.localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (nextTodo) => {
    setTodos([...todos, { id: uuid(), Task: nextTodo, isComplete: false }]);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const todoStatusUpdate = todos.map((todo) =>
      todo.id === todoId ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(todoStatusUpdate);
  };
  const editToDo = (todoId, newTask) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, Task: newTask } : todo
    );
    setTodos(updatedTodo);
  };

  return (
    <Paper
      style={{
        height: "100vh",
        backgroundColor: "#ffffff",
        padding: 0,
        margin: 0,
      }}
      elevation={3}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To Do List
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid className="mt-3" container justifyContent="center">
        <Grid item xs={10} md={8} lg={4}>
          <ToDoForm addToList={addTodo} />
          <ToDoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleStatus={toggleTodo}
            editTodo={editToDo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ToDoApp;
