import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import useInputState from "../Hooks/useInputState";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import Checkbox from "@mui/material/Checkbox";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";

function TodoEditingForm(props) {
  const [editVal, handleEditValChange, reset] = useInputState(props.Task);

  return (
    <>
      <form
        className="ms-3"
        onSubmit={(e) => {
          e.preventDefault();
          props.editTodo(props.id, editVal);
          reset();
          props.toggleEditForm();
        }}
      >
        <TextField
          margin="normal"
          value={editVal}
          fullWidth
          placeholder={editVal}
          onChange={(e) => handleEditValChange(e)}
          autoFocus
        />
      </form>
    </>
  );
}

export default TodoEditingForm;
