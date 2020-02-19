import React, { Fragment, useState } from "react";
import AddRemoveTag from "./tags/add-remove-tag";
import "./css/main.css";

export default {
  title: "Forms"
};

const InputWithValidator = ({
  id,
  inputProps,
  labelText,
  checks,
  errorMessage
}) => {
  const [isValid, setIsValid] = useState(true);

  const checkValidity = ev => {
    const { validity } = ev.target;
    const checksPassed = checks.filter(check => validity[check]).length === 0;
    setIsValid(checksPassed.length);
  };

  return (
    <Fragment>
      <label className="pr3" htmlFor={id}>
        {labelText}
      </label>
      <input id={id} {...inputProps} onBlur={checkValidity} />
      <p className={`${isValid ? `dn` : `dib red`}`}>{errorMessage}</p>
    </Fragment>
  );
};

export const EmailValidator = () => (
  <InputWithValidator
    inputProps={{ type: "email" }}
    id="email-field"
    labelText="Enter email:"
    checks={["typeMismatch"]}
    errorMessage="Please enter a valid email!!"
  />
);

export const NumberValidator = () => (
  <InputWithValidator
    inputProps={{ type: "number", min: "0", max: "12" }}
    id="number-field"
    labelText="Enter a number between 0 and 12:"
    checks={["rangeOverflow", "rangeUnderflow"]}
    errorMessage="Please enter a number between 0 and 12!!"
  />
);

export const NameRequiredValidator = () => (
  <InputWithValidator
    inputProps={{ type: "text", required: true }}
    id="name-field"
    labelText="Enter your name: "
    checks={["valueMissing"]}
    errorMessage="This is a required input"
  />
);
