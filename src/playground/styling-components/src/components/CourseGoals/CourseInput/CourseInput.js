import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  useEffect(() => {
    if (enteredValue.trim() > "") {
      setIsValid(true);
    }
  }, [enteredValue]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim() === "") {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  // const FormControl = styled.div`
  //   margin: 0.5rem 0;

  //   & label {
  //     font-weight: bold;
  //     display: block;
  //     margin-bottom: 0.5rem;
  //     color: ${(props) => (props.invalid ? "red" : "black")};
  //   }

  //   & input {
  //     display: block;
  //     width: 100%;
  //     border: 1px solid #ccc;
  //     font: inherit;
  //     line-height: 1.5rem;
  //     padding: 0 0.25rem;
  //     background-color: ${(props) => (props.invalid ? "orange" : "white")};
  //   }

  //   & input:focus {
  //     outline: none;
  //     background: #fad0ec;
  //     border-color: #8b005d;
  //   }

  //   &.invalid input {
  //     border: 2px solid red;
  //     background-color: darksalmon;
  //   }
  //   &.invalid label {
  //     color: red;
  //   }
  // `;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["form-control"]} ${!isValid && "invalid"}`}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
