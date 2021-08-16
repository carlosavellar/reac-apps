import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "./../UI/Card";
import ErrorModal from "./../UI/ErrorModal";
import Button from "./../UI/Button";
import Wrapper from "./../Helpers/Wrapper";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const enteredUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const addUserHandler = (event) => {
    debugger;
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Something wrong with name and age fields are empty",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: " Invalid age",
        message: "Age field is empty",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal onSetError={errorHandler} {...error} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={enteredUsernameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={enteredAgeHandler}
          />
          <Button type="submit">add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
