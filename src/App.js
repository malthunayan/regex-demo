import React, { useState } from "react";

const App = () => {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: false, password: false });
  const [showPassword, setShowPassword] = useState(true);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setAccount((account) => ({ ...account, [name]: value }));

    // Check the validity of the current field being changed,
    // and set the error state of that field to be true
    // if the field is invalid.
    const isInvalid = !target.checkValidity();
    setErrors((errors) => ({ ...errors, [name]: isInvalid }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // The target on submission is the entire form,
    // so check if the inputs match the constraints set.
    // There are other HTML constraints available,
    // such as max and minLength, but those are
    // beyond the scope of this demo.
    if (e.target.checkValidity()) {
      alert("The form passed our test! :D");
    } else {
      alert("The form failed our test! :'(");
    }
  };

  const handleErrors = (fieldName) => {
    // Bootstrap base form class
    let className = "form-control ";

    // If field is empty return only base-class
    if (account[fieldName].length === 0) return className.trimEnd();

    // If field is invalid return invalid Bootstrap class
    if (errors[fieldName]) return className + "is-invalid";

    // Return valid input if input is valid
    return className + "is-valid";
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit} noValidate>
          <h3>Test Regex</h3>

          <div className="form-group">
            <label>Username Field</label>
            <input
              type="tel"
              className={handleErrors("username")}
              onChange={handleChange}
              placeholder="Enter phone number"
              // Custom regex pattern for validating Kuwaiti
              // phone numbers. Written by testing different
              // phone numbers in the regex playground.
              pattern="^(\+965)?\s?[2569]\d{3}(-|\s)?\d{4}"
              name="username"
              value={account.username}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              // Switch between hidden and text field depending on the state
              type={showPassword ? "text" : "password"}
              className={handleErrors("password")}
              onChange={handleChange}
              placeholder="Enter password"
              // Password regex found on StackOverflow, the requirements are:
              // At least 1 lowercase and 1 uppercase letter, 1 number,
              // 1 special character, and a minimum of 8 characters long.
              // Check the README file for the link to the discussion.
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              name="password"
              value={account.password}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                // Change hidden field state
                onChange={() =>
                  setShowPassword((showPassword) => !showPassword)
                }
                checked={showPassword}
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Show password
              </label>
            </div>
          </div>

          <input
            type="submit"
            className="btn btn-primary btn-block"
            // Disable the button if the fields are empty
            disabled={!(account.username.length && account.password.length)}
          />
        </form>
      </div>
    </div>
  );
};

export default App;
