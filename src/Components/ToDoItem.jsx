import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import useToggle from "../Hooks/useToggle";
import TodoEditingForm from "./TodoEditingForm";

function ToDoItem(props) {
  const [isEditing, toggleIsEditing] = useToggle();
  return (
    <ListItem>
      {isEditing ? (
        <TodoEditingForm
          Task={props.Task}
          editTodo={props.editTodo}
          id={props.id}
          toggleEditForm={toggleIsEditing}
        />
      ) : (
        <>
          <Checkbox
            checked={props.completed}
            onClick={() => props.toggleStatus(props.id)}
          />
          <ListItemText
            style={{
              textDecoration: props.completed ? "line-through" : "none",
            }}
          >
            {props.Task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="edit todo task" onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete todo task"
              onClick={() => props.deleteTodo(props.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default ToDoItem;
