import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TablePagination,
} from "@mui/material";

function TableComp() {
  return (
    <div>
      <TableContainer style={{ width: "500px", margin: "30px auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>GENDER</TableCell>
              <TableCell>CITY</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>101</TableCell>
              <TableCell>raj@gmail.com</TableCell>
              <TableCell>Raj Sinha</TableCell>
              <TableCell>male</TableCell>
              <TableCell>Mumbai</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>101</TableCell>
              <TableCell>raj@gmail.com</TableCell>
              <TableCell>Raj Sinha</TableCell>
              <TableCell>male</TableCell>
              <TableCell>Mumbai</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>101</TableCell>
              <TableCell>raj@gmail.com</TableCell>
              <TableCell>Raj Sinha</TableCell>
              <TableCell>male</TableCell>
              <TableCell>Mumbai</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>101</TableCell>
              <TableCell>raj@gmail.com</TableCell>
              <TableCell>Raj Sinha</TableCell>
              <TableCell>male</TableCell>
              <TableCell>Mumbai</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[2, 5, 10, 15, 20]}
          rowsPerPage={10}
          page={2}
          count={50}
        />
      </TableContainer>
    </div>
  );
}

export default TableComp;
