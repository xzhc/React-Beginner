//import { useRef, useState } from "react";
import ReactSelect from "react-select";
import { useForm, Controller, useController } from "react-hook-form";
import "./styles.css";
// import { checkEmail, checkPassword, checkCountry } from "./validator";
import { FormGroup } from "./FormGroup";
const COUNTRY_OPTIONS = [
  { label: "United States", value: "us" },
  { label: "India", value: "IN" },
  { label: "Mexico", value: "MX" },
];

function App() {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const countryRef = useRef();
  // const [emailErrors, setEmailErrors] = useState([]);
  // const [passwordErrors, setPasswordErrors] = useState([]);
  // const [countryErrors, setCountryErrors] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { field: countryField } = useController({
    name: "country",
    control,
    rules: {
      required: {
        value: true,
        message: "Required",
      },
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    alert("Success");
  };

  // function onSubmit(e) {
  //   e.preventDefault();

  //   const emailResults = checkEmail(emailRef.current.value);
  //   const passwordResults = checkPassword(passwordRef.current.value);
  //   const countryResults = checkCountry(countryRef.current.getValue()[0]);

  //   setEmailErrors(emailResults);
  //   setPasswordErrors(passwordResults);
  //   setCountryErrors(countryResults);

  //   if (
  //     emailResults.length === 0 &&
  //     passwordResults.length === 0 &&
  //     countryResults.length === 0
  //   ) {
  //     alert("Success");
  //   }
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <FormGroup errorMessage={errors?.email?.message}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="text"
          id="email"
          {...register("email", {
            required: { value: true, message: "Required" },
            validate: (value) => {
              if (!value.endsWith("@webdevsimplified.com")) {
                return "Email must end with @webdevsimplified.com";
              }
            },
          })}
        />
      </FormGroup>

      <FormGroup errorMessage={errors?.password?.message}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          {...register("password", {
            required: { value: true, message: "Required" },
            validate: (value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain a number";
              }
              if (!/[a-zA-Z]/.test(value)) {
                return "Password must contain a letter";
              }
            },
            minLength: {
              value: 10,
              message: "Password must be at least 10 characters",
            },
          })}
        />
      </FormGroup>
      <FormGroup errorMessage={errors?.country?.message}>
        <label className="label" htmlFor="country">
          Country
        </label>
        <ReactSelect
          isClearable
          options={COUNTRY_OPTIONS}
          classNamePrefix="react-select"
          {...countryField}
        />
      </FormGroup>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;
