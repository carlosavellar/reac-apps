import { useState, useEffect } from "react";
import Box from "../box/Box";
import styles from "./AddUserForm.module.css";
import Button from "./../button/Button";
const AddUserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [usernameIsTouched, setUsernameIsTouched] = useState(false);
  const [ageIsTouched, setAgeIsTouched] = useState(false);
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [enteredAgeIsValid, setEnteredAgeIsValid] = useState(false);
  const [isFormInvalid, setIsFormInvalid] = useState(true);

  const handlerGetUsername = (e) => {
    setEnteredUsername(e.target.value);
  };

  const usernameTouchedHandler = (e) => {
    setUsernameIsTouched(true);
    if (e.target.value.trim() === "") {
      setUsernameIsValid(false);
    }
  };

  const ageTouchedHandler = (e) => {
    setAgeIsTouched(true);
    if (isNaN(e.target.value)) {
      debugger;
      setEnteredAgeIsValid(false);
    }
  };

  const handlerGetAge = (e) => setEnteredAge(e.target.value);

  const submitNewUserHandler = (e) => {
    e.preventDefault();

    if (usernameIsValid && enteredAgeIsValid) {
      setIsFormInvalid(false);
    }

    props.onAddNewUser({
      username: enteredUsername,
      age: enteredAge,
      id: Math.random() * 0.3,
    });

    setEnteredUsername("");
    setEnteredAge("");
  };

  useEffect(() => {
    if (isFormInvalid) {
      debugger;
      return;
    }

    console.log(enteredUsername);
    console.log(enteredAge);
  }, [enteredUsername, enteredAge, isFormInvalid]);

  return (
    <Box>
      <form onSubmit={submitNewUserHandler}>
        <div className={styles.input}>
          <div>
            <label>User name</label>
            <input
              type="text"
              value={enteredUsername}
              onChange={handlerGetUsername}
              onBlur={usernameTouchedHandler}
            />
          </div>
          <div>
            <label>User name</label>
            <input
              type="text"
              value={enteredAge}
              onChange={handlerGetAge}
              onBlur={ageTouchedHandler}
            />
          </div>
          <div>
            <Button type="submit" />
          </div>
        </div>
      </form>
    </Box>
  );
};

export default AddUserForm;
