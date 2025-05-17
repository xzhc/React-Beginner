import { useRef, useState } from "react";
import { checkEmail, checkPassword } from "./validators";

export function RefForm() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isAfterFirstSubmitRef, setIsAfterFirstSubmit] = useState(false);
  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);

    const emailResults = checkEmail(emailRef.current.value);
    const passwordResults = checkPassword(passwordRef.current.value);

    setEmailErrors(emailResults);
    setPasswordErrors(passwordResults);

    if (emailResults.length === 0 && passwordResults.length === 0) {
      alert("Success");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          ref={emailRef}
          onChange={
            isAfterFirstSubmitRef
              ? (e) => setEmailErrors(checkEmail(e.target.value))
              : undefined
          }
        />
        {emailErrors.length > 0 && (
          <div className="msg">{emailErrors.join(", ")}</div>
        )}
      </div>
      <div className={`form-group ${passwordErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          ref={passwordRef}
          onChange={
            isAfterFirstSubmitRef
              ? (e) => setPasswordErrors(checkPassword(e.target.value))
              : undefined
          }
        />
        {passwordErrors.length > 0 && (
          <div className="msg">{passwordErrors.join(", ")}</div>
        )}
      </div>

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
