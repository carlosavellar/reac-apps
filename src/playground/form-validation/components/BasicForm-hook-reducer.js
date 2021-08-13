import useInput from "../hooks/input-hook-reducer";
const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: nameInputIsValid,
    valueInputHandler: nameChangeHandler,
    inputBlurHandler: inputNameBlurHandler,
    inputError: inputNameError,
    reset: resetNameInput,
  } = useInput((value) =>value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastNameInputIsValid,
    valueInputHandler: lastNameChangeHandler,
    inputBlurHandler: inputLastNameBlurHandler,
    inputError: inputLastNameError,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailInputIsValid,
    valueInputHandler: emailChangeHandler,
    inputBlurHandler: inputEmailBlurHandler,
    inputError: inputEmailError,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsInValid = true;

  if (nameInputIsValid && lastNameInputIsValid && emailInputIsValid) {
    formIsInValid = false;
  }

  const submitForm = (e) => {
    e.preventDefault();

    if (!formIsInValid) {
      return;
    }

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const classInput = inputNameError ? "form-control invalid" : "form-control ";

  return (
    <form onSubmit={submitForm}>
      <div className="control-group">
        <div className={classInput}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={inputNameBlurHandler}
          />
          {inputNameError && (
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
          {inputLastNameError && (
            <div style={{ color: "red" }}>
              <strong>Last name</strong> input is invalid
            </div>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={inputEmailBlurHandler}
        />
        {inputEmailError && (
          <div style={{ color: "red" }}>
            <strong>Email</strong> input is invalid
          </div>
        )}
      </div>
      <div className="form-actions">
        <button disabled={formIsInValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
