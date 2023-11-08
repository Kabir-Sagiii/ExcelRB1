import { useState } from "react";
import "./Table.css";

function Table() {
  let [state, setState] = useState([
    {
      name: "Anuj Verma",
      gender: "male",
      city: "Delhi",
    },
    {
      name: "Ashwini Patil",
      gender: "female",
      city: "Pune",
    },

    {
      name: "Priya Jadhav",
      gender: "female",
      city: "Nashik",
    },
    {
      name: "Swati Kumari",
      gender: "female",
      city: "Banglore",
    },
    {
      name: "Rohan Sharma",
      gender: "male",
      city: "Hyderabad",
    },
  ]);
  return (
    <div>
      <table id="table" cellPadding={10}>
        <thead bgcolor="black" style={{ color: "white" }}>
          <tr>
            <th>NAME</th>
            <th>GENDER</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody>
          {state.map((element, index) => {
            //element = {name:"",gender:"",city:""}
            return (
              <tr>
                <td>{element.name}</td>
                <td>{element.gender}</td>
                <td>{element.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button>New Users</button>&nbsp;&nbsp;
      <button>Previous Users</button>
    </div>
  );
}

export default Table;
