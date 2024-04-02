import { useState } from "react";
import background from "../../public/artwork/loginSignupBackground.png";
import { Link } from "react-router-dom";
import logo from "../../public/artwork/stelrLogoWhite.svg";

function Login() {
  const styles: { [key: string]: React.CSSProperties } = {
    page: {
      minHeight: "100vh",
      background: `url(${background})`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Roboto, sans-serif",
    },
    card: {
      textAlign: "center",
      borderRadius: "1em",
      border: "1px solid #ccc",
      background: "white",
      width: "30%",
      padding: "2em",
      marginTop: "2em",
    },
    logo: {
      width: "12.5em",
      height: "auto",
      position: "absolute",
      top: "1em",
      left: "1em",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginLeft: "1em",
    },
    formInput: {
      background: "rgba(128, 128, 128, 0.1)",
      border: "1px solid #ccc",
      padding: "0.5em",
      marginBottom: "1em",
      width: "90%",
      height: "2em",
      borderRadius: ".5em",
    },
    formButton: {
      backgroundColor: "#00A6FB",
      color: "white",
      borderRadius: ".5em",
      padding: "1em",
      border: "none",
      cursor: "pointer",
      fontSize: "1em",
      margin: "1em auto",
      width: "80%",
      maxWidth: "20em",
    },
    label: {
      textAlign: "left",
      width: "90%",
      marginBottom: "0.5em",
    },
  };

  const [placeholderEmail, setPlaceholderEmail] = useState("tyana@gostelr.com");
  const [placeholderPassword, setPlaceholderPassword] = useState("********");

  const handleEmailFocus = () => {
    setPlaceholderEmail("");
  };

  const handleEmailBlur = () => {
    setPlaceholderEmail("tyana@gostelr.com");
  };

  const handlePasswordFocus = () => {
    setPlaceholderPassword("");
  };

  const handlePasswordBlur = () => {
    setPlaceholderPassword("********");
  };

  return (
    <div style={styles.page}>
      <Link to="/">
        <img src={logo} alt="Stelr Logo" style={styles.logo} />
      </Link>
      <div style={styles.card}>
        <h1>Login to Account</h1>
        <p>Please enter you email and password to continue</p>
        <br />
        <form style={styles.form}>
          <label style={styles.label} htmlFor="email">
            Email Address:
          </label>
          {/* <br /> */}
          <input
            style={styles.formInput}
            type="email"
            id="email"
            name="email"
            placeholder={placeholderEmail}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            autoComplete="on"
          />
          <br />
          <label style={styles.label} htmlFor="password">
            Password:
          </label>
          {/* <br /> */}
          <input
            style={styles.formInput}
            type="password"
            id="password"
            name="password"
            placeholder={placeholderPassword}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
          />
          <button style={styles.formButton}>Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
