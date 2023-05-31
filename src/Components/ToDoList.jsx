import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo) => (
          <>
            <ToDoItem
              id={todo.id}
              key={todo.id}
              Task={todo.Task}
              completed={todo.isComplete}
              deleteTodo={props.deleteTodo}
              toggleStatus={props.toggleStatus}
              editTodo={props.editTodo}
            />
            <Divider className="bg-secondary" />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default ToDoList;
