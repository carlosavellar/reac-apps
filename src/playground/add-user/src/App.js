import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import Wrapper from "./Helpers/Wrapper";
import "./index.css";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...usersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Wrapper>
  );
}

export default App;
