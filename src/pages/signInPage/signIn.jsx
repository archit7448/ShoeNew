import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { useAuth } from "../../context/auth";
import "./signIn.css";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { LoginHandler, error, setError } = useAuth();
  const navigate = useNavigate();
  const guestHandler = () => {
    setEmail("architsingh1064@gmail.com");
    setPassword("archit123");
    LoginHandler({ email: "architsingh1064@gmail.com", password: "archit123" });
  };
  return (
    <main>
      <Header />
      <section className="form-wrapper validation">
        <form className="form">
          <h1>SIGN IN</h1>
          <label>
            <input
              type="text"
              value={email}
              onChange={(event) => {
                setError(false);
                setEmail(event.target.value);
              }}
              required
            />
            <h2 className="animate-h2">E-MAIL*</h2>
          </label>
          <label>
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setError(false);
                setPassword(event.target.value);
              }}
              required
            />
            <h2 className="animate-h2">PASSWORD*</h2>
          </label>
          <h4 className="guest-button" onClick={() => guestHandler()}>
            Guest Login?
          </h4>
          {error && <h2 className="wrong-color">Invalid Credentials</h2>}
          <button
            className="button button-primary button-form"
            onClick={(event) => {
              event.preventDefault();
              email.length !== 0 &&
                password.length !== 0 &&
                LoginHandler({ email: email, password: password });
            }}
          >
            Sign In
          </button>
          <div className="flex-row">
            <h3>New User?</h3>
            <h5 className="signUp-button" onClick={() => navigate("/signUp")}>
              SignUp Now
            </h5>
          </div>
        </form>
      </section>
    </main>
  );
};
