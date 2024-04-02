import logo from "../../public/artwork/stelrLogoWhite.svg";
import background from "../../public/artwork/loginSignupBackground.png";
import { Link } from "react-router-dom";

function Signup() {
  const styles: { [key: string]: React.CSSProperties } = {
    entirePage: {
      display: "flex",
    },
    pageLeft: {
      minHeight: "100vh",
      background: `url(${background})`,
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      padding: "2em",
    },
    pageRight: {
      minHeight: "100vh",
      textAlign: "center",
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2em",
    },
    logo: {
      width: "6.5em",
      height: "auto",
      marginBottom: "2em",
    },
    heading: {
      fontSize: "2em",
      margin: "0em",
      textAlign: "center",
    },
    subheading: {
      fontSize: "1.2em",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    input: {
      width: "30em",
      height: "3em",
      marginBottom: "1em",
      padding: "0.5em",
      borderRadius: "0.5em",
      border: "1px solid #ccc",
      background: "rgba(128, 128, 128, 0.1)",
    },
    button: {
      width: "20em",
      height: "3em",
      backgroundColor: "#00A6FB",
      color: "#fff",
      borderRadius: "0.5em",
      border: "none",
      cursor: "pointer",
      fontSize: "1em",
    },
  };

  return (
    <div style={styles.entirePage}>
      <div style={styles.pageLeft}>
        <Link to="/">
          <h1>
            <img src={logo} style={styles.logo} alt="Stelr Logo" />
          </h1>
        </Link>
        <h2 style={styles.heading}> GLOBAL LENDING AND INVESTING SIMPLIFIED</h2>
      </div>
      <div style={styles.pageRight}>
        <h1 style={styles.heading}>Create an Account</h1>
        <p style={styles.subheading}>
          Please enter your information to create an account
        </p>
        <form style={styles.form}>
          <input style={styles.input} placeholder="Full Name" />
          <input style={styles.input} placeholder="Email Address" />
          <input style={styles.input} placeholder="Country" />
          <input style={styles.input} placeholder="Date of Birth" />
          <input style={styles.input} placeholder="Password" type="password" />
          <input
            style={styles.input}
            placeholder="Confirm Password"
            type="password"
          />
          <button style={styles.button}>Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
