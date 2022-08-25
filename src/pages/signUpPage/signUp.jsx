import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "../../components/header/header";
import { useAuth } from "../../context/auth";
import { validateEmail } from "../../utility/emailValidation/email";
export const SignUp = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorState, setErrorState] = useState("");
  const { SignUpHandler } = useAuth();
  const errorValidation = (event) => {
    event.preventDefault();
    if (firstName.length < 2) {
      setErrorState("Fill First Name!");
    } else if (lastName.length < 2) {
      setErrorState("Fill Last Name!");
    } else if (!validateEmail(email)) {
      setErrorState("Please fill Email Details Right!");
    } else if (password.length < 9) {
      setErrorState("password should be greater then 9");
    } else {
      setErrorState("")
      SignUpHandler({ firstName, lastName, email, password });
    }
  };

  return (
    <main>
      <Header />
      <section className="form-wrapper validation">
        <form className="form">
          <h1>SIGN UP</h1>
          <label>
            <input
              type="text"
              value={firstName}
              onChange={(event) => setfirstName(event.target.value)}
              required
            />
            <h2 className="animate-h2">FIRST NAME*</h2>
          </label>
          <label>
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
            <h2 className="animate-h2">LAST NAME*</h2>
          </label>
          <label>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <h2 className="animate-h2">E-MAIL*</h2>
          </label>
          <label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <h2 className="animate-h2">PASSWORD*</h2>
          </label>
          <h2 className="wrong-color">{errorState}</h2>
          <button
            className="button button-primary button-form"
            onClick={(event) => errorValidation(event)}
          >
            Sign Up
          </button>
          <div className="flex-row">
            <h3>Already have account?</h3>
            <Link to="/signIn">
              {" "}
              <h5 className="signUp-button">SignIn Now</h5>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};
