import React, { useState, useEffect } from "react";
import Users from "./components/Users";
import AddUserForm from "./components/addUser/AddUserForm";
import "./App.css";

const arrUsers = [
  { userName: "rotschild", age: 11, id: Math.random() * 3 },
  { userName: "rockfeller", age: 12, id: Math.random() * 3 },
  { userName: "bush", age: 34, id: Math.random() * 3 },
];

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(arrUsers);
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const addUserHandler = (newUsers) => {
    setUsers((prevUsers) => [newUsers, ...prevUsers]);
  };

  const userListDelete = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => {
        return user.id !== userId;
      });
    });
  };

  return (
    <div>
      <AddUserForm onAddNewUser={addUserHandler} />
      <Users users={users} onDeleteUser={userListDelete} />
    </div>
  );
}

export default App;
