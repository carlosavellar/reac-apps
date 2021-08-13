import { useState } from "react";

const BasicForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredFirstNameIsTouched, setEnteredFirstNameIsTouched] =
    useState(false);
  const [nameIsValid, setFirstNameIsValid] = useState(true);
  const enteredFirstNameIsValid = enteredFirstName.trim() !== "";
  const inputEnteredFirstNameIsInvalid =
    !enteredFirstNameIsValid && enteredFirstNameIsTouched;

  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredLastNameIsTouched, setEnteredLastNameIsTouched] =
    useState(false);
  const [lastNameIsValid, setLastNameIsValid] = useState(true);
  const enteredLastNameIsValid = enteredLastName.trim() !== "";
  const inputEnteredLastNameIsInvalid =
    !enteredLastNameIsValid && enteredLastNameIsTouched;

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const enteredEmailIsValid = enteredEmail.includes("@");
  const inputEnteredEmailIsInvalid =
    !enteredEmailIsValid && enteredEmailIsTouched;

  const firstNameChangeHandler = (evt) => {
    setEnteredFirstName(evt.target.value);
  };

  const inputFirstNameBlurHandler = () => {
    setEnteredFirstNameIsTouched(true);
  };

  const lastNameChangeHandler = (evt) => {
    setEnteredLastName(evt.target.value);
  };

  const inputLastNameBlurHandler = () => {
    setEnteredLastNameIsTouched(true);
  };

  const emailChangeHandler = (evt) => {
    setEnteredEmail(evt.target.value);
  };

  const inputEmailBlurHandler = () => {
    setEnteredEmailIsTouched(true);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setEnteredFirstNameIsTouched(true);
    setEnteredLastNameIsTouched(true);
    setEnteredEmailIsTouched(true);

    if (
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredEmailIsValid
    ) {
      setFirstNameIsValid(false);
      setLastNameIsValid(false);
      setEmailIsValid(false);
      return;
    }

    setFirstNameIsValid(true);
    setLastNameIsValid(true);
    setEmailIsValid(true);

    setEnteredFirstNameIsTouched(false);
    setEnteredLastNameIsTouched(false);
    setEnteredEmailIsTouched(false);
    setEnteredFirstName("");
  };

  const classInput = inputEnteredFirstNameIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={submitForm}>
      <div className="control-group">
        <div className={classInput}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={inputFirstNameBlurHandler}
          />
          {inputEnteredFirstNameIsInvalid && (
            <div style={{ color: "red" }}>
              <strong>First name</strong> input is invalid
            </div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={inputLastNameBlurHandler}
          />
          {inputEnteredLastNameIsInvalid && (
            <div style={{ color: "red" }}>
              <strong>Last name</strong> input is invalid
            </div>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={inputEmailBlurHandler}
        />
        {inputEnteredEmailIsInvalid && (
          <div style={{ color: "red" }}>
            <strong>Email</strong> input is invalid
          </div>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
