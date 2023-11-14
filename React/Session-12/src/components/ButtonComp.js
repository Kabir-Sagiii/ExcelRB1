import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function ButtonComp() {
  return (
    <div>
      <button>Without Material UI</button>
      <br />
      <br />
      <Button variant="text">Material UI</Button>

      <br />
      <br />
      <Button variant="contained">Material UI</Button>

      <br />
      <br />
      <Button variant="outlined" color="success" size="large">
        Material UI
      </Button>
      <br />
      <br />
      <Button
        variant="outlined"
        color="success"
        size="large"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <br />
      <br />
      <Button
        variant="outlined"
        color="success"
        size="large"
        endIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </div>
  );
}

export default ButtonComp;
