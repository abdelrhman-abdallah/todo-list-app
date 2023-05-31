import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import "bootstrap/dist/css/bootstrap.min.css";
import useInputState from "../Hooks/useInputState";

function ToDoForm(props) {
  const [val, handleValChange, restVal] = useInputState("");
  return (
    <Paper className="my-4 p-2 bg-light">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addToList(val);
          restVal();
        }}
      >
        <TextField
          onChange={handleValChange}
          value={val}
          margin="normal"
          fullWidth
          label="Add New Todo"
        />
      </form>
    </Paper>
  );
}

export default ToDoForm;
