import { useState } from "react";
import NewUser from "./NewUser";
import UserDetails from "./UserDetails";
import "./Users.css";

function Users() {
  let [users, setUsers] = useState([]);
  let [stateContainer, setStateContainer] = useState({
    state: null,
    setState: null,
  });
  let [newuser, setNewUser] = useState(true);
  return (
    <div className="userscontainer container">
      <NewUser
        state={{ users, setUsers }}
        stateContainer={{ stateContainer, setStateContainer }}
        newUser={{ newuser, setNewUser }}
      />

      <UserDetails
        state={{ users, setUsers }}
        stateContainer={{ stateContainer, setStateContainer }}
        newUser={{ setNewUser }}
      />
    </div>
  );
}

export default Users;
